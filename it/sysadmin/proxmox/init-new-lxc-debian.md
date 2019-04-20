# Init new LXC container with Debian 9

[[toc]]

## Steps

::: tip
All the following command must be execute as **root**
:::

### Before start

Update your system

```bash 
apt-get update && apt-get upgrade

# install some packages
apt-get install sudo

# Optional, install `vim`
apt-get install vim
```

### New user

Create a new user

```bash
adduser myuser
usermod -aG sudo myuser
```

Allow this user to connect via SSH ...

```bash 
vim /etc/ssh/sshd_config
```

... and change these lines ...

```bash 
PermitRootLogin no
AllowUsers myuser
```

... then restart ssh service

```bash 
service sshd restart
```

Now you can add your ssh-key (Cf. [SSH](../ssh.md))


::: tip
All the following command must be execute as **myuser**
:::

### Install Oh My ZSH

```bash 
sudo apt-get install zsh git-core

wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

chsh -s `which zsh`

sudo shutdown -r 0
```

### Install Node.js

⚠️ Follow https://tecadmin.net/install-latest-nodejs-npm-on-debian/

```bash 
sudo apt-get install curl software-properties-common

curl -sL https://deb.nodesource.com/setup_11.x | sudo bash -

sudo apt-get install nodejs
```

#### Install `n`

```bash 
sudo npm i -g n

sudo n 10.15 # replace by your version

sudo n 10.15 # again, to apply version
```

## Sources

- https://linuxize.com/post/how-to-create-a-sudo-user-on-debian/
- https://tecadmin.net/install-latest-nodejs-npm-on-debian/
- https://gist.github.com/tsabat/1498393
- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/v2v_guide/preparation_before_the_p2v_migration-enable_root_login_over_ssh
- https://stackoverflow.com/a/9270753
- https://www.ostechnix.com/allow-deny-ssh-access-particular-user-group-linux/
