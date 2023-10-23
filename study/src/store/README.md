文件夹简介
----
本文件夹的作用是用来存放redux配置  
统一管理全局的所有状态  
可以按照业务逻辑分文件编写  
最后输出一个index  
这个index汇聚了所有的reducer  
使用combinReducers进行组合  

- 需要说明一点
- 此处的所有reducer中的action只要重名都会被触发
- 可根据业务逻辑来定义不同名字的唯一action