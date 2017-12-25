# 进程管理器 - Supervisor

这里我以 laravel Horizon 进程管理为例

系统环境： Ubuntu 16.04

## 安装

```
sudo apt-get install supervisor
```

## 配置

supervisor 的配置文件在 `/etc/supervisor` 目录下
```
cd /etc/supervisor/conf.d/
vim horizon.conf
```
添加如下内容
```
[program:horizon]
process_name=horizon
command=php /path/artisan horizon
autostart=true
autorestart=true
user=root
redirect_stderr=true
stdout_logfile=/var/www/logs/horizon.log
```
重启服务
```
service supervisor restart
```

通过 `service supervisor status` 查看运行状态（是否出错）

Linux 查看进程小技巧
```
ps aux | grep xxx
```
如 `ps aux | grep horizon`.