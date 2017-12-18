# 常用配置
## Git 别名
`.zshrc`
```
alias gs="git status"
alias gc="git commit -m "
alias gaa="git add ."
alias gp="git push"
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias gll="git log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'"
```
## Vim
`.vimrc`
```
set nocompatible
syntax on
set t_CO=256
set linespace=16
set autowriteall
set tabstop=8
set expandtab
set softtabstop=4
set shiftwidth=4
set backspace=indent,eol,start
```
