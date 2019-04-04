# Jeedom

[[toc]]

## Get started

**Connexion à la DB :** 

```bash 
sudo mysql -u root
```

**Création d'un User avec tous les privileges :** 

```bash 
MariaDB [(none)]> GRANT ALL PRIVILEGES ON jeedom.* TO my_user@'%' IDENTIFIED BY 'my_pwd';
```

**Rendre la DB accessible depuis l'exterieur :** 

Taper la commande suivante : 

```bash 
mysqld --help --verbose | grep 'bind-address'
```

Si cette ligne apparait : 

```bash 
bind-address                                               127.0.0.1
```

alors votre DB n'ecoute que sur le serveur sur lequel elle est installee (`localhost - 127.0.0.1`).

Il faut donc modifier le fichier suivant : `sudo vi /etc/mysql/mariadb.conf.d/50-server.cnf`

et commenter la ligne : 

```bash
#bind-address                                               127.0.0.1
```

et enfin redemmarer le serveur MySql : `sudo service mysql restart`.

Vous pouvez maintenant vous connectez à la DB depuis votre reseau local avec le logiciel que vous souhaitez.

## Gestion de l'historique

::: warning
⚠ Les requêtes sont à éxécuter dans l'orde
:::

Création d'une `view` pour fusionner les deux tables d'historique présentes de base dans Jeedom, à savoir : 

- `history` qui correspond à l'historique recent
- `historyArch` qui correspond à l'archivage des historiques

La fusion des deux tables se trouve dans la vue `history_combined` :

```sql 
-- Creation de la vue avec les historiques recents et archives

CREATE VIEW jeedom.history_combined AS
   SELECT * FROM jeedom.history AS t1
   UNION ALL
   SELECT * FROM jeedom.historyArch

```

Création d'une vue qui retourne les équipements logiques avec leur Objet Jeedom associé: 

```sql 
CREATE VIEW `fullEqLogiq` AS
    SELECT 
        `t_eqLogic`.`id` AS `eqLogicId`,
        `t_eqLogic`.`name` AS `eqLogicName`,
        `t_object`.`id` AS `objectId`,
        `t_object`.`name` AS `objectName`,
        IF(ISNULL(`t_object`.`id`),
            CONCAT('[', `t_eqLogic`.`name`, ']'),
            CONCAT('[',
                    `t_object`.`name`,
                    ']',
                    '[',
                    `t_eqLogic`.`name`,
                    ']')) AS `fullSlug`
    FROM
        (`eqLogic` `t_eqLogic`
        LEFT JOIN `object` `t_object` ON ((`t_eqLogic`.`object_id` = `t_object`.`id`)))
```

Création d'une vue qui retourne les commandes avec leur Equipements logiques / Objet Jeedom associés:

```sql 
CREATE VIEW `fullCmd` AS
    SELECT 
        `t_cmd`.`id` AS `id`,
        `t_cmd`.`name` AS `name`,
        `t_fullEqLogiq`.`fullSlug` AS `objectEqLogicSlug`,
        CONCAT(`t_fullEqLogiq`.`fullSlug`,
                '[',
                `t_cmd`.`name`,
                ']') AS `fullSlug`
    FROM
        (`cmd` `t_cmd`
        JOIN `fullEqLogiq` `t_fullEqLogiq` ON ((`t_cmd`.`eqLogic_id` = `t_fullEqLogiq`.`eqLogicId`)))
```

Enfin, création de la vue qui rassemble tout l'historique et ses commandes associées : 

```sql 
CREATE VIEW `full_history` AS
    SELECT 
        CAST(DATE_FORMAT(`t_history`.`datetime`, '%Y-%m-%dT%TZ')
            AS DATETIME) AS `date`,
        `t_cmd`.`fullSlug` AS `name`,
        (0 + `t_history`.`value`) AS `val`
    FROM
        (`history_combined` `t_history`
        JOIN `fullCmd` `t_cmd` ON ((`t_history`.`cmd_id` = `t_cmd`.`id`)))
    ORDER BY `t_history`.`datetime`
```

**Des petites requêtes qui peuvent servir :** 

<<< @/domotique/jeedom/requests.sql

## Historique dans Grafana

Suivre les [instructions](./grafana-jeedom.md)

