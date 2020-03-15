"ui";
/**
 * @作者 家
 * @QQ 203118908
 * @功能 加载自定义view
 * @感谢 HyunMai以及百度
 * 参考链接1 https://blog.csdn.net/jinmie0193/article/details/80665823
 * 参考链接2 https://blog.csdn.net/baidu_33693586/article/details/93664239?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
 * 参考链接3 Android自定义控件之基本原理 https://www.cnblogs.com/whoislcj/p/5708778.html
 * 参考链接4 把库Module打包成jar包和aar包小结 https://blog.csdn.net/CrazyMo_/article/details/70273845
 * 参考链接5 生成自定义jar包的步骤详解 http://www.cppcns.com/ruanjian/android/218258.html
 * 参考链接6 Android项目如果要将自己写的类写成要单独打成jar包 https://blog.csdn.net/WGH100817/article/details/101721638?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
 * 参考链接7 Android项目如果要将自己写的类写成要单独打成jar包 https://blog.csdn.net/WGH100817/article/details/101721638?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
 * 其实看了很多帖子, 都跟着做了好几次, 总是失败, 半夜三点了才测试成功, 真不容易, 不管成功与否, 我都打算睡觉的, 居然成功了, 哈哈.
 */

let dexFilePath1 = "/storage/emulated/0/MT2/apks/CustomView3_1.0/classes.dex";
let dexFilePath2 = "/storage/emulated/0/MT2/apks/CustomView3_1.0/classes2.dex";
let dexFilePath3 = "/storage/emulated/0/MT2/apks/CustomView3_1.0/classes3.dex";
log(files.exists(dexFilePath1));
log(files.exists(dexFilePath2));
log(files.exists(dexFilePath3));
runtime.loadDex(dexFilePath1);
runtime.loadDex(dexFilePath2);
runtime.loadDex(dexFilePath3);

importClass("com.innskyy.mylibrary.TestUtils");
importClass("com.innskyy.mylibrary.PercentView");
r=TestUtils.Addition(3,4)
log(r)
r=PercentView.Addition(4,4)
log(r)

ui.layout(
  <vertical gravity='center' >
    <frame id='add' ></frame>
  </vertical>
)

const view = new com.innskyy.mylibrary.PercentView(activity, null);
ui.add.addView(view)

