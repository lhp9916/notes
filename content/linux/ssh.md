## SSH 免密码登录
将本机上公钥的内容（`~/.ssh/id_rsa.pub`）复制的服务器上的 `~/.ssh/authorized_keys` 文件中，使用 `ssh-copy-id`
```
ssh-copy-id root@ip
```