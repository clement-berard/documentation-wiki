---
title: Docker
lang: fr-FR
---

# Docker

[[toc]]

## Cheat Sheet

| What Do          | Command                                            |
|------------------|----------------------------------------------------|
| pull image       | `docker pull image_name:tag`                       |
| create container | `docker create --name container_name image_name:tag` |
|                  |                                                    |

### Links Cheat

- [Docker Commands and Best Practices Cheat Sheet](https://zeroturnaround.com/rebellabs/docker-commands-and-best-practices-cheat-sheet/)

## Process

### Création de l'image Docker (avec Ruby2)

Objectifs : créer une image personalisée avec les composants pour builder le front.

Lien de l'image parente Docker utilisée : [https://github.com/jasonwyatt/docker-ruby2.2](https://github.com/jasonwyatt/docker-ruby2.2)

```bash
docker pull jasonwyatt/ruby2.2
```

On liste les différentes images disponibles :

```bash
bash-3.2$ docker images

REPOSITORY           TAG                 IMAGE ID            CREATED             SIZE
jasonwyatt/ruby2.2   latest              9bacc2a12406        6 days ago          434.4 MB
```

Il faut donc créer une instance de cette image (container) et accéder au prompt bash :

```bash
docker run  -P -it --name czs -v /webapp 9bacc2a12406 bash
```

Ici, vous avez accès au promt bash, et faut donc ensuite installer tous les éléments listés dans Environnement de développement

Une fois que tout est installé, il faut enregistrer cette nouvelle image :

```bash
docker commit <id_container> <hub-user>/<repo-name>[:<tag>]
```

### Démarrage du container

On `run` l'images en créant donc une instance appelée `container` :

```bash
docker run  -P -it --name czs -v /webapp 9bacc2a12406 bash
```

où `9bacc2a12406` est l'ID de l'images

Le container est bien créé :

```bash
bash-3.2$ docker ps -a

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
d171b8804f95        9bacc2a12406        "/bin/bash"         42 minutes ago      Up 42 minutes                           czs
```

Lancer le prompt sur ce container :

```bash
docker attach d171b8804f95
```

### Lancer une commande dans un container déjà démarré

```bash
bash-3.2$ docker exec d171b8804f95 compass -v

Compass 1.0.3 (Polaris)
Copyright (c) 2008-2016 Chris Eppstein
Released under the MIT License.
Compass is charityware.
Please make a tax deductable donation for a worthy cause: http://umdf.org/compass
```

où `d171b8804f95` est l'ID du container

### Afficher les container Docker actif

```bash
docker rmi -f $(docker images | grep "^<none>" | awk '{print $"3"}')
```

## Useful links

- [Le déploiement par conteneurs avec Docker | Sam & Max](http://sametmax.com/le-deploiement-par-conteneurs-avec-docker/)
- [Comment pusher sur Hub Docker](https://docs.docker.com/docker-hub/repos/)
- [Les Dockerfiles](http://putaindecode.io/fr/articles/docker/dockerfile/)
- [Gérer son environnement de développement avec Docker](https://fr.slideshare.net/julien.dubois/grer-son-environnement-de-dveloppement-avec-docker)
- [Publishing a Static AngularJS Application with Docker](http://rdn-consulting.com/blog/2014/11/29/publishing-a-static-angularjs-application-with-docker/)


## MAJ 2019

- Install Portainer : 

```bash 
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```

https://blog.codeship.com/docker-guis/

- Lancer un container : 

```bash 
docker run -it -d dbb81800ec29
```

ou `dbb81800ec29` est l'ID de l'image