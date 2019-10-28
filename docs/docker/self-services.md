# 使用 Docker 快速搭建服务

## MySql
```shell
docker run -d --name mysql5.6 -v mysql5.6:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:5.6

docker run -d --name mysql5.7 -v mysql5.7:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:5.7
```

## Gitlab CE
```shell
docker run \
	--publish 8080:80 --publish 2222:22 \
	--name gitlab \
	--volume /srv/gitlab/config:/etc/gitlab \
	--volume /srv/gitlab/logs:/var/log/gitlab \
	--volume /srv/gitlab/data:/var/opt/gitlab \
	-d gitlab/gitlab-ce:latest
```

## Gitea
```shell
# 下载镜像
docker pull gitea/gitea:latest

# 创建数据卷用于持久化数据
docker volume create gitea

# 启动gitea
docker run -d -p 2222:22 -p 3000:3000 -v gitea:/data --name=gitea gitea/gitea:latest
```

## Jenkins
```shell
docker run -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 --name=jenkins jenkins/jenkins:lts
```

## Wordpress
`docker-compose.yml`
```
version: "1"
services:

   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: root
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - "8000:80"
     restart: always
     volumes:
       - site:/var/www/html
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
volumes:
    db_data:
    site
```
