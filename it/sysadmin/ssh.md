# SSH

[[toc]]

## Authentification basic

 ```bash 
ssh root@10.0.0.71 
```

Si tout ce passe bien, un mot de passe vous est demandé. Cependant si vous avez des jeux de
clés private/public dans votre dossier `.ssh` cette erreur peut apparaitre: 

```bash
Received disconnect from 10.0.0.71 port 22:2: Too many authentication failures
Disconnected from 10.0.0.71 port 22
```

Préférez alors l'authentification avec le mot de passe: 

 ```bash 
ssh -o PreferredAuthentications=password root@10.0.0.71
```

## Authentification par clés 

### Création de la paire de clé

Il faut créer le jeu des deux clés publique et privée. Pour se faire, ouvrez un terminal, et sur votre poste client (l’ordinateur qui veut se connecter à un serveur sans taper de mot de passe) tapez :

```bash
ssh-keygen
```

ou pour plus de sécurité

```bash
ssh-keygen -t rsa -b 4096
```

Vous devez répondre à plusieurs questions :

```bash
Generating public/private rsa key pair.  
Enter file in which to save the key (/home/mon_nom/.ssh/id_rsa):  
Enter passphrase (empty for no passphrase):  
Enter same passphrase again:
```

- La passphrase n’est pas obligatoire
- vous pouvez changer l’emplacement de votre jeu de clé

Deux nouveaux fichiers ont été créé dans le dossier `~/.ssh/`, `id_rsa` (clé privée) et `id_rsa.pub` (clé publique).

### Enregistrer la clé publique sur le serveur distant

Il faut fournir au serveur notre clé publique. Pour ce faire, utiliser la commande:

```bash
ssh-copy-id -i ~/.ssh/id_rsa user@monserveur.com
```

Pour forcer la demande du mot de passe: 

```bash
ssh-copy-id -o PubkeyAuthentication=no -i ~/.ssh/id_rsa user@monserveur.com
```

NB : Pour les utilisateurs de Mac OS X, `ssh-copy-id` n’existe pas par défaut, il faut l’installer avec brew `brew install ssh-copy-id`

La commande `ssh-copy-id` a pour but de copier la clé publique sur le serveur distant, et donc le mot de passe vous sera demandé à ce moment la (mais c’est la dernière fois ☺ )

Pour tester, rien de plus simple :

```bash
ssh user@monserveur.com
```

### Fichier de config

Il faut un fichier `~/.ssh/config`. Exemple d'un fichier de config : 

```
Host github.com
    User git
    Port 22
    IdentityFile /Users/cberard/.ssh/id_rsa_github

 Host github.com
    User git
    Port 22
    IdentityFile /Users/cberard/.ssh/id_rsa_gitlab

Host mon_serveur.local
    User eric
    Port 1234
    IdentityFile /Users/cberard/.ssh/id_rsa_mon_serveur_local
```

Et pour se connecter `ssh mon_serveur.local`

### Liens utiles

- https://www.ssh.com/ssh/sshd_config/
- https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/

## Permissions

Good permissions for `.ssh` folder

```bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 400 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

AIO command

```bash 
chmod 700 ~/.ssh;chmod 400 ~/.ssh/*;chmod 644 ~/.ssh/*.pub;chmod 644 ~/.ssh/authorized_keys;chmod 644 ~/.ssh/known_hosts;chmod 644 ~/.ssh/config
```

## Setting up ssh config file with id_rsa through tunnel

Source : https://superuser.com/a/525750

## Troubleshooting

### Synology

Si même après la configuration votre mot de passe est toujours demandé, essayez : 

- Se rendre dans le dossier `homes`
- Appliquer les droits suivant sur le repertoire du user : 

```bash
sudo chmod 755 mon_user
```

Pour redémarrer le service SSH (toutes les connexions seront coupées) : 

```bash
sudo synoservicectl --restart sshd
```

:information_source: Si l'accès est bloqué après cette commande, désactiver puis réactiver SSH depuis l'interface DSM.

Source : https://forum.synology.com/enu/viewtopic.php?t=126166

## References

- https://www.ssh.com/ssh/keygen/
