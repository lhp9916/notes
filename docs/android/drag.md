# Android 的拖放机制

```java
public class MainActivity extends AppCompatActivity implements View.OnDragListener, View.OnLongClickListener {

    private static String TAG = "debug";

    @InjectView(R.id.img)
    ImageView img;
    @InjectView(R.id.uninstall)
    TextView uninstall;
    @InjectView(R.id.start)
    TextView start;
    @InjectView(R.id.share)
    TextView share;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.inject(this);
        img.setOnDragListener(this);
        img.setOnLongClickListener(this);

        uninstall.setOnDragListener(this);
        start.setOnDragListener(this);
        share.setOnDragListener(this);
    }

    @Override
    public boolean onDrag(View v, DragEvent event) {
        boolean result = true;

        int action = event.getAction();

        switch (action) {
            case DragEvent.ACTION_DRAG_STARTED:
                if (v.getId() == R.id.img) {
                    Log.i(TAG, "onDrag: 开始拖拽");
                }
                break;
            case DragEvent.ACTION_DRAG_ENTERED:
                if (v.getId() == R.id.start) {
                    Log.i(TAG, "onDrag: 进入启动区");
                }
                break;
            case DragEvent.ACTION_DRAG_EXITED:
                if (v.getId() == R.id.start) {
                    Log.i(TAG, "onDrag: 离开启动区");
                }
                break;
            case DragEvent.ACTION_DRAG_LOCATION:
                if (v.getId() == R.id.start) {
                    Log.i(TAG, "onDrag: 仍在启动区");
                }
                break;
            case DragEvent.ACTION_DROP:
                if (v.getId() == R.id.start) {
                    Log.i(TAG, "onDrag: 启动它");
                } else if (v.getId() == R.id.uninstall) {
                    Log.i(TAG, "onDrag: 卸载它");
                } else if (v.getId() == R.id.share) {
                    Log.i(TAG, "onDrag: 分享它");
                }
                break;
            case DragEvent.ACTION_DRAG_ENDED:
                Log.i(TAG, "onDrag: 拖拽结束，在drop事件之后发生");
                break;
            default:
                result=false;
                break;
        }

        return result;
    }

    @Override
    public boolean onLongClick(View v) {
        View.DragShadowBuilder buider = new View.DragShadowBuilder(v);
        v.startDrag(null, buider, null, 0);
//        v.startDragAndDrop(null,buider,null,0);
        return true;
    }
}
```
[http://www.jianshu.com/p/1f77378665e3](http://www.jianshu.com/p/1f77378665e3)