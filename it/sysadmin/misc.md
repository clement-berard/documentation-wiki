# SysAdmin - Diver

[[toc]]

## [ShellFish] Documentation

Le fichier `config.fish` doit etre dans le dossier `~/.config/fish/`

### Informations

Install Fish sur MacOS

```bash
$ brew install fish
```

Setting Fish as your default shell on Mac OS X

```bash
$ echo "/usr/local/bin/fish" | sudo tee -a /etc/shells
$ chsh -s `which fish`
```

[https://gist.github.com/henriquea/ff88acec54b86f268466](https://gist.github.com/henriquea/ff88acec54b86f268466)

### Liens

- Config de Graphikart : [https://github.com/Grafikart/dotfiles/blob/master/config/fish/.config/fish/config.fish](https://github.com/Grafikart/dotfiles/blob/master/config/fish/.config/fish/config.fish)

## PhpStorm

### Terminal

- To use Cmder : `"cmd.exe" /k ""%CMDER_ROOT%\vendor\init.bat""`
- To use WSL : `C:\Windows\System32\wsl.exe`

## Cmder

Add WSL Terminal : 

- Run Cmder as administrator
- Go to settings, under `Startup > Tasks`
- Set the name : `WSL (as admin)`
- Set Task parameters : `/icon %USERPROFILE%\AppData\Local\lxss\bash.ico`
- Set Command : `*cmd /c C:\Windows\System32\wsl.exe ~ -new_console:p:%USERPROFILE%`

## Oh-my-zsh

Trouble with : `Insecure completion-dependent directories detected`

> Set ZSH_DISABLE_COMPFIX=true in your zshrc file, before oh-my-zsh.sh is sourced, and update OMZ to the latest version. It should ignore these permission issues and load the completion system normally.

Source: https://github.com/robbyrussell/oh-my-zsh/issues/6835#issuecomment-390216875
