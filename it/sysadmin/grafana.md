---
title: Linux tools
lang: fr-FR
---

# Linux tools

[[toc]]

## Grafana

Grafana est un outil supervision simple et élégant, permettant de s’intégrer à une TSDB, ici InfluxDB. 
Grafana expose dans des dashboards les métriques brutes ou agrégées provenant d’InfluxDB et permet de définir 
de manière honteusement simple des seuils d’alertes et les actions associées.

### Installation sur Raspbian 9

- Suivre les instructions [ici](http://docs.grafana.org/installation/debian/#apt-repository)
- Lors de la commande d'installation, remplacer : 

```bashell
sudo apt-get install grafana
```

par 

```bash
sudo apt-get -o Dpkg::Options::="--force-overwrite" install grafana
```

- Editer le fichier de configuration : 

```bash
sudo vi /etc/grafana/grafana.ini
```

Les modifications à effectuer :

```bash
[server]
# Protocol (http, https, socket)
protocol = http

# The ip address to bind to, empty will bind to all interfaces
;http_addr =

# The http port  to use
http_port = 3000
```

- Enfin, lancer les commandes suivantes : 

```bash
sudo /bin/systemctl daemon-reload

sudo /bin/systemctl enable grafana-server

sudo /bin/systemctl start grafana-server
```

**Sources**

- [http://docs.grafana.org/installation/debian/#apt-repository](http://docs.grafana.org/installation/debian/#apt-repository)
- [https://askubuntu.com/a/1026767](https://askubuntu.com/a/1026767)
