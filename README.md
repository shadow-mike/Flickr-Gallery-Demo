# 关于FlickrGalleryDemo

## 特性

- Demo使用React开发。
- 使用Webpack管理资源。


- 图片数据来源于网络，通过Flickr API获取，使用的方法是flickr.photosets.getPhotos。（获取数据可能需要翻墙）

- 画廊使用Flex弹性布局实现行显示和格子显示效果。列表中的图片资源使用的是文件名末尾为"_m"的图片,2个图标按钮使用div实现。

- 图片的全屏放大效果使用的是lightcase第三方插件，显示的图片资源文件名末尾为"_b"。

- 画廊的惰性加载使用lazyload第三方插件实现。

- 没有考虑兼容问题。


- 使用了ES6的部分特性，如箭头函数。
- jQuery Ajax的回调使用了Promises。


## 运行

```
$ git clone git@github.com:shadow512122313/Flickr-Gallery-Demo.git
$ cd Flickr-Gallery-Demo
$ npm install
$ npm start
```

2017.02.19



