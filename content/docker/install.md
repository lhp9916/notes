# Docker 安装

这里我使用的是 Ubuntu 14.04。

Docker 官方为了简化安装流程，提供了一套安装脚本，Ubuntu 和 Debian 系统可以使用这套脚本安装：
```bash
curl -sSL https://get.docker.com/ | sh
```
执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 安装在系统中。

不过，由于“墙”的原因，在国内使用这个脚本可能会出现某些下载出现错误的情况。国内的一些云服务商提供了这个脚本的修改版本，使其使用国内的 Docker 软件源镜像安装，这样就避免了墙的干扰。

### 阿里云的安装脚本
```bash
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh
```
### DaoCloud 的安装脚本
```bash
curl -sSL https://get.daocloud.io/docker | sh
```