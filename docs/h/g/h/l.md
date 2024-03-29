# 委外加工<Badge text="辉煌系列" />
## 委外加工业务

在企业管理过程中，很多企业会涉及到委外加工业务；对于企业而言，普遍采用的货物进、销流程如下：

购进原料——原料进入委外加工厂进行加工——成品入库——销售

为了更好的处理此类业务，辉煌版设计了委外加工管理功能，来解决此类应用。处理流程如下：

1、首先，购原材料时，可以使用进货单处理商品的采购。

2、其次，当需要原材料送加工厂进行加工时，使用“委外加工领料单”进行商品出库。出库后，原料进入委外加工库。

3、当委外加工的商品需要退货时，可以使用“委外加工退料单”进行处理。将原料退回到的仓库。

4、当委外加工完成后，就可以使用“委外加工完工单”来处理原材料的损耗、完工成品的入库及加工费用的分摊、记账。

◆委外加工领料单

操作：业务录入—委外加工—委外加工领料单

委外加工领料单，引起的数据变化为：

●库存商品减少；

●“委外加工物资”增加。

◆委外加工退料单

操作：业务录入—委外加工—委外加工退料单

录入委外加工退料单，系统产生的变化如下：

●库存商品增加；

●“委外加工物资”减少。

◆委外加工完工单

操作：业务录入—委外加工—委外加工完工单

委外加工完工单是将完工商品所用的材料进行记录，并将完工商品转入仓库中进行销售，同时，可以对费用进行分摊。系统产生的变化如下：

●“委外加工物资”减少，委外加工原料减少；

●“库存商品”增加。

●如果发生了加工费、人工费及损耗，可以将这些费用计入商品的入库成本中，如果加工费用没有结算则“应付账款”增加。


## 委外商品查询

委外商品查询主要用于查询跟踪查询委外加工领料、退料、完工、未完工的商品数据及金额情况统计情况。

报表可以查询全部单位或某一单位的委外加工商品的情况。包换：商品信息、领料数据、退料数据、实领数据、完工数据等等。

其中：实领数量＝领料数量－退货数量；实领金额＝领料金额－退料金额；实领单价＝实领金额/实领数量；

未完数量，是按查询时间段倒推委外库存的库存数量，即未完数量等于某时间的委外库存数量；

未完单价，即委外库的成本均价，等于委外库存金额/数量。未完金额＝委外库存金额。

报表的数量均统计为基本单位的数量。

注意：该报表仅统计委外完工单中的出库部分。入库部分的数据会在“委外完工商品查询”报表中进行统计。


## 委外库存查询

委外库存查询，用于查询委外加工库中的商品数量及金额等情况。

报表可以查询全部单位或某一单位的委外加工商品的库存情况。包换：商品信息、数量、成本及金额。


## 委外完工商品查询

委外完工商品查询主要用于统计委外完工商品的相关信息，在该报表中，重点查询委外完工单中的入库商品。

报表查询信息包括：单据日期、单据编号、单位编号、加工单位全名、全部往来单位信息、商品编号、商品全名、全部商品信息、完工数量、单价、金额、加工费用、入库成本、入库金额。
