# Docker 安装

Docker 官方为了简化安装流程，提供了一套安装脚本
```bash
curl -sSL https://get.docker.com/ | sh
```
执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 安装在系统中。

不过，由于“墙”的原因，在国内使用这个脚本可能会出现某些下载出现错误的情况。国内的一些云服务商提供了这个脚本的修改版本，使其使用国内的 Docker 软件源镜像安装，这样就避免了墙的干扰。

- DaoCloud 的安装脚本
```bash
curl -sSL https://get.daocloud.io/docker | sh
```
- Ubuntu
```shell
sudo apt install docker.io
sudo usermod -aG docker your-user
```

## Docker Compose
```
curl -L https://get.daocloud.io/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```