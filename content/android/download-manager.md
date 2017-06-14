# 使用 DownloadManager 下载 App

`MainActivity`
```java
public void startDownload(View view) {
        new Thread() {
            @Override
            public void run() {
                downloadApk("http://192.168.0.2:8080/app-debug.apk");
            }
        }.start();
    }

    private void downloadApk(String url) {
        Uri uri = Uri.parse(url);
        DownloadManager.Request request = new DownloadManager.Request(uri);
//        request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_WIFI);
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);

        request.setDestinationInExternalPublicDir("demo", "demo.apk");

        request.setTitle("Android.apk");//通知标题
        request.setDescription("下载完后请点击打开");
        request.setMimeType("application/vnd.android.package-archive");

        DownloadManager dm = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
        long downloadId = dm.enqueue(request);
    }
```

`DownloadManagerReceiver`
```java
public class DownloadManagerReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        //监听文件是否下载完成
        if (DownloadManager.ACTION_DOWNLOAD_COMPLETE.equals(action)) {
            long id = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1L);
            DownloadManager dm = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
            DownloadManager.Query query = new DownloadManager.Query().setFilterById(id);
            Cursor c = dm.query(query);
            if (c != null) {
                if (c.moveToFirst()) {
                    String fileUri = c.getString(c.getColumnIndexOrThrow(DownloadManager.COLUMN_LOCAL_URI));
                    installAPK(context, Uri.parse(fileUri));
                }
                c.close();
            }

        }
    }

    public void installAPK(Context context, Uri path) {
        Intent intent = new Intent();
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setAction(android.content.Intent.ACTION_VIEW);
        intent.setDataAndType(path, "application/vnd.android.package-archive");
        context.startActivity(intent);
    }
}
```
在`AndroidManifest.xml`中添加权限：
```xml
 <uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

注册`Receiver`

```xml
<receiver android:name=".DownloadManagerReceiver">
    <intent-filter>
        <action android:name="android.intent.action.DOWNLOAD_NOTIFICATION_CLICKED" />
        <action android:name="android.intent.action.DOWNLOAD_COMPLETE" />
    </intent-filter>
</receiver>
```
每个方法都如其名，不用注释了吧。