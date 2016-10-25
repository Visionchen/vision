# ajax  （阿贾克斯）

> `ajax` 异步JavaScript 和 XML。     无刷新更新页面局部部分

- 同步：同一时间段只能执行一件事
- 异步：同意事件段可以执行多件事

## XML

+ HTML: 超文本标签语言
    + 标签：w3c定义好的标签
+ XML：可拓展标签语言
    + 标签：都是自定义的
    + 作用：数据交换、配置文件

```xml
<?xml endoding="UTF-8" version="1.0" ?>
<root>
    <student id="10086">
        <name>Lucy</name>
        <age>23</age>
    </student>
</root>
```

> 数据交换基本上都是`JSON`数据

### 手机打电话

1. 得有个手机
2. 输入对方的手机号码
3. 拨号
4. 等对方响应（接听成功的话再开始沟通）

### ajax

1. 得有个XMLHttpRequest（ajax中核心对象）
    + IE6下：new ActiveXObject("Microsoft.XMLHTTP");
2. 调用.open(请求方式, 请求地址, 是否异步)函数
    + 请求方式：`POST`   `GET`
    + 请求地址：
    + 是否异步： true（异步）    false（同步）
3. 调用.send(数据)函数  
    +  .send(null)
4. 写.onreadystatechange()事件

###
