# ab 压力测试工具

## 安装
以 ubuntu 16.04 为例:
```
sudo apt install apache2-utils
```

## 开始测试
```
ab -n 100 -c 10 http://test.com/
```
其中-n表示请求数，-c表示并发数

## 几个重要指标

Concurrency Level: 100 //并发请求数

Time taken for tests: 50.872 seconds //整个测试持续的时间

Complete requests: 1000 //完成的请求数

Failed requests: 0 //失败的请求数


Total transferred: 13701482 bytes //整个场景中的网络传输量

HTML transferred: 13197000 bytes //整个场景中的HTML内容传输量

Requests per second: 19.66 [#/sec] (mean)

//吞吐率，大家最关心的指标之一，相当于 LR 中的每秒事务数，后面括号中的 mean 表示这是一个平均值

Time per request: 5087.180 [ms] (mean)

//用户平均请求等待时间，大家最关心的指标之二，相当于 LR 中的平均事务响应时间，后面括号中的 mean 表示这是一个平均值

Time per request: 50.872 [ms] (mean, across all concurrent requests)

//服务器平均请求处理时间，大家最关心的指标之三

Transfer rate: 263.02 [Kbytes/sec] received

//平均每秒网络上的流量，可以帮助排除是否存在网络流量过大导致响应时间延长的问题

链接：https://www.jianshu.com/p/43d04d8baaf7