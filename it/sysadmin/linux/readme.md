# Linux


## MiniTips

**Simply add task at startup**

```bash 
#crontab -e
@reboot  /home/user/test.sh
```

https://stackoverflow.com/a/29247942

**Activate Bluetooth on Debian/Ubuntu**

```bash 
apt-get update && apt-get install bluetooth

service bluetooth start

service bluetooth status
```

http://debian-facile.org/doc:systeme:bluetooth

## Fedora

### Install a "Nightshift" like

Install `redshift` package

```bash
sudo dnf install redshift
```

Add 2 functions to your `.bashrc`, `.zshrc` ...:

```bash
nightshift() {

  currentPid=$(pgrep -f redshift)
  
  if [ ! -z "$currentPid" ]
  then
    kill "$currentPid"
  fi

  if [ -z "$1" ]
  then
    redshift -t 2500:2500 </dev/null &>/dev/null &;
  else
    redshift -t "$1":"$1" </dev/null &>/dev/null &; 
  fi
}

stopnightshift() {
   kill $(pgrep -f redshift)
}
```


## Self-Hosted

[Go to this page](./self-hosted.md)

## Links

- [Tutorial: Créer un serveur web complet sous debian - #5 Backup & Sécurité - La Ferme du web](http://www.lafermeduweb.net/billet/tutorial-creer-un-serveur-web-complet-sous-debian-5-backup-securite-197.html)
- [backup-manager [Wiki ubuntu-fr]](https://doc.ubuntu-fr.org/backup-manager)
- [NodeJS with ISPconfig3 | Howtoforge - Linux Howtos and Tutorials](https://www.howtoforge.com/community/threads/nodejs-with-ispconfig3.72402/)
- [ISPConfig 3: Automated installation on Debian](https://www.howtoforge.com/tutorial/ispconfig-install-script-debian/)
- https://www.howtoforge.com/tutorial/how-to-install-php-7-on-debian/
