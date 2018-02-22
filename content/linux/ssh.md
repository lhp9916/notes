## SSH 免密码登录
将本机上公钥的内容（`~/.ssh/id_rsa.pub`）复制的服务器上的 `~/.ssh/authorized_keys` 文件中，使用 `ssh-copy-id`
```
ssh-copy-id root@ip
```

## SSH连接linux时，长时间不操作就断开的解决方案
修改`/etc/ssh/sshd_config`文件，找到 `ClientAliveInterval 0`和`ClientAliveCountMax 3`并将注释符号（"#"）去掉

将`ClientAliveInterval`对应的0改成60,
`ClientAliveInterval`指定了服务器端向客户端请求消息 的时间间隔, 默认是0, 不发送，`ClientAliveInterval` 60表示每分钟发送一次, 然后客户端响应, 这样就保持长连接了.

`ClientAliveCountMax`, 使用默认值3即可.`ClientAliveCountMax`表示服务器发出请求后客户端没有响应的次数达到一定值, 就自动断开， 正常情况下, 客户端不会不响应。

重启sshd服务：
```
service sshd restart
```