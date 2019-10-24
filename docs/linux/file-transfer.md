# 文件传输

## scp
主要用来上传、下载文件。

优点：语法简单，使用方便，适合在命令行用。

```bash
# 上传到服务器
scp -r abc root@ip:

# 下载到本地（换下位置就行）
scp -r root@ip:/var/www/backup/  ~/

```

## rsync
很多时候我们需要的只是同步两个目录的差异，尤其当目录内容很多时，这个时候 `scp` 就不适用了，可以使用 `rsync`。

```bash
rsync -rv --delete root@ip:/var/www/backup/ ~/backup/
```
顺便提示下，要是误删， 加上`--delete`就同步删除了。

## 写个脚本练下手

作用：同步我服务器上网站的备份目录
```bash
#!/usr/bin/env bash

host=''
user=''

sync_dryrun()
{
    echo
    echo -e "\033[1m ...dryrun...\033[0m"
    rsync -av --delete ${user}@${host}:/var/www/backup/ ~/backup/ --dry-run
    echo -e "\033[1m ...dryrun...\033[0m"
    echo
}
sync_dryrun

sync_server()
{
    echo
    echo -e "\033[1m ...syncing...\033[0m"
    rsync -av  --progress --delete ${user}@${host}:/var/www/backup/ ~/backup/
    echo -e "\033[1m ...done...\033[0m"
    echo
}

echo -n "Want to sync? (Y/n): "
read AAA
if [ "${AAA:-y}" = "y" ];then
    sync_server
else
    echo Nothing done, bye.
fi


```

参考链接

[介绍 rsync 数据同步工具](http://haoduoshipin.com/videos/48)

[https://gist.github.com/4248241](https://gist.github.com/happypeter/4248241)