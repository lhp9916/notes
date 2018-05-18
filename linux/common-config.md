# 常用配置

## sublime
```
    "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
    "theme": "Adaptive.sublime-theme",
    "font_face": "Fira Code",
    "font_size": 11,
    "line_padding_bottom": 5,
    "line_padding_top": 5,
```

## .gitconfig
```
[user]
        name = lhp9916
        email = lhp9916@gmail.com
[core]
    editor = vim
[alias]
    st = status
    co = checkout
    ci = commit -a -v
    br = branch
    last = log -1
    l = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    ll = log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'
    throw = reset --hard HEAD
    throwh = reset --hard HEAD^
[color]
    ui = true
[push]
    default = current
```

## Bash 别名
`.zshrc`
```
if [ -f ~/.bash_aliases ]; then
. ~/.bash_aliases
fi

# composer
export PATH=$HOME/.config/composer/vendor/bin:$PATH

# homestead
function homestead() {
    ( cd ~/Homestead && vagrant $* )
}
```
`.bash_aliases`
```
alias vm='ssh vagrant@127.0.0.1 -p 2222'

# laravel
alias art="php artisan"
alias serve='php artisan serve'
alias tinker='php artisan tinker'

# git
alias gs="git status"
alias gc="git commit -a -v"
alias gaa="git add ."
alias gp="git push"
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias gll="git log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'"
```
[让你懒到逆天的 Bash 别名](https://laravel-china.org/articles/5829/to-make-you-lazy-bash-alias-guards?order_by=created_at&)

## Vim
`.vimrc`
```
set nocompatible
syntax on
set number
set t_CO=256
set linespace=16
set autowriteall
set tabstop=8
set expandtab
set softtabstop=4
set shiftwidth=4
set backspace=indent,eol,start
```
