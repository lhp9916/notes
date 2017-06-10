# 集成[腾讯Bugly](https://bugly.qq.com/v2/index)服务
![](./_image/2017-06-10-10-55-21.jpg)

以 Android SDK 为例（主要是我只会Android）
## 集成SDK
在Module的build.gradle文件中添加依赖和属性配置：
```
dependencies {
    compile 'com.tencent.bugly:crashreport:latest.release' //其中latest.release指代最新Bugly SDK版本号，也可以指定明确的版本号，例如2.2.0
}
```
## 参数配置
在AndroidManifest.xml中添加权限：
```xml
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.READ_LOGS" />
```
## 初始化
```java
public class DemoApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        initCrashReport("注册时申请的APPID", true);
    }

    private void initCrashReport(String appId, boolean isDeubg) {
        Context context = getApplicationContext();
        //获取包名
        String packageName = context.getPackageName();
        //进程名
        String processName = getProcessName(android.os.Process.myPid());
        //设置为是否为上报进程
        CrashReport.UserStrategy strategy = new CrashReport.UserStrategy(context);
        strategy.setUploadProcess(processName == null || processName.equals(packageName));

        CrashReport.initCrashReport(context, appId, isDeubg, strategy);
    }

    /**
     * 获取进程号对应的进程名
     *
     * @param pid
     * @return
     */
    private static String getProcessName(int pid) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("/proc/" + pid + "/cmdline"));
            String processName = reader.readLine();
            if (!TextUtils.isEmpty(processName)) {
                processName = processName.trim();
            }
            return processName;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {

                    reader.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

}
```
更多详情请移步[官方文档](https://bugly.qq.com/docs/)，Android开发者可以直接看[这里](https://bugly.qq.com/docs/user-guide/instruction-manual-android/?v=20170607153855)。