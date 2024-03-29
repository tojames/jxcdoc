# 销售管理<Badge text="辉煌系列" />
## 销售单

销售单上有购买单位、经手人、部门、发货仓库、票据类型、收款账户、收款过程、选择订单等项目。

1.结算单位：购买单位与结算单位可以为同一单位，也可以为不同单位，系统将按结算单位产生往来账款。（注意：结算单位需在用户配置中勾选“启用三方结算”选项后才会显示出来。）

2.整单折扣：及整单进行价格折扣处理，商品行的折扣及折后单价将同时调整。整单折扣不会控制单品折扣，当整单折扣与单品折扣修改后，以最后修改的数据作为商品行的折扣依据。

3.优惠金额：即我方对购买单位的优惠，即少收款，记入费用类科目“优惠”中，做加法运算。如果销售单中优惠购买单位，则应收款中也应该减去已经优惠的金额。

4.销售订单：

在录销售单时，您也可以调用还未完成的订单。具体方法是：在销售单中选择购买单位后，点击“选择订单”按钮，可以调出对应此单位的销售订单。如果发货数量与实际数量有差异，以实际数量录入后，系统会自动计算未发货数量与已发货数量。并标记订单是否完成。选择订单后，再进行商品选择。

5.选报价单：

在录销售单时，您也可以调用向客户发出后得到肯定答复的报价单。具体方法是：在销售单中选择购买单位后，点击“选报价单”按钮，可以调出对应此单位的报价单。

6.票据类型：

管家婆辉煌版为销售单配置了税票格式、收据格式、自定义格式三种票据类型。在选择收据或税票类型后，系统将自动切换单据格式。其中，“自定义”格式，也即单据格式配置，可以在“辅助功能--单据格式配置”中进行定义。

7.收款日期：

该笔销售业务若没有收款，则可在收款期限里选择与客户协商的收款日期。若到期未收款，可在超期应收款里查询。

8.收款账户：

管家婆辉煌版中的销售单，若选择了收款账户、并录入了金额，则表示货款两清，无需再录收款单，若没有录入金额，系统则自动挂在对此购买单位的应收账款中，可参考下面的“收款过程”。

9.收款过程：

在按单结算处理情况下，一笔销售业务可能是分几次收款完成的，用户可以在调出某张销售单的时候，直接点击“收款过程”按钮，查看此张单据的收款情况，也可以进一步查询某张收款单。

10.优惠金额：

辉煌版中增加了对销售收款零头的处理。如上图所示应收客户70.20元，一般只收70元，但应收账款就会挂有0.20元，在辉煌版中您可将这0.20元记入到“优惠”项目里。这实际上是一笔费用，因此在以后您可通过费用查询来查看“优惠”的余额。

11.销售运费业务：

销售运费的处理，与进货运费分摊不同。销售运费重点解决两类应用：一，己方付运费（自付），运费往来单位为货运公司或其他公司，处理情况为现金减少，而销售费用增加。同时，销售运费可分摊至销售商品上，并影响销售类报表统计，但销售运费不影响销售成本及销售收入。自付业务会影响到销售业务的收入和毛利；二，为我方代垫运费（代付），需要从客户方收回，运费往来单位为货运公司或其他公司，处理为应收账款增加；同时，现金或银行存款减少或应付账款增加。

使用方法：首先，在单据格式配置中，配置销售单的运费字段，配置完成后，在销售单的表体字段中，会增加运费字段，在表尾会增加运费类型、科目全名、运费单位、运费付款账户、运费付款金额、运费合计六个内容。

使用规则：

科目全名：费用科目可选择，科目默认为“运费”科目。在自付类型下才会产生费用，所以科目只能自付下才会显示。

代付运费产生的应收款与销售商品产生的应收款是分别进行显示的。

运费单位和销售单位，可以为不同的单位，系统会分析进行往来对账。需要注意，运费在按单结算时，也是是单独结算的。

运费合计，在自付下可以进行分摊，也可以不分摊，分摊后表体的运费合计与表尾的运费合计必须相等。代付时不允许运费分摊。

销售运费的处理仅支持在销售单中使用，对非销售单的其他单据，没有此功能。

12.数量录入(F9)：

我们在辉煌系列版本中，增加了数量的多种录入方式。首先，我们在单据上选择了商品的单位信息后，可以直接在数量处，录入所选单位的数量。然后，如果用户的商品信息采用了多单位，则我们也提供了更方便用录入方式：此时，双击数量字段，或点击“F9”快捷键，则会弹出商品多单位录入窗口，用户可以根据各单位的实际情况录入数量信息。录入完成后，系统会自动根据界面的录入信息及单位关系，自动转换单据上的数量及辅助数量信息。

注意：由于此方法均以单位关系和基本单为计算依据，所以，在具体使用中可能会出现小数误差，这是无法避免的，也是正常情况。

为了便捷手工指定商品出库，在批次选择框中，表头、表体增加“出库数量”录入功能，表头录入“出库数量”后会自动根据表体库存数量逐行分摊到表体的出库数量中。

13.会员卡(F2)：

点击此按钮或按“F2”就弹出会员卡录入界面,大该界面可以录入会员卡号或持卡人名称。如果往来单位为空,则选择号后就将会员卡对应的往来单位信息填入往来单位框中,如果已经有单位信息,则不修改单位信息,只是获取折扣信息。会员卡消费记录一方面记入会员消费统计，另一方面记入单据中往来单位中；涉及到的应收应付与会员卡没有直接联系，而与单据中往来单位连接在一起，如此，方便没有会员卡的单位也可以使用其它单位的会员卡进行消费获取折扣。

如果刷的是折扣卡，而单据没有配置折扣字段，则折扣卡不可使用。

14.销售开票：

1、单据格式配置中，将销售单中“开票金额”配置；

2、销售单中录入开票金额；

3、对于已经过账单据，要想补充开票金额，则到往来对账中进行开票处理；

15.单据录入中的插入、删除

在录入中，用户可能经常出现在已录好的行中间插入一条记录，或者要删除两行信息间的空行，怎么办呢?

在行中间插入一行:鼠标点住一行，按键盘上的“Insert”，即可在该行上方插入一行。

在行中间删除空行：鼠标定位在空行处，然后按下"CTRL",再按"DELLET"键就行.。

16.如何处理销售赠送?

在销售活动中，我们往往伴随着赠送，如何在销售时同时处理呢?

现在，我们处理起来非常简单。操作如下：销售单中录入常销售商品，同时录入赠品，将光标置赠品所在行按“F4”或右键菜单点“赠品”，则将商品状态置“赠品”,单价自动处理为0，并且价格金额等不允许修改，只能修改赠品数量；

如果想取消赠品标记，则只需要再此按“F4”或点右键菜单“赠品”，则将赠品状态恢复到正常销售状态。

销售单中赠品的出库成本计算为销售成本。

友情提示:要取消赠品标记再按一下“F4”或鼠标再选择一下赠品就行.

17.销售单读取价格方式

配置了价格跟踪且有价格跟踪记录的商品，直接使用价格跟踪价格；

配置了价格跟踪，没有价格跟踪记录，但使用了单位价格体系的，使用单价价格体系价格；

配置了价格跟踪，没有价格跟踪记录，不使用了单位价格体系的，价格为0;

没有配置价格跟踪，而有单位价格体系的，使用单位价格体系价格；

即不使用价格跟踪，也没有单位价格体系的，直接使用预设售价1

销售订单、销售单、委托发货单读取价格方式相同。

18.多账户收款

要使用多账户收款，则点收款金额旁边那个图标，从而弹出多账户付款录入表格进行录入，有两个及以上支付科目，则收款账户和收款金额不允许直接修改。

在多账户收款时，可以使用预收账款，使用的会员卡，如果是储值卡，则还可以使用“会员储值”进行结算。

销售类单据上，包含：销售单、销售退货单、销售换货单、借转销售单、委托结算单、组合套件销售单、组合套件销售退货单、销售订单（收订金时）

A.多账户结算时，增加“多品牌”按钮

B.当收款金额等于本单应收金额时，将自动后台进行品牌分配

C.当收款金额小于或等于本单应收时，则需按品牌进行收款，点击“多品牌”按钮进行分配

D.当单据上只存在一个品牌时，则默认多收、少收都针对这一个品牌，无需进行分配

E.“优惠”金额后，增加“多品牌”按钮，当有多个品牌商品时，需分品牌优惠，弹出二维表格录入优惠；只有一个品牌的商品时，则默认为该品牌的。

19.为了防止操作员做假，不允许操作员录入以前的单据，怎么办？

操作员授权时不允许补单就行。

20.查看单位应收应付

1、选择往来单位时，如果有应收应付权限，可以查看到单位的应收应付；

2、选择往来单位后，按F3可以在单据表头临时显示应收应付；进货单、销售单、收款单、付款单都是如此。

21.成本出库方法:对于移动加权成本算法商品,有库存时用成本均价,没有成本有最近进价,都没有时弹出成本录入框,而对于手工指定法,则以指定批次成本,对于先进先出和后进先出,则按出库批次进行核算

22.促销价说明:

1、如果录单日期和服务器日期都在促销日期内，并且时间点、适用仓库、适用客户也在促销范围内，则录入商品时读取促销价；不符合特价时按照其它价格规则读取；

2、特价商品进行标记；销售退货调销售单时，如果商品是特价，则此行商品退货时也标记为特价；

23.查看库存数量或库存分布

1、光标选择商品后按F6或鼠标右键选择库存分布，就能查看到该商品在各仓库的库存数量和虚拟库存数量情况；

2、光标选择商品后按F7就能够在单据表头快速查看该商品在仓库的虚拟库存数量；

3、所有物流类单据都有此功能；

24.扫描枪自动累加及条码录入：

商品录入时，扫描枪扫描到条码相同的商品时将只列出一次，此商品自动实现数量累加；表体右键有“条码录入”框，直接输入商品条码和数量。所有相关选择商品的物流单据都具有此功能。

特别说明：

1、如果单据格式中没有配置折扣字段，则不能使用会员卡；

2、如果折后单价低于最低售价且使用了最低售价提示配置，则将进行最低售价提示；

3、如果没有成本权限，则折后单价低于最近进价提示时，不显示进价；

4、如果会员卡已经消费金额加本次消费金额大于会员卡最高消费金额时，单据过账时将进行提示并不允许过账。会员卡消费记录的是价税合计金额，进行比较的也是价税合计金额。

5、如果设置了往来单位信用额度，即应收款上限，则销售单在销售时，如果单位已经欠我方金额加本次金额超过应收款上限，则销售单过账时将进行提示。

6、辉煌非+产品中，无结算单位功能。

## 销售退货单

销售退货单录入与进货退货单相似。

销售退货有两种方式：

方式一，直接录入一张销售退货单，在单据中录入需要退货的商品，此时，商品的入库成本是当前库存成本；

方式二，点击单据右下角的“销售单”选择要退货的原销售单，此地，商品的入库成本则是原销售单销售商品时的成本。

销售退货时若按原销售价退货，则商品销售收入回到销售前的状态，销售退货时若与原销售价不一样，差额直接记入商品销售收入。

销售退货时如果未付款，则冲减应收账款；如果付款，则直接减少银行存款或现金；若部分付款，则部分减少银行存款或现金，剩余的款项冲减应收款。

优惠金额记入支出类的优惠项目中.

整单折扣：即整单进行价格折扣处理，商品行的折扣及折后单价将同时调整。整单折扣不会控制单品折扣，当整单折扣与单品折扣修改后，以最后修改的数据作为商品行的折扣依据。数值是0-10的两位正小数。

会员卡退货方法：凡使用会员卡的客户，要进行退货处理，首先，可以调原销售单进行退货，调单退货后，系统自动进行消费处理；其次，也可以直接录入会员卡信息进行退货，退货后，系统自动进行消费处理。

注意：使用累计折扣卡的用户，当使用调单退货时，将会按原销售单上的折扣进行退货处理。而使用会员卡直接退货时，将会按当前的最新折扣进行退货处理。因此，建议使用累计折扣卡的用户，最好能使用调单退货。

成本入库方法:如果调原销售单,则以原销售单出库成本入库;如果不使用调单，而直接录入商品,则对于移动加权成本算法商品，有库存时用成本均价，没有成本有最近进价，都没有时弹出成本录入框，而对于非移动加权成本算法商品，则以最近进价入库，没有最近进价则弹出成本录入框。

销售退货中赠品处理：在销售退货过程中，如果有商品需要以赠品方式进行退货，怎么办呢？如果是调原销售单的，则如果原销售单是赠品，调到退货单依然会是赠品；如果是直接录入商品的，则按“F4”键或点鼠标右键选择“赠品”将该行标记为赠品就行。要取消赠品标记再按一下“F4”或鼠标再选择一下赠品就行。

扫描枪自动累加及条码录入：商品录入时，扫描枪扫描到条码相同的商品时将只列出一次，此商品自动实现数量累加；表体右键有“条码录入”框，直接输入商品条码和数量。所有相关选择商品的物流单据都具有此功能。


## 销售换货单

日常的经营活动中常会有某人购买了我们的商品，过一段时间又来换货，尤其是我们的下级经销商。

如何管理并快速处理这类业务呢？

一则通过在基本信息往来单位里设置换货期限和换货比例进行控制，一则通过销售换货单来处理具体的换货业务。销售换货单业务处理如下所示。

操作：业务录入－销售换货单

换货类型分正常换货和坏损换货，正常换货的商品是可以正常销售的，坏损换货的商品是不能正常销售的。

允许换货金额，将根据往来单位的换货期限和换货比例以及已经换货情况进行统计核算出来，如果本次退货金额大于允许换货金额就会提示。计算方法参见基本信息中说明。

换货差额大于0，则表示客户购买商品金额大于退回商品金额，则客户需要向我方付款；换货差额小于0，表示客户退货多于购买，则我方需要向客户付款。

收款金额栏不允许录入负数，优惠栏允许录入正数和负数。优惠为正，表示我方对客户的优惠，为负，表示客户对我方的优惠。

关于允许换货金额：该金额由往来单位换货期限、换货比例和已经换货金额影响。计算方法为，从录入换货单当日起倒推换货期限那么多天，计算出那些天的销售金额（销售单金额－销售退货单金额），然后减去针对那些天的销售金额已经换货金额，从而得到本次换货允许金额。

示例：如果某单位换货期限４天，换货比例３０％，有如下销售记录。第四天客户进行换货，则最多允许换货金额（即退回货物金额）为：(10000-2000+4000)*30%=3600。如果第四天换货金额２０００，则将进行相应的分配处理，从最久的那一笔开始分配，即分配给１号2000,2号和3号没有换货金额。

如果第四天再换货，则允许换货金额为：３６００－２０００＝１６００。如果此时换货１２００，则分配给１号１０００，２号－６００，３号８００。

|日期	|销售或退货|	金额	|换货金额|
|--|--|--|--|
|１|	销售|	１００００|	２０００＋１０００|
|２|	退货|	２０００	|－６００|
|３|	销售|	４０００	|８００|
|４|	换货|	２０００	||
|４|	换货|	１２００	||

			

销售换货中赠品处理：在销售换货过程中,如果有商品需要以赠品方式进行换货,怎么办呢?则选择需要按赠品进行处理的商品,然后按“F4”键或点鼠标右键选择赠品将该行标记为赠品就行.要取消赠品标记再按一下“F4”或鼠标再选择一下赠品就行

扫描枪自动累加及条码录入：商品录入时，扫描枪扫描到条码相同的商品时将只列出一次，此商品自动实现数量累加；表体右键有“条码录入”框，直接输入商品条码和数量。所有相关选择商品的物流单据都具有此功能。
::: remark 特别说明:换货业务只有辉煌+有。
:::

## 收款单

收款单也分按单结算、按金额结算以及按商品结算三种方式。

收款单用于先售货后收款的处理，可以直接录入，也可以采用按单结算以及商品结算业务。

操作如下：

在收款单中，选择付款单位后，系统会自动跳出对此单位未结算完成的销售单以及销售退货单。用户可以对销售单进行勾兑，以达到分单结算的目。

勾兑的方法，就是在待结算单据的结算金额栏录入要结算的金额。

自动分配：在录入本次收款的账户与金额后，自动分配可以将此笔收款自动对应未结清的、账龄最长的几笔单据。

收款单也可用于其它非销售业务的收款处理，收款单过账后现金或银行存款将增加，应收账款减少。

定位：当该单位有大量需要结算的单据时，可以通过在下表体点击鼠标右键使用定位功能定位单据。

优惠：如果我们收款过程中，有时需要对零钱进行优惠，可以在优惠中录入相关的金额处理。优惠金额与账户收款金额一起用于按单分配。优惠金额记入费用类科目“优惠”中，做加法运算。

预收账款业务的处理：

1、收取订金或预收款

在实际业务处理中，我们经常会收取销售单位的订金或预收款，在辉煌系列产品中可以在销售订单中，点击收订金按钮，将会弹出收款单界面，用于处理预收账款。也可以在收款单中直接收取预收款或订金。处理方式如下图：

（图2）

在上图中，如果想将收款金额计入预收账款只需要点击“预收账款”按钮，系统会自动进行处理，如果不想计入，也可以点击“预收账款”按钮，进行取消。

收取了预收账款后，在收款单的账户编号中，就可以选择预收账款科目来进行收款结算。如图1，就是使用预收账款进行结算的情况。

在销售订单中，点击“收订金”按钮后，弹出的收款单会记录订单的编号信息，如下图的红圈部分，以方便对订金的查询。

（图3）

2、使用预收账款进行结算

首先，在销售单中，可以在多支付方式中选择预收账款来进行结算。请参考销售单中的相关说明。

其次，在收款单中，可以使用预收账款来进行业务结算。如下图：

（图4）

重新结算功能

在实际业务过程中，我们可能发生一笔业务，当时没有使用按单结算，或者我对就结算的销售单据不正常，怎么办呢？可以使用重新结算功能。

方法：在经营历程中，选择该收款单后，打开单据，并点击“重新结算”按钮后。

点击“重新结算”按扭后，针对所选往来单位的未按单完成结算的单据都会显示出来。此时，我们就可以将金额指定分配给我们要结算的单据了。可以使用“自动分配”功能进行结算金额的自动分配，也可以手动分配结算金额。

说明：

如果不想按单结算，则用户配置中选择按金额结算就可。

如果收款单中预收账款按钮处的金额不为0，则不能使用“重新结算”功能。

查看单位应收应付

1、选择往来单位时，如果有应收应付权限，可以查看到单位的应收应付；

2、选择往来单位后，按“F3”键，可以在单据表头临时显示应收应付，没有单位应收应付权限时无法查询；进货单、销售单、收款单、付款单都是如此。
## 销售订单管理
### 销售订单

销售订单可以帮助用户对订单进行管理，让用户查询出对某客户的销售订货情况、某商品的销售订货情况以及订单完成情况，还可以在“数据查询－库存查询－订单库存查询”里了解未来库存，有助于企业对销售计划和库存的管理。

订单的交货日期

在销售订单上有订单的“交货日期”，是指销售订货的预计发货日期。可以在订单查询中查询某订单的预计发货时间。另外，发货日期还可以用于统计未来一段时间内将要发出的商品数量，与企业的实际库存相结合，可以大致统计未来的库存是否满足销售情况。

整单折扣

即整单进行价格折扣处理，商品行的折扣及折后单价将同时调整。整单折扣不会控制单品折扣，当整单折扣与单品折扣修改后，以最后修改的数据作为商品行的折扣依据。数值是0-10的两位正小数。

其他功能

进货和销售订单中有赠品功能，选择商品后，点击“F4”键，则商品标记为赠品。当订单通过调单进入进货单和销售单后，赠品商品自动带入。

在进货订单和销售订单中，使用“F7”键，并会显示虚拟库存。

在销售订单中，手工指定法的商品，还可以选择批号及生产日期。如果选择后，则调入销售时，将无须重新选择。

在销售订单中，选取购买单位后，点击“选报价单”按钮，可以弹出此购买单位对应的“报价单”，制单人可以选择合适的报价单进行转销售订单的操作。

在销售订单中，可以直接进行收款操作。


### 销售订单查询

销售订单查询，主要是查询我们都开了多少订单，订单金额多少，收了多少定金，都是与哪些单位的，是否已经执行，并且，这些订单的执行情况如何，是否需要强制完成，等这些都可以通过订单查询来处理。

操作：数据查询－查询查询－销售订单查询

交货日期：即订单上的交货日期。以交货日期来进行查询过滤订单。

新增：即新增一张销售订单。

修改：修改某张不曾执行的订单的全部内容。如果订单被调用使用后要进行修改操作必须满足以下条件：

1）订单被调用后，再修改订单，修改商品数量时将不能小于被执行数量；

2）订单被调用后，再修改订单，已执行商品不允许删除；

3）订单被调用后，可对单品商品进行强制完成。在订单右键中增加菜单“商品强制完成”，此强制完成只针对单行商品进行操作。如需多行商品强制完成，则多次操作；

4）订单启用审核流程，订单被调用后，则不再支持订单修改。

删除：删除不曾执行的订单,只要订单被执行过就不能被删除。

强制完成：有时，订单虽未完成，但已不需要其完成或已不可能完成，因此从统计上希望将来的“未完成订单”的内容不再包含此订单。便可将此张订单强制完成。在以后的统计中，虽然订单未完，但在将来统计未完成订单时，不予统计。在订单库存统计中也不再统计。

订单复制：即将某张销售订单复制成另外一张销售订单或进货订单，是否允许复制，受订单权限控制，并且会提醒你进行相关的修改。

执行情况：即查看某订单已经被销售订单调用多少次，每次执行金额之类。

上年收订金订单：年结存后收取过订金的订单，该行以蓝色字体显示。

我的审核：即进入我的审核，以方便快捷地对需要我进行审核的单据进行处理。


### 销售订单统计

在“数据查询－销售查询－销售订单统计”里可以统计未完成的订单的订货数量、发货数量、未发货数量、订货金额、发货金额、未发货金额等。

销售货订单统计里可以统计订单的订货售价、订货数量、补订数量、完成数量、强制完成数量、未完成数量、订货金额、补订货金额、完成金额、强制完成金额、未到货金额、赠品数量等信息。

操作：数据查询－销售查询－销售订单统计

查询条件中复选框“按存盘时间查询”，勾选后“交货时间”或“时间”变为“存盘时间”，并在日期后增加“时间”设置，参考“经营历程”“过账时间”条件。勾选后报表在过滤订单时，会针对存盘时间进行过滤。销售订单查询、进货订单查询、进货订单统计同理。

查询条件中要选择方式：商品方式、单位方式、经手人方式。

●商品方式

商品方式统计各商品的订货数量金额、完成数量金额、未完成数量金额、强制完成数量金额和补订货数量金额。在多个销售商对同一商品都有订货的情况下，可以进一步查询该商品在各销售商处的订货详情。

●单位方式

可以查询对各销售商的订货金额、完成金额、未完成金额、强制完成金额和补订货金额。

在对某销售商订货品种很多的情况下，可以进一步查询对某供应商各商品订货情况。即通过点击“详情”来查询。

●经手人方式

按经手人统计订货金额、发货金额、未发货金额。

●补订货数量与金额

补订数量，是指进货单调用订单后，实际执行数量超出订单数量的部份。比如，订单上订货数量为５，而实际上调用订单后，销售单执行了10个，则补订货５个。

补订货金额等于补订货数量乘订单单价。

●强制完成数量与金额

订单强制完成后，订单库存中的订货数量减少，销售（进货）订单统计中的强制完成数量增加。未完成数量和金额移入到强制完成数量和金额中。


### 销售订单执行情况

我们的销售订单已经执行了多少呢？还有多少未执行？已经被执行了多少次？这些，则通过销售订单查询窗口和执行情况来处理。

该报表可以查询销售订单被销售单调用的执行情况，可以查询执行日期、执行人及金额。
### 销售订单统计列表

即根据销售订单中商品方式或单位方式下的详情，统计出都有那些商品进行了订货。

商品方式下点击“详情”按钮，主要用于统计，商品订货日期、单位全名、到货日期、订货进价、订货数量、补订数量、完成数量、强制完成数量、未完成数量、订货金额、赠品数量等。

单位方式下点击“详情”按钮，可以统计出单位全名、商品全名、订货日期、到货日期、订货金额、到货金额、补订货金额、强制完成金额等。
### 销售订单明细查询

【销售订单明细查询】可查询条件范围内每张销售订单中每一笔商品明细的执行状况。

数据来源：销售订单。

操作：数据查询－销售查询－销售订单统计—销售订单明细查询

点击【销售订单明细查询】菜单后，首先出现条件选择窗口。如下图：

字段说明：

●交货日期：订单单据中的交货日期。

●订货售价、数量、金额：订单中折后单价，数量，折后金额。

●补订货数量与金额

补订数量，是指进货单调用订单后，实际执行数量超出订单数量的部份。比如，订单上订货数量为５，而实际上调用订单后，进货单执行了10个，则补订货５个。

补订货金额等于补订货数量乘订单单价。

●完成数量与金额

完成数量指订单被销售单调用实际销售的数量。

完成金额等于完成数量与订货售价的乘积。

●强制完成数量与金额

订单强制完成后，订单库存中的订货数量减少，销售订单统计中的强制完成数量增加。未完成数量和金额移入到强制完成数量和金额中。

●未完成数量与金额

未完成数量指订单中没有被销售单调用销售，也没有被强制完成的数量，数值上等于订货数量-完成数量-强制完成数量

未完成金额等于订货售价*未完成数量

操作按钮：

●查询条件

点击后打开查询条件重新查询。

●查看单据

点击可打开当前行的原进货订单查看。


### 销售订单商品跟踪

说明：销售订单商品跟踪可查看销售订单中商品被销售单、进货订单、派工单、委托发货单等调用情况。

操作：数据查询-销售查询-销售订单统计-销售订单商品跟踪

销售订单数量：指此商品所有销售订单的数量合计

销售订单金额：指此商品所有销售订单的金额合计

销售数量：此商品销售单调销售订单的数量

销售金额：此商品销售单调销售订单的金额

进货订单数量：此商品进货订单调用销售订单的数量

派工单数量：此商品派工单调用销售订单的数量和销售订单由MRP运算生成派工单的数量（不合并下单）

委托发货数量：此商品委托发货单调用销售订单的数量

点击订单明细可查看相关单据的调用详情。


### 销售订单商品跟踪明细

说明：销售订单商品跟踪明细可查看销售订单商品跟踪中所选择商品的执行单据明细

操作：先进入数据查询-销售查询-销售订单统计-销售订单商品跟踪，选中商品行，点击订单明细进入。


### 销售订单执行情况表

在实际销售中，我们希望知道销售订单在后来有多少销售了？多少开票了？多少进行配送拣货了？多少进行生产了...销售订单执行情况表可以查看销售订单的后续生命周期的执行情况。

查询条件：日期、销售订单编号、单位名称、经手人

字段取数说明：

收订金--销售订单预收账款

订货数量--进货订单调销售订单的数量

结算金额--该销售订单所有结算了的金额，包括当时结算的、后面回款的、预付款抵扣的

开票金额--该销售订单在后面的生命周期中开了票的金额

拣货数量--该销售订单对应的物流配货单中的拣货数量

发货数量--该销售订单对应的仓库出库单中的发货数量

生产数量--该销售订单下达生产的数量，包括直接下达的派工单、委外任务单、通过MRP运算生成的派工单、委外任务单

注意：结算金额和开票金额目前只支持销售单调一张销售订单的情况，包括部分调用和全部调用，如果调了销售订单又加了其他商品再过账或调了多张订单则无法统计，因为无法获取到当前这张订单收了多少钱或开了多少票。


## 销售统计
### 销售开票查询

我们所进行的销售活动，那些开票了？那些还没有开票？开票金额是多少？为了控制和查询，我们就进入销售开票查询表。

要进行开票，则到往来对账中进行开票，或者在录单时直接录入开票金额。

未完单据，即未开票金额不为0单据；已完单据即未开票金额为0单据。

操作：“数据查询”-“销售查询”—“销售开票查询”

窗口支持开票状态过滤，开票状态包括：全部票据、已开票、未开票。

商品出库则金额为正，商品入库则金额为正，从而通过最后的合计我们可以获得实际销售总额和实际开票总额。
### 商品销售统计

此项统计针对往来单位、公司职员和存货仓库三个选择项进行统计分析，帮助用户从商品销售量、销售金额、税额、价税合计、销售运费等方面了解商品销售情况，并且进行月销售比较等数据与图形分析。

操作：数据查询－销售查询－销售统计

明细账本：统计出针对商品在一段时间的每一笔业务单据，方便用户进行核对。

每月比较：统计出商品每月的销售数量与销售金额，方便用户进行销售管理与对策分析。并且，此比较支持图形示图。

价格分析：统计出商品对于不同客户的最低售价和最高售价，最多同时显示２０个；

单品分析：即针对所指定的商品，分析其销售金额、利润、以及占所在类和全部销售的比重。

列表：即将发生了业务的商品展开显示。可以选择全部列表与部份列表。

特别说明:其中赠品量，特指销售单中赠送数量，即销售单中单价为０的数量。销售数量是包含赠品量的。
### 单位销售统计

针对我们的单位（客户或销售代理或卖场），统计出他们的销售数量、销售金额、税额、价税合计、销售运费等情况，方便我们对单位进行销售控制和销售能力分析。

操作：“数据查询”-“销售查询”—“单位销售统计”

列表：即将所有发生了业务的单位以明细方式展开显示。

明细账本：即针对统计结果查询出针对某单位的每一笔销售业务。

特别说明:辉煌非+产品中，不存在赠品零售额统计。
### 销售明细账本

根据商品销售统计、销售单统计结果，查询出某时间段针对某商品的每一笔销售类业务。

该报表主要用于查询商品信息、仓库全名、客户全名、销售退货数、销售出库数、单价、金额等信息。


### 商品销售退货统计

我们需要的是质量上乘的产品，一个销售退货率偏高的产品，如果不是质量不好的产品，至少不是一个很适销的产品。为了找到更加适销的产品，我们需要找出退货率较低的产品。于是，我们通过商品销售退货统计进行处理。

操作：数据查询－销售查询－商品销售退货统计

销售数量：为销售单、销售退货单、销售换货单、委托结算单、借转销售单计算所得;

销售金额：为销售单、销售退货单、销售换货单、委托结算单、借转销售单对应折后金额计算所得;

销售出库数量：为销售单、销售换货单出库商品、委托结算单、借转销售单计算所得

销售出库金额：为销售单、销售换货单出库、委托结算单、借转销售单对应商品折后金额计算所得;

销售退货数量：为销售退货单和销售换货单入库商品计算所得

销售退货金额：为销售退货单和销售换货单入库商品对应折后金额计算所得;

退货率=销售退货量/销售出库量;

列表：即将商品展开显示，并且，将没有数据的商品自动过滤掉。


### 客户销售退货统计

客户在我们这里购买了多少，又退了多少，这是我们需要关心的，尤其是针对我们的下级经销商来讲，其退货率在一定程度上影响我们的服务成本。所以，我们需要关心退货率。

操作：数据查询－销售查询－客户销售退货统计

销售出库金额，为销售单、委托结算单、借转销售单和销售换货单中出库商品对应折后金额计算所得;

销售退货金额，为销售退货单和销售换货单入库商品对应折后金额计算所得；

退货率＝销售退货金额/销售退货金额；

列表：即将客户展开显示，并将没有业务的客户自动过滤掉。


### 图形比较-销售图形
每月比较

每月比较，是将所选择的某一商品或会计科目的值进行按会计月比较，并提供图形显示，帮助大家把握有关信息的发展趋势。


### 商品销售统计列表

即根据商品销售统计的结果，对指定的部份商品或全部商品进行展开显示，并且自动过滤掉数据为０的商品。

该报表用于统计商品的销售数量、销售金额、税额、价税合计等情况，方便我们对单位进行销售控制和销售能力分析。

每月比较：即对商品销售数量与金额进行每会计月比较。


### 单位销售统计列表

根据单位销售统计，以明细单位方式统计出各单位销售情况，并且，没有发生业务的单位不再显示。

该报表用于统计销售单位的销售数量、含税单价、赠送零售额、税额、价税合计、折前金额、销售均价、销售次数等信息。


### 客户销售退货统计列表

即根据客户销售退货统计，将客户信息展开显示，并将没有数据的客户自动过滤掉。

该报表用于统计销售单位的销售出库金额、销售退货金额及退货率

退货率＝销售退货金额/销售退货金额；
### 商品销售退货统计列表

根据商品销售退货统计，将商品展开显示，并自动过滤掉数据为０商品。

该报表用于统计销售数量、销售金额、销售出库数量、销售出库金额、销售退货数量、销售退货金额。

退货率=销售退货量/销售出库量；

### 销售优惠统计
#### 单位销售优惠统计

我们的客户（单位）购买了多少，同时我们对其优惠了多少呢？

我们优惠的程度，将影响我们创利的能力，也影响我们的费用支出。另外，购买能力又好，而对其优惠又少的客户当然是我们最需要的客户，对于这种客户我们当加以重点保护。为了方便地掌握对客户的优惠情况，便通过单位销售优惠统计进行处理。

该报表主要用于统计各单位的价税合计、优惠金额及优惠后金额。

操作：数据查询－销售查询－销售优惠统计

明细账本：即查询出针对某一单位的每一笔销售业务和优惠情况。


#### 部门销售优惠统计

部门销售优惠统计，即统计出该部门销售多少，优惠了多少，除优惠外应该收回多少。

优惠越多，部门的费用也多，也必须要影响其创利。通过这一统计，我们可以掌握各营销部门的优惠情况，方便进行全面的控制与调整。

该报表主要用于统计各部门的价税合计、优惠金额及优惠后金额。

明细账本：即统计出所指定部门的销售情况相关的每一笔优惠业务。
#### 职员销售优惠统计

我们优惠得多，我们的利润也就会受到影响。一个职员的销售，不仅看他销售收入，也要看他优惠情况。职员销售优惠统计便帮助我统计出职员销售金额和优惠金额。

该报表主要用于统计各职员经手的价税合计、优惠金额及优惠后金额。

操作：数据查询－销售查询－销售优惠统计


#### 单位销售优惠明细账本
根据单位销售优惠统计，查询出某单位时间段内每一笔销售业务的优惠情况。
#### 职员销售优惠明细账本
根据职员销售优惠统计，查询出某职员时间段内每一笔销售业务的优惠情况。
#### 部门销售优惠明细账本
根据部门销售优惠统计，查询出某部门时间段内每一笔销售业务的优惠情况。
### 销售年月日报
#### 销售商品统计年报
每一会计月商品销售多少？费用多少？毛利多少？回款多少？如果我们想一目了然看到这些，则通过销售年月日报表中的销售年报来查看。

该报表用于查询各会计月的回款、销售收入、销售成本、毛利、费用、付款及毛利率。

操作：数据查询－销售查询－销售年报、月报、日报

图形分析：即对12个会计月的销售收入以柱状图方式分析。
#### 销售商品统计月报
统计出某一会计月的每一天的回款、销售收入、销售成本、毛利、费用、付款及毛利率等。  
#### 销售商品统计日报
销售商品统计日报，统计出查询日期当天每一笔业务影响的 回款、销售收入、销售成本、毛利、费用、付款及毛利率。
#### 销售图形分析
根据销售年报月报日报统计结果，将销售收入以柱状图方式显示出现，直观展现每个会计月或每一天或每一笔业务的变动情况。
## 销售分析
### 销售波动分析
#### 商品销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-商品销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个商品数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此商品的销售数量和金额的波动情况。

列表：将数据全部列表或者部分列表展开，进入到商品销售波动分析列表。

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 职员销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-职员销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个职员数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此职员的销售数量和金额的波动情况。

列表：将数据全部列表或者部分列表展开，进入到职员销售波动分析列表。

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 单位销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-单位销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个单位数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此单位的销售数量和金额的波动情况。

列表：将数据全部列表或者部分列表展开，进入到单位销售波动分析列表。

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 部门销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-部门销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个部门数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此部门的销售数量和金额的波动情况。没法证明你疯了

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 仓库销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-仓库销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个仓库数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此仓库的销售数量和金额的波动情况。

列表：将数据全部列表或者部分列表展开，进入到仓库销售波动分析列表。

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 地区销售波动分析
经营活动中，我们要全面的了解商品的销售情况，对某一周期内的不同时间段商品的数量和金额分析是很重要的，系统设置商品、单位、职员、仓库、部门、地区六种销售波动分析，对不同周期内的销售数量和金额进行对比，给用户不同的视角来了解产品的销售波动情况。

操作：数据查询-销售查询-销售波动分析-地区销售波动分析

查询条件：用户可根据商品全名、单位全名、职员全名、仓库全名进行特定的查询，还可以选择销售单、销售退货单、销售换货单、借转销售单、委托结算单五种单据的任意组合进行统计分析。

图形分析：即对选定的一个地区数据进行3D图形显示。通过图形显示，我们可以比较直观地发现此地区的销售数量和金额的波动情况。

设置：销售波动分析提供月报、季度报、每月周报、每月日报四种波动周期设置，并且还提供自定义设置，用户可以根据自己需要来设置周期和天数进行销售波动分析。

金额统计方式：可选择是统计税前金额还是税后金额。
#### 仓库销售波动分析列表
仓库销售波动分析中，选择全部，或者选定一类仓库，列出本会计年度内所有月份的销售数量和金额。

图形分析：针对报表的不同行数据画出直观的图形进行数据对比。
#### 商品销售波动分析列表
商品销售波动分析中，选择全部，或者选定一类商品，列出本会计年度内所有月份的销售数量和金额。

图形分析：针对报表的不同行数据画出直观的图形进行数据对比。
#### 职员销售波动分析列表
职员销售波动分析中，选择全部，或者选定一类职员，列出本会计年度内所有月份的销售数量和金额。

图形分析：针对报表的不同行数据画出直观的图形进行数据对比。
#### 单位销售波动分析列表
单位销售波动分析中，选择全部，或者选定一类单位，列出本会计年度内所有月份的销售数量和金额。

图形分析：针对报表的不同行数据画出直观的图形进行数据对比。

### 销售排行榜
#### 商品销售排行榜
我们总希望找到最畅销的商品，淘汰滞销商品，我们希望了解各类商品在所有销售品中所占销售与利润比重，等等这些，便可以通过商品销售排行榜来处理。

操作：数据查询－销售查询—销售排行榜－商品销售排行榜

商品销售排行榜可以选择单位、职员、部门、仓库。针对商品销售，统计出商品销售量、销售金额、销售成本、销售比重、利润、利润比重、利润率，可以进行排序和对含税与否进行过滤。

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询统计出针对某商品的每一笔销售业务。

列表：即将产生了销售业务的商品展开显示。
#### 职员销售排行榜
职员销售排行榜，统计出职员销售收入、销售成本、销售毛利、销售比重、销售利率等，并且，通过表头排序，可以很方便地让我们寻找到哪些职员最善长销售，哪些职员创造利润最高等。

操作：数据查询－销售查询－销售排行榜－职员销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询统计出针对某商品的每一笔销售业务。

列表：即将产生了销售业务的商品展开显示。

特别说明:辉煌非+产品，不存在其中赠品量统计。
#### 部门销售排行榜

各部门的销售状况如何呢？创造的利润又如何呢？哪个部门销售最好，创利最好呢？哪个部门又销售最差创利最差呢？

我们时常需要根据这些信息来对各营销部门进行考核奖励，来鞭策鼓励我们的部门人员，从而提高部门的战斗力。

部门销售排行榜就是这样一个统计分析报表，他提供各部门的销售金额、销售成本、销售毛利、销售比重、毛利率等。

操作：数据查询－销售查询－销售排行榜－部门销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询统计出针对某商品的每一笔销售业务。
#### 仓库销售排行榜

我们需要了解各仓库的销售状况，更需要从这些仓库（分店）的销售状况中寻找到销售状况最好的和最差的，然后进行分析判断，找出其中的原因，从而帮助管理者更好地调整销售思路与仓库（分店）经营者，并且，根据市场情况做出即时的布局调整。

仓库销售排行榜就帮助我们提供了各仓库的销售金额、销售成本、毛利、仓库销售占整个销售比重等。

操作：数据查询－销售查询－销售排行榜－仓库销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询统计出针对某商品的每一笔销售业务。

列表：即将仓库展开显示并将数据为０的仓库过滤掉。


#### 客户销售排行榜

即对客户（经销商）的销售情况进行比较分析，包括销售金额、销售成本、创利、销售比重等，从而了解哪些客户购买能力最强，给公司创造的利润最高，从而方便公司寻找到最佳的经销商。

操作：数据查询－销售查询－销售排行榜－客户销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询出针对统计结果的每一笔销售业务。

列表：即将客户展开显示并将数据为０的客户过滤掉。

特别说明:辉煌非+产品，不存在其中赠品量统计。


#### 地区销售排行榜

我们如果想知道哪个地区销售最佳，创利最好，怎么办呢？我们通过地区销售排行榜就能够获得地区的销售金额、折让、销售成本、毛利、销售毛利率和销售比重。

操作：数据查询－销售查询－销售排行榜－地区销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询出针对统计结果的每一笔销售业务。

特别说明:辉煌非+产品，不存在其中赠品量统计。
#### 品牌销售排行榜

我们如果想知道哪个品牌销售最佳，创利最好，怎么办呢？我们通过品牌销售排行榜就能够获得地区的销售金额、折让、销售成本、毛利、销售毛利率和销售比重。

操作：数据查询－销售查询－销售排行榜－品牌销售排行榜

销售类型：包括含税销售和不含税销售两选择项，含税销售，则统计出来的金额是含税的，不含税销售，则不统计税额。

过滤：包括显示所有、显示等于０、显示大于０。显示等于０，则只显示那些部门销售为０的部门；显示大于０，则只显示那些部门销售不为０的。

明细账本：即查询出针对统计结果的每一笔销售业务。

特别说明:辉煌非+产品，不存在其中赠品量统计。
#### 商品销售排行列表

根据商品销售排行榜统计结果，将产生了业务的商品展开显示。

每月比较：即针对每一会计月的销售数量与金额进行统计分析，帮助掌握销售态势。


#### 职员销售排行列表

根据职员销售排行榜结果，将发生业务的职员的销售统计展开显示。


#### 仓库销售排行列表

根据仓库销售排行榜统计，将指定的部份或全部仓库中有业务数据的具体仓库展示出来，并且将数据为0的仓库过滤掉。


#### 客户销售排行列表

即针对客户查询排行榜的统计结果，将客户展开显示并将数据为０的客户过滤掉。


#### 部门销售明细账本

根据部门销售排行榜的结果，查询出针对某部门的每一笔销售业务，方便进行核账。

该明细账本用于显示日期、部门全名、单据编号、摘要、出库数量及金额信息。


#### 仓库销售明细账本

即根据仓库销售排行榜数据，统计查询出一段时间里针对某一仓库的每一笔销售业务情况。

该明细账本用于显示日期、仓库全名、单据编号、摘要、出库数量及金额信息。


#### 地区销售明细账本

本账本与地区销售排行榜配套使用，将根据排行榜查询出与某一地区关联的每一笔销售业务。

该明细账本用于显示日期、地区全名、单据编号、摘要、出库数量及金额信息。


#### 职员明细账本

根据职员销售排行榜统计结果，查询统计出针对某职员的每一笔业务单据。

该明细账本用于显示日期、单据编号、摘要、往来单位、收款账户、金额及单据类型。


### 商品销售分布
#### 仓库销售分布

我们的商品存放于不同的仓库，每个仓库的销售情况如何呢？我们就可以通过仓库销售分布来获取相应的信息。

该报表将仓库以列的方式显示，用于显示各仓库的销售数量及金额。

操作：“数据查询”-“销售查询”—“商品销售分布”－仓库销售分布

我的查询：即选择同时统计仓库信息；

图形分析：即以柱状图形式显示某商品在各仓库的销售情况；

列表：即以明细商品方式展开显示在各的仓库的销售情况，并且，没有发生业务的商品自动过滤掉。

明细账本：即查询统计出某商品在某仓库的每一笔销售业务。


#### 单位销售分布

我们的客户（经销商）购买能力如何呢？这些商品都销售给了哪些客户（经销商）呢？为此，我们便通过单位销售分布来处理。

该报表将往来单位以列的方式显示，用于显示各仓库的销售数量及金额。

操作：数据查询－销售查询－销售分布－单位销售分布

我的查询：即选择同时查询的单位。

图形分析：即以柱状图方式显示某商品在各单位的销售情况。

列表：即将商品展开来显示，并且，没有发生业务的商品自动过滤掉。

明细账本：即根据销售分布，查询出某一单位的某一商品的该查询条件下每一笔销售业务。。

金额统计方式：包括税后金额和税前金额。税后金额，即统计出来的金额是含税的；税前金额，即统计出来的金额是不含税的。


#### 单位销售分布列表

根据单位销售分布，将每一商品展开显示销售分布情况，并且，没有发生业务的商品不再显示出来。


#### 仓库销售分布列表

与仓库销售分布配套，将发生了业务的每一商品展开统计出其在各仓库的销售情况。


### 滞销商品表

对于我们经营的商品，我们非常关心其销路问题，销得慢的，销量小的，我们要进行特别控制，使我们的资金周转更快，创利能力更强。

对于滞销商品，也要分析其销售情况及库存状况，有利于减少企业的库存成本，提高企业的库存管理效率。

操作：“数据查询”-“销售查询”—“滞销商品表”

滞销配置：用于我们对滞销的定义，一方面是销售比例，一方面是基数的选择。基数包括：本期进货、本期库存、上期库存+本期进货、其它入库+本期进货。

例如：如果将销售基数设定为“上期库存+本期进货”，百分比为20%，因此滞销销商品表列示出的是某一日期段销售数量/(上期库存+本期进货)小于或等于20%的商品。

销售数量＝时间段内（销售单数－销售退货单数＋委托结算单数＋借转销售单数＋销售换货单出库数－销售换货单入库数）

本期进货为基数=时间段内的进货数(进货单数+借转进货单数+受托结算单数-进货退货单数+换货单入库-换货单出库)

上期库存=相当于将时间退回到时间段开始日期之前一天时的库存

本期库存=相当于截止到时间段结束日期时的库存

本期入库=时间段内的实际入库的能够用于销售的商品数（借进单+借出还回单+受托单+获赠单+组装单生成-组装单出库+同价调拨单入-同价调拨单调出+变价调拨单入-变价调拨单调出+委托退货单+报溢单+进货单-进货退货单-借进还出-受托退货-借出单-赠送单+进货换货单入-进货换货单出)

只有销售比例小于设置且销售折扣比例大于设置的商品才算滞销。


### 畅销商品表

在商品的销售中，会出现畅销商品，也会出现滞销商品。对于畅销商品，若不能及时发现，当畅销商品卖完了，又得不到及时补充，就会产生缺货现象，贻误商机，因此及时掌握畅销商品情况及后备库存情况，显得尤为重要。畅销的商品，是我们获利的主要来源，也应当是我们最为关注的对象。在我们的经营中，哪些商品是畅销品呢？对于这个问题，我们通过畅销商品表来获得。

操作：“数据查询”-“销售查询”—“畅销商品表”，窗口如下：

畅销设置：我们如何定义畅销商品呢？我们从两个方面，一是销售比例，一是销售基数。

该表是根据配置里对畅销商品的定义来筛选出的畅销商品。点击“畅销设置”按钮可定义畅销商品：

如果将销售基数设定为“上期库存+本期进货”，百分比为10%，则畅销商品表列示出的是某一日期段的销售数量/(上期库存+本期进货)大于或等于10%的商品。

销售数量＝时间段内（销售单数－销售退货单数＋委托结算单数＋借转销售单数＋销售换货单出库数－销售换货单入库数

本期进货为基数=时间段内的进货数(进货单数+借转进货单数+受托结算单数-进货退货单数+换货单入库-换货单出库)

上期库存=相当于将时间退回到时间段开始日期之前一天时的库存

本期库存=相当于截止到时间段结束日期时的库存

本期入库=时间段内的实际入库的能够用于销售的商品数（借进单+借出还回单+受托单+获赠单+组装单生成-组装单出库+同价调拨单入-同价调拨单调出+变价调拨单入-变价调拨单调出+委托退货单+报溢单+进货单-进货退货单-借进还出-受托退货-借出单-赠送单+进货换货单入-进货换货单出)

只有销售比例大于设置且销售折扣比例大于设置的商品才算畅销。

特别说明：只有销售比例和折扣都大于设置时，这样的商品才算畅销。


### 商品销售类型分析

我们的业务包括销售、零售、委托、借转等，在这些业务中，各占多少呢？由于每一种销售模式的成本费用不同，利润也不不同，因此我们需要了解把握。我们便通过销售类型分析来处理。

商品销售类型分析主要用于查询各种销售类型分别的数量及金额，例如：批发数量及金额、零售数量及金额、委托代销量及金额、借转销售量及金额等。

操作：数据查询－销售查询－商品销售类型分析

列表：即将商品展开显示，并自动过滤掉数据为０商品。


### 商品销售类型分析列表

即根据商品销售类型分析，将产生了业务的商品展开显示。


### 商品销售月分析

在经营过程中，我们时常会关心商品的销售趋势，并且，通过对销售走势的分析来判断未来采购情况和对资金的需求情况。

商品销售月分析就是这样一个报表，提供了商品\商品类每一会计月的销售数量与金额情况。该报表重点统计每个商品每个会计月的销售数量及金额情况。并可以进行图形分析。

操作:数据查询-销售查询-商品销售月分析

图形分析:即根据销售月分析结果,针对数量或金额进行各会计月柱状图分析.

列表:即将所有商品展开显示。


### 商品销售明细汇总表

如果我想详细了解每一商品某段时间都销售给了哪些客户，都产生多少笔业务，各自价格如何等明细销售情况，则通过商品销售明细汇总可以清楚了解。

商品销售明细汇总与单位销售明细汇、商品进货明细汇总、单位进货明细汇总类似。

商品进货明细汇总表是以商品的小组合计，统计商品销售时的单据日期、单据编号、单位名称、经手人、仓库、部门、销售数量、单价、金额、折扣、折后单价、折后金额、税额、税后单价、税额等信息。

操作：数据查询－销售查询－商品销售明细汇总表


### 单位销售明细汇总表

如果我想详细了解每一客户某段时间都消费了哪些商品，都产生多少笔业务，各自价格如何等明细销售情况，则通过单位销售明细汇总可以清楚了解。

单位销售明细汇总与单位进货明细汇、商品销售明细汇总、商品进货明细汇总类似。

单位进货明细汇总表是以单位为小组合计，统计商品销售时的单据日期、单据编号、商品名称、经手人、仓库、部门、销售数量、单价、金额、折扣、折后单价、折后金额、税额、税后单价、价税合计等信息。

操作：数据查询－进货查询－单位销售明细汇总表


### 仓库销售明细

仓库销售明细，在程序中很多时候把仓库即作为门店来查看，此报表作用于可按商品来分析各个门店仓库的销售零售额、实际销售额、库存数据等来分析各个门店的商品数据情况，以便做出决策分析。

操作：数据查询－销售查询－仓库销售明细


### 职员销售类型分析职员销售类型分析

由于不同的销售类型所带来的利润可能是有差异的，因此，我们需要知道我们的员工在经营活动中的不同销售类型的分布情况。

职员销售类型分析主要用于分析各经手人不同类型的销售数量及金额，例如：批发数量及金额、零售数量及金额、委托代销量及金额、借转销售量及金额等。

操作：数据查询－销售查询－职员销售类型统计

批发金额：即用销售单、销售退货单和销售换货单直接经营产品的销售金额；

零售金额：即零售单结存生成或直接过账或草稿过账生成的销售单或销售退货单金额；

委托代销金额：即通过委托结算单产生的销售金额；

借转销售金额：即通过借转销售单产生的销售金额；

赠送零售额：即通过销售类单据处理的，并且商品销售单价为的商品对应的零售额；

列表：即将职员展开显示。


### 职员销售类型分析列表

即根据职员销售类型分析结果，将职员展开显示。


### 商品销售成本表

经营活动是以盈利为目的的，关心成本是必然的。我们的每一笔销售都涉及到多少成本，我们的每一笔销售创利怎样？对于这些问题，我们通过商品销售成本表来解决。

商品销售成本表，可以根据单位、职员、仓库、部门进行选择，获得相应的每一笔销售单的销售金额、销售成本、销售运费、优惠及销售毛利。

操作：“数据查询”-“销售查询”—“商品销售成本表”

票据类型：包括自定义、收据、税票。

单据类型：包括销售单、销售退货单、借出转销售单、委托结算单、销售换货单。

成本明细：即针对某一单据每一商品进行成本分析。


### 成本明细清单

该报表与商品销售成本表配套查询，根据成本表中某一销售单，然后展示单据中每一商品的销售金额、销售成本和利润情况。


### 单品分析

在我们的经营商品中，某种商品的销售比重是多少？创利能力如何？每月的销售创利情况？这些是我们经营者非常关心的事儿。单品分析就是帮助我们对单或某类商品进行销售量与创利能力动态分析的统计表。

单品分析重点查询某一商品在第个会计月的销售数量、金额、利润、毛利率、以及各种比重情况。

操作：“数据查询”—“销售查询”—“单品分析”

销售数量：即实际销售的数量；

销售金额：即销售的折后金额；

销售利润：即销售金额－销售成本；

销售毛利率：即销售利润/销售金额

选择商品：即重新选择要分析的商品。

销售数量占本类商品的百分比：即所选择的商品占其父类商品销售数量的比例，其它几个比率类似；
### 赠品统计查询

赠品统计查询，主要是统计销售类单据赠送商品数量、成本金额数据。

操作：数据查询－销售查询－赠送统计查询

该报表提供四个查询统计方式，即商品方式、单位方式、经手人方式、仓库方式，系统默认商品方式显示。如下图：


### 商品销售对比分析

商品销售对比分析主要用于将两个时间段内的商品销售情况进行对比统计。在多年账情况下，还可以将不同年份的同一时间段的商品销售进行对比分析。以便为企业管理及经营销售提供更多的数据信息及参考依据。

统计的数据信息主要有：商品全名、商品编号、规格、型号、产地、单位、对比销售数量、销售数量、数量比％、对比销售折后金额、销售折后金额、金额比％、对比销售成本、销售成本、成本比％、对比销售毛利、销售毛利、毛利比％等。


### 客户销售对比分析客户销售对比分析

客户销售对比分析主要用于将两个时间段内的客户销售情况进行对比统计。在多年账情况下，还可以将不同年份的同一时间段内的客户销售进行对比分析。以便为企业管理及经营销售提供更多的数据信息及参考依据。

统计的数据信息主要有：单位全名、单位编号、单位地址、电话、对比销售数量、销售数量、数量比％、对比销售折后金额、销售折后金额、金额比％、对比销售成本、销售成本、成本比％、对比销售毛利、销售毛利、毛利比％等。


## 单据统计
### 销售单统计

即以销售单为统计依据，统计出每一商品的销售出库情况。

该报表重点统计销售数量、销售收入、税额、含税单价、价税合计等信息。

操作：数据查询－销售查询－单据统计－销售单统计

列表：即将商品展开显示。

明细账本：即查询出统计时间段内针对商品的每一笔业务。
### 销售退货单统计

以销售退货单为统计依据，统计出商品销售退货情况。

该报表重点统计销售退货的数量、销售退货金额、税额、含税单价、价税合计等信息。

操作：数据查询－销售查询－单据统计－销售退货单统计

列表：即将商品展开显示，并过滤掉数量为0商品。

明细账本：即查询出统计时间段内针对某商品的每一笔销售退货业务。
### 销售换货单统计

销售换货单统计，用于统计商品使用销售换货单后的销售出库及退货入库进货的统计。

销售换货单统计的数据扣减了单据红冲的数据，用于统计商品的退货数量、退货价税合计、销售数量、价税合计等信息。

操作：数据查询－销售查询－单据统计－销售换货单统计

列表：即将发生了换货业务的商品展开显示。

明细账本：即查询一段时间内针对某商品的每一笔换货业务。


### 销售单统计列表

根据销售单统计结果，将商品展开显示。并过滤掉没有销售的商品

重点统计商品的销售数量、销售收入、税额、含税单价、价税合计等信息。


### 销售退货单统计列表

即根据销售退货单统计结果，将商品展开显示并自动过滤掉数量为0商品。


### 销售换货单统计列表

即根据销售换货单统计结果，将商品展开显示，并且自动过滤掉数量为０商品。


### 销售退货明细账本

即根据销售退货单统计的结果，查询出统计时间段内针对某一商品的每一笔销售退货业务。

重点统计各单据的日期、单据编号、摘要、商品全名、仓库全名、客户全名、销售退货数量、销售出库数量、单价及金额。


### 销售换货明细账本

根据销售换货单统计结果，查询出一段时间内针对某商品的每一笔换货业务。

该报表重点显示销售换单单据的日期、单据编号、摘要、商品全名、入库仓库、出库仓库、销售数量、销售金额、退货数量及退货金额等信息。
