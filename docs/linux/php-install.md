# PHP 安装
## 编译安装
解压 -> configure -> make -> make install
```
./configure --prefix=/usr/local/php7.1.12 --enable-opcache --enable-fpm --with-gd --with-zlib --with-jpeg-dir=/usr --with-png=/usr --with-pdo-mysql=mysqlnd --enable-mbstring --enable-sockets --with-curl --with-mcrypt --with-openssl
```

## apt 安装
```
//添加源
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get -y install php7.1 php7.1-mysql php7.1-fpm
//安装常用扩展
sudo apt-get install php7.1-curl php7.1-xml php7.1-mcrypt php7.1-json php7.1-gd php7.1-mbstring php7.1-zip
```