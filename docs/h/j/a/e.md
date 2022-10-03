# 购货入库 <Badge text="尽消存" />
购货入库单 - 就是采购商品放到仓库做的单据，

1. **操作入口**

``` ts:no-line-numbers
└─ 购货管理
   ├─ 购货入库单
   │  ├─ 单击 购货入库 字面，乃是新增单据
   │  └─ 单击 查询 字面，可以查询、修改、删除也可以新增 购货入库单
   └─ 购货明细报表
   │  ├─ 购货入库单明细表 可以查看购货入库单明细行的入库商品、数量、单价、金额和采购日期以及供应商等相关信息；
   │  └─ 购货入库单汇总表 可以按商品汇总查看总采购数量、总采购金额。
   └─ 购货统计表
      ├─
      └─
```
2. **单据界面字段说明** 
- 表头
  - 单据编号：<u>`自动生成`</u> 
  - 单据日期：<u>`自动获取`</u>  
  - 供应商：<u>`双击选择或者模糊查询` </u>
  - 仓库：<u>`双击选择`</u>
  - 经手人：<u>`默认为操作员`</u> 
  - 部门：<u>`默认为操作员部门`</u> 
- 表体

|-|商品编号|商品名称|单位|数量|单价|金额|备注|
|--|--|--|--|--|--|--|--|
|1 |<div style="width:60pt">`模糊查询`</div> |<div style="width:60pt"> `也可双击`</div>|<div style="width:40pt"> `自动`</div>|<div style="width:40pt"> `输入`</div>|<div style="width:40pt"> `输入`</div>|<div style="width:60pt">`自动计算` </div>|<div style="width:40pt">`输入` </div>|
|2||||||||
|3||||||||
|4||||||||
|5||||||||

:::tip  
没什么好提示的
:::
- 表尾
  - 单据总额：<u>`自动计算`</u>
  - 单据摘要：<u>`手工输入`</u>