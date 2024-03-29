# 存货资料
### 存货档案
存货信息设置，完成对存货档案的设立和管理。设立存货档案需明确以下几个方面:
- Ø 存货的核算方法
- Ø 存货的品牌属性
- Ø 存货三个计量单位
- Ø 存货不同计量单位的价格设置
- Ø 存货的安全库存天数
- Ø 存货的自定义属性

存货信息分类最多可分10级。

【操作】：基础资料-->存货档案-->存货档案

进入存货档案管理界面，可以进行新增、修改、删除、增加下级及条码条件操作。

1. 存货档案——基本信息

核算方法：点击放大镜按钮，在存货核算方法列表中选取。

成本计价：同一账套不同存货支持按照存货管理的需要选择不同成本计价方法，系统提供移动平均法、全月平均法、个别计价法三种方式。

品牌：点击放大镜按钮，在品牌列表中选取。

存货型号\产地：手动录入信息，，用户记录存货的型号及产地的信息。

副单位：用于记录存货的副单位信息。

缺省供应商：可以预设存货缺省的供应商信息。

管理批号：管理存货批号信息。管理批号的存货，将可以管理到期日期。

近效期先出：勾选该项后，进行了批次管理的存货，会优先按近效期顺序勾选存货。

启用序列号管理：管理存货序列号 。选中后，存货的进出库，必须录入序列号。
　

2. 存货档案——单位及价格

软件支持对每种存货最多三个计量单位的管理，不同的计量单位均有独立的价格体系及独立的存货条码。

基本单位：录入常用的固定计量单位。一般为存货的最小计量单位

辅助单位1\2：录入可能使用的计量单位。一般为中包装及大包装

单位关系：（辅助单位/基本单位）的数值

入库\出库默认：进行存货出入库业务时，单据上默认显示的计量单位

默认报价：销售报价单上可选取。

批发价含税：勾选后，录入销售单、销售退货单时，系统直接把预设的批发价显示在“含税单价”栏处。

参考成本：该价格仅针对基本单位。

单位定额成本：在“完工验收单”中，如果选择了“按定额成本完工入库”，则取此处录入的“单位定额成本”进行入库。

3. 存货档案——其它信息

安全库存天数：库存中需要保证该存货可维持正常销售的天数。可以参考进货建议表。

安全库存数量、提前天数：MRP运算中需要用到的参数。

外购、自制、委外勾选项：指定存货的属性，属性为自制的存货在MRP中下达生产建议，属性为外购的存货下达采购建议，属性为委外的存货下达委外建议

管理自定义项1\2：期初自定义数量录入或过单据过账等情况检测只自定义项1\2是否录入。

缺省仓库：预设存货的缺省仓库，在领料单多仓库出库、MRP采购建议中，可自动跟踪存货所在仓库。

缺省车间：预设存货生产车间。

*委外功能仅T8及以上版本具备

4. 存货档案--图片信息

在存货基本信息中，可以存储、删除存货的图片

5. 存货档案--备用信息

软件提供8个存货备用信息，用于处理不同用户对存货的个性化需求。

### 存货核算方法
::: remark
用户可以自定义业务单据自动生成的会计凭证中存货对应科目、收入对应科目及支出对应科目，增强了业务与财务关联的灵活性。在新增存货时要求为 存货选择属于哪种核算方法。
:::
- 操作
  - 基础资料-->存货档案-->存货核算方法
  - 点击具体的存货方法，可查看其属性，如“库存商品”：
    - 属性名称：录入必须符合基础资料规则设置要求。
    - 助记码：根据属性名称自动生成，是属性名称的拼音缩写。
    - 存货对应科目：单据过账生成会计凭证时存货金额对应的科目，通常是资产类科目。如材料对应会计科目“原材料”。
    - 收入对应科目：销售单、销售退货单过账生成会计凭证时，收入金额对应的科目，通常是收入类科目。如收入对应“主营业务收入”。
    - 支出对应科目：销售单、销售退货单过账生成会计凭证时，成本金额对应的科目，通常是支出类科目。如支出对应“主营业务成本”。

### 品牌信息
::: tip 品牌信息是 存货的一个属性，类似于地区是往来单位的一个属性一样
不同的 存货可同归属于一个品牌，比如“管家婆辉煌普及版”和“管家婆服装普及版”同属于“管家婆”这个品牌，那么就可以在“品牌”信息中建立“管家婆”，再把“管家婆辉煌普及版”和“管家婆服装普及版”这两个 存货归到“管家婆”这个品牌上来。

建立好 存货的品牌信息，有助于对品牌的销售情况进行查询统计，如在“品牌销售汇总表、品牌销售明细表”中可以查询到各个品牌的销售情况。品牌设置好后，在 存货中，选择对应的品牌即可。
:::
- 品牌编号：录入必须符合基础资料规则设置要求。
- 品牌全名：录入必须符合基础资料规则设置要求。此栏为必输项。
- 助记码：根据品牌全名自动生成，是全名的拼音缩写。
- 复制到下一品牌：在添加下一品牌时，自动带入该品牌的信息。
- 停用：暂时不用的品牌，在“停用”前的方框中打上√即可。停用的品牌在基础资料查询、基础资料列表中可以显示出来，在录单时不显示出来。

### 存货自定义项
::: remark
“自定义项”资料是对存货信息、单据信息中一些常用信息的完善和管理，存货基本信息以及存货类单据中可选择自定义项。自定义项可以进行分级。本系统提供两个自定义项供用户使用。
:::
【操作】：基础资料-->存货档案-->存货自定义项

进入存货自定义项操作界面后，可以进行自定义项的新增、修改及删除操作，并且可以进行分级。

说明：建立好“自定义项”的有关内容后 ，如需在业务单据中体现出来，可以通过鼠标右键将其 字段配置出来。

### 存货多编码
::: tip 功能简介
`同一存货，在不同企业间的编码可能是不相同的，为了方便企业与客户之间的存货对账及单据传递，我们可以针对每个往来单位，设置一个商品编码。使用该功能后，可以在单据录入及报表查询时，在“对方编码”列字段中显示所选往来单位对应存货的编码信息。`
:::
【操作】：基础资料-->存货档案-->存货多编码

在存货多编码操作界面，可以查询各往来单位对应的存货多编码情况，也可以对多编码信息进行新增、修改及删除操作。

【功能及操作说明】：

1、使用存货多编码功能首先需要在“基础资料——存货多编码”中增加客户对应的存货多编码。

2、在需要的，单据格式配置中勾选“对方编码”字段。当选择了往来单位后，所选商品的多编码信息将会自动显示出来。

3、当多编码信息发生变化后，可以使用右键功能“更新对方编码”来刷新数据。存货多编码信息可以进行打印。
### 条码打印
用于打印存货编号或条码。可以批量打印条码。

操作：基础资料-->存货档案-->条码打印

【选择存货】：选择要打印条码的 存货，支持多选。

【打印设置】：可以根据你的需要，对条码宽度、长度、条码纸大小、条码数等进行处理。
### 检验项目
进行质量检验时，需要建立检验项目。

检验项目最多支持5级分类

操作：选择“基础资料—->存货档案-->检验项目”菜单，如图所示：

勾选进货时，此检验项目能够在进货检验报告中使用

勾选生产时，此检验项目能够在完工验收单检验报告中使用

勾选委外时，此检验项目能够在委外完工验收单检验报告中使用
