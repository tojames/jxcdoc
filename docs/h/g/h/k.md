# 借欠业务<Badge text="辉煌系列" />
## 商品借进、借出业务

商品借进、借出业务其实不属于会计事项范畴，是一种不太规范的商业行为，所以不能用于会计作账，只能由库管人员管理。

◆商品借进

■商品借进

操作：业务录入－借欠业务－借进单

借进业务对数据的影响：

●库存数量金额增加；

●将借进商品记入“借入商品”项；

●可以在"数据查询--借欠商品--借进商品查询"里查看借进业务。

◆商品借进还出

操作：业务录入－借欠业务－借进还出单

借进还出对数据的影响：

●库存数量金额相应减少；

●将借进还出商品金额扣减“借入商品”项；

●可以在"数据查询--借欠商品--借进商品查询"里查看减少的借进业务。

能够处理的业务数据，只能是未处理的借进商品数量。

◆商品借转进货

操作：业务录入－借欠业务－借转进货单

借转进货对数据的影响：

●库存总的数量金额不变；

●将结算的借进商品的库存价值从“借入商品”里扣出；

●增加进货数量和金额。

能够处理的业务数据，只能是未处理的借进商品数量。

◆商品借出

◆商品借出

操作：业务录入－借欠业务－借出单

借出业务对数据的影响：

●库存数量金额减少；

●将借出商品记入“借出商品”项；

●可以在"数据查询--借欠商品--借出商品查询"里查看借出业务。

◆商品借出还回

操作：业务录入－借欠业务－借出还回单

借出还回对数据的影响：

●库存数量金额相应增加；

●将还回商品金额扣减“借出商品”项；

●可以在"数据查询--借欠商品--借出商品查询"里查看减少的借出业务。

能够处理的数量只能是未处理的借出数量；

◆商品借转销售

操作：业务录入－借欠业务－借转销售单

借转销售对数据的影响：

●库存总的数量金额不变；

●将结算的借出商品的库存价值从“借出商品”里扣出；

●增加销售数量和金额。

能够处理的数量只能是未处理的借出数量；

※此处(业务录入)的借进借出同账外库存业务里的借进借出是不同的，业务录入里的借进借出单据过账后会影响库存数据，而账外库存业务的借进借出是对库存数据没有任何影响的，只用于记录、查询。因此您可根据自己的对借进借出商品的管理要求来选择用何种方式。


## 借欠商品汇总表

该表可以查询商品在一段时间内借欠业务中汇总数据。包含：借进数量、借进还出数量、借转进货数量、借进未还数量、借出数量、借出还回数量、结转销售数量、借出未还数量。

数据来源：借进单、借进还出单、借转进货单、借出单、借出还回单、借转销售单。


## 借欠明细账本

该表可以查询某个单位或全部单位对某商品所有的借欠单据。包括借进单、借进还出单、借转进货单、借出单、借出还回单、借转销售单。


## 借进业务
### 借进商品查询

通过借进商品查询，我们可以明确知道借出了哪些商品，都借给了哪些单位。

借进商品查询可以查询借进商品的数量及金额。可以按商品及单位分类统计。

操作：数据查询－借欠查询－借进商品查询

分类排列：即选择以单位为小计方式统计还是以商品为小计方式统计。默认为以单位方式，下图则是以商品方式显示的结果。


### 借进单统计

以借进单为统计依据，统计出我们一共借进多少商品。

借进单统计用于统计商品的借进数量及借进金额。

操作：数据查询－借欠查询－借进单统计

列表：即以商品明细方式统计出有数量的商品。

明细账本：即针对统计结果查询针对某一商品的每一笔借进业务。
### 借进还出单统计

该统计基于借进还出单，统计出我们已经归还了多少。

操作：数据查询－借欠查询－借进还出单统计

列表：即将还出商品以明细方式显示，并且自动过滤掉数量为０信息。

明细账本：即查询出针对统计结果的商品的每一笔借进还出业务。
### 借进转进货单统计

以借转进货单为依据，统计出借进的商品有多少已经转为进货了。

操作：数据查询－借欠查询－借进转进货单统计

列表：即将统计结果展开显示，并将数量为０商品自动过滤掉。

明细账本：即针对统计结果查询出每一笔借转进货业务。
### 借进单统计列表

即将根据借进单统计出的结果以商品明细方式查询，并且自动过滤掉数量为０的信息。


### 借进还出单统计列表

该列表根据借进还出单统计将商品展开显示，并过滤掉所有为０的商品。


### 借进转进货单统计列表

根据借进转进货单统计结果，将商品展开显示并且自动过滤掉数量为0商品。


### 商品借进明细账本

商品借进明细账本,统计出商品借进或借进还出或借转进货的每一笔业务情况.


## 借出业务
### 借出商品查询

我们截止目前借出了多少商品，都借给了谁呢？我们则通过借出商品查询来处理。

借出商品查询可以查询借出商品的数量及金额。可以按商品及单位分类统计。

操作：数据查询－借欠查询－借出商品查询

分类排列：即以单位方式进行小计统计，还是以商品方式进行小计统计。


### 借出单统计

根据借出单，统计出哪些商品在一段时间里都借出了多少。

操作：数据查询－借欠查询－借出单统计

列表：将商品展开显示，并且，没有借出业务的商品不再显示。

明细账本：查询出针对某一商品的每一笔借出业务。


### 借出还回单统计

我们通过借出还回单统计，统计出我们借出去的商品，有多少已经被还回来了。

操作：数据查询－借欠查询－借出还回单统计

列表：即展开商品显示，并且，没有数量的商品不再显示。

明细账本：即查询出针对商品的每一笔还回业务。
### 借出转销售单统计

我们借出的商品，有多少已经转为销售了呢？通过借出转销售单统计，我们就可以统计出一段时间的针对仓库、职员的借转销售情况。

操作：数据查询－借欠查询－借出转销售单统计

列表：即以商品明细方式显示，并且，没有数量的商品不再显示。

明细账本：即统计出针对某一商品的每一笔借转销售情况。
### 借出单统计列表

根据借出单统计，以商品明细方式统计出借出情况，并自动过滤掉数量为0商品。


### 借出还回单统计列表

根据借出还回单统计结果，以明细商品方式统计出借出去的商品还回了多少，并自动将数量为0商品过滤。


### 借出转销售单统计列表

该列表是针对借出转销售单统计的结果，将商品以明细方式展开，并且，过滤掉数量为０的商品。


### 商品借出明细账本

商品借进明细账本,统计出商品借出或借出还回或借转销售的每一笔业务情况.
