# Docker 安装

Docker 官方为了简化安装流程，提供了一套安装脚本
```bash
curl -sSL https://get.docker.com/ | sh
```
执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 安装在系统中。

不过，由于“墙”的原因，在国内使用这个脚本可能会出现某些下载出现错误的情况。国内的一些云服务商提供了这个脚本的修改版本，使其使用国内的 Docker 软件源镜像安装，这样就避免了墙的干扰。

### DaoCloud 的安装脚本
```bash
curl -sSL https://get.daocloud.io/docker | sh
```

### Docker 中国官方镜像加速
https://www.docker-cn.com/registry-mirror

为了永久性保留更改，您可以修改 /etc/docker/daemon.json 文件并添加上 registry-mirrors 键值。
```
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```
修改保存后重启 Docker 以使配置生效。