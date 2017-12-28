# 搭建局域网的 Git 服务器

### 前提条件

请确保系统上安装了 `git` ,并能通过 `ssh` 连接上，可以通过下面的命令安装
```bash
sudo apt-get install git openssh-server
```

### 添加 git 用户

```bash
sudo adduser git
```
然后输入此用户的密码并再次确认密码，其余选项均回车默认即可.

### 初始化仓库

```
# 切换到 git
su git
cd

git init --bare test.git
```

此时在 `/home/git/` 目录下就有 `test.git` 这个目录。

### 验证

```bash
git clone git@ip:test.git
```
不出意外这个仓库就会被克隆下来，其他操作跟操作 github 等一样。

当然，如果你不想每次 `pull`、`push` 的时候输入密码，可以将自己的 ssh key 添加到系统 `authorized_keys`（受信任的keys），命令如下

```
ssh-copy-id git@ip
```