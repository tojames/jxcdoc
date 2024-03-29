# 组合套件销售<Badge text="辉煌系列" />
## 组合套件销售订单

用户需要整套商品销售时，请选择“组合套件销售订单”、“组合套件销售单”操作。

操作：业务录入-组合套件销售-组合套件销售订单。

组合套件销售订单分为上下表体，上表体显示组合套装商品，下表体显示组合对应组成明细数据。下表体明细数据只可查看，不可编辑。

上表体：在商品选择框中新增了一个大类“组合套件”，用于存放显示所有的组合套件商品，选择组合商品时只需进入“组合套件”类下选择即可。

组合套件商品可以直接修改金额，修改金额后会自动重算套件明细金额数据。

如需调整修改套件明细数量，在上表体中选中商品双击数量字段，会弹出“组合套件明细录入”框，具体如下图：

组合套件明细录入中：套件明细中默认显示套件组成明细，并可直接在表体中新增、删除明细，单价、金额字段允许修改。

其他功能参见“销售订单”单据功能。


## 组合套件销售单

操作：业务录入-组合套件销售-组合套件销售单。

具体操作请参见“组合套件销售订单”、“销售单”说明。


## 组合套件销售退货单

组合套件销售退货单，可直接进行整套商品退货操作。

操作：业务录入-组合套件销售-组合套件销售退货单。

操作说明：

功能按钮：

A.付款过程：被结算过程，同“销售退货单”的“付款过程”

B.套件销售单：调用原套件销售单，调用条件与操作，同销售退货单调销售单，同时记录与原单调用执行关系，也同销售单调用销售退货单。

其他操作：与“组合套件销售单”相同，可修改明细

财务处理：与“组合套件销售单”相反


## 组合销售套件统计
### 组合套件销售订单查询

组合套件销售订单查询，主要是查询我们都开了多少订单，订单金额多少，收了多少定金，都是与哪些单位的，是否已经执行，并且，这些订单的执行情况如何，是否需要强制完成，等这些都可以通过订单查询来处理。

操作：数据查询－组合套件销售查询－组合套件销售订单查询

交货日期：即订单上的交货日期。以交货日期来进行查询过滤订单。

新增：即新增一张销售订单。

修改：修改某张不曾执行的订单的全部内容。如果订单被调用使用后要进行修改操作必须满足以下条件：

1）订单被调用后，再修改订单，修改商品数量时将不能小于被执行数量；

2）订单被调用后，再修改订单，已执行商品不允许删除；

3）订单被调用后，可对单品商品进行强制完成。在订单右键中增加菜单“商品强制完成”，此强制完成只针对单行商品进行操作。如需多行商品强制完成，则多次操作；

4）订单启用审核流程，订单被调用后，则不再支持订单修改。

删除：删除不曾执行的订单,只要订单被执行过就不能被删除。

强制完成：有时，订单虽未完成，但已不需要其完成或已不可能完成，因此从统计上希望将来的“未完成订单”的内容不再包含此订单。便可将此张订单强制完成。在以后的统计中，虽然订单未完，但在将来统计未完成订单时，不予统计。在订单库存统计中也不再统计。

订单复制：即将某张组合套件销售订单复制成另外一张组合销售订单是否允许复制，受订单权限控制，并且会提醒你进行相关的修改。

执行情况：即查看某订单已经被销售订单调用多少次，每次执行金额之类。

上年收订金订单：年结存后收取过订金的订单，该行以蓝色字体显示。

我的审核：即进入我的审核，以方便快捷地对需要我进行审核的单据进行处理。


### 组合套件销售订单执行情况

我们的组合套件销售订单已经执行了多少呢？还有多少未执行？已经被执行了多少次？这些，则通过组合套件销售订单查询窗口和执行情况来处理。

该报表可以查询组合套件销售订单被组合套件销售单调用的执行情况，可以查询执行日期、执行人及金额。


### 组合套件销售订单统计

在“数据查询－组合套件销售查询－组合套件销售订单统计”里可以统计未完成的订单的订货数量、发货数量、未发货数量、订货金额、发货金额、未发货金额等。

组合套件销售货订单统计里可以统计订单的订货售价、订货数量、完成数量、强制完成数量、未完成数量、订货金额、补订货金额、完成金额、强制完成金额、未到货金额、赠品数量等信息。

操作：数据查询－组合套件销售查询－组合套件销售订单统计

组合套件销售订单统计，是以商品方式统计组合、明细商品的订货数量金额、完成数量金额、未完成数量金额、强制完成数量金额。在多个销售商对同一商品都有订货的情况下，可以进一步查询该商品在各销售商处的订货详情。

强制完成数量与金额

订单强制完成后，订单库存中的订货数量减少，组合套件销售订单统计中的强制完成数量增加。未完成数量和金额移入到强制完成数量和金额中。


### 组合套件销售订单明细表

【组合套件销售订单明细表】可查询条件范围内每张组合套件销售订单中每一笔商品明细的执行状况。

数据来源：组合套件销售订单。

操作：数据查询－组合套件销售查询—组合套件销售订单明细查询

点击【组合套件销售订单明细表】菜单后，首先出现条件选择窗口。如下图：

字段说明：

●订货售价、数量、金额：订单中折后单价，数量，折后金额。

●完成数量与金额

完成数量指订单被销售单调用实际销售的数量。

完成金额等于完成数量与订货售价的乘积。

●强制完成数量与金额

订单强制完成后，订单库存中的订货数量减少，组合套件销售订单统计中的强制完成数量增加。未完成数量和金额移入到强制完成数量和金额中。

●未完成数量与金额

未完成数量指订单中没有被销售单调用销售，也没有被强制完成的数量，数值上等于订货数量-完成数量-强制完成数量

未完成金额等于订货售价*未完成数量

操作按钮：

●查询条件

点击后打开查询条件重新查询。


### 组合套件商品销售统计

此项统计针对往来单位、公司职员和存货仓库三个选择项进行统计分析，帮助用户从组合商品销售量、销售金额、税额、价税合计等方面了解商品销售情况。

操作：数据查询－组合套件销售查询－组合套件商品销售统计

特别说明:其中赠品量，特指销售单中赠送数量，即销售单中单价为０的数量。销售数量是包含赠品量的。


### 组合套件商品销售明细表

如果我想详细了解每一组合套件商品某段时间都销售给了哪些客户，都产生多少笔业务，各自价格如何等明细销售情况，则通过组合套件商品销售明细表可以清楚了解。

组合套件商品销售明细表与商品销售明细汇总、单位销售明细汇、商品进货明细汇总、单位进货明细汇总类似，并组合套件商品销售明细表中商品显示的是组合套件商品。

组合套件商品销售明细表是以商品的小组合计，统计商品销售时的单据日期、单据编号、单位名称、经手人、仓库、部门、销售数量、单价、金额、折扣、折后单价、折后金额、税额、税后单价、税额等信息。

操作：数据查询－组合套件销售查询－组合套件商品销售明细表


### 可配套库存查询

说明：针对组合套件，根据其组成商品配置，通过查询当前库存中各配件的库存，计算能组成完整套装的最低库存数量，也可查询组成明细的库存数量。

操作：数据查询-组合套件销售查询-组合套件可配套库存查询
