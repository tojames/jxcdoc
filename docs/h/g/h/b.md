# 系统维护与权限设置 <Badge text="辉煌系列" />
:::tip 系统维护与权限设置注意
包括：月结存、年结存、更换操作员、修改密码、数据备份与恢复、门店数据接口、财务数据接口、系统重建、用户配置、用户口令及权限配置、升级辉煌7.X、等。
:::
:::danger 特别注意

1. 用户配置是针对所有操作员的，而权限设置是针对某一个操作员的。

2. 除个别权限以外，操作员权限都是针对菜单的控制或模块的控制，而不针对其它模块中间接涉及此功能的控制，比如，单据使用权限中“销售单”，它控制的就是无法直接打开销售单，也不能直接打开销售单进行查看，但对于其它一些比如将销售单内容进行展开了的报表之类，就不不受此控制了，比如明细账本中销售单类型，比如经营历程中依然会将销售单罗列。再比如，进货订单查询统计权限，控制的就是进货订单查询菜单和进货订单统计菜单，不涉及进货单选择订单的控制。
:::
## 用户配置
在“系统维护-->系统管理-->用户配置”中用户可进行用户注册、系统配置、录单配置，这些配置主要用于对一些系统参数和一些功能的启用或禁用进行设置。

操作：进入“系统维护-->超级用户-->用户配置”或图形化菜单“系统维护—->用户配置”，对企业本身单位信息、系统、录单参数进行配置。

### 用户注册
即用于登记企业本身一些信息，包括单位名称、地址、电话、传真、税务登记号、开户银行与账号、法人代表、邮政编码。这些信息，在有关单据打印时可以进行调用，起到宣传或业务交流作用。

### 系统配置
系统配置，即对一些针对软件系统进行控制的参数进行设置。如下图示：

下面进行详细说明：

1. 系统负库存

系统负库存选项为：不启用、系统启用负库存、仅业务系统启用

不启用：业务与实物均不使用负库存

系统启用负库存：业务、实物仓库均启用，选上此项后，商品的成本算法为移动加权平均算法时，商品可以进行负库存业务。即商品在账面库存没有数量时，依然可以出库。

仅业务系统启用：即业务系统允许负库存，实物仓库不允许

2. 成本算法

《管家婆》辉煌提供了四种成本核算方法：移动加权平均法、先进先出法、后进先出法和手工指定法，在系统没有录入库存商品基本信息前，可以为所有的库存商品指定同一种成本算法；或指定所有商品“不使用同一成本算法”，即用户可在库存商品基本信息中为每一种商品指定单独的成本方法。

注意：该设置在开账后将不能进行修改

3. 本地快速打印

选择此配置后，以后点击“打印”按钮时将不再弹出打印管理器选择框，自动以关闭打印管理器时默认的格式进行打印。如果要修改模板或EXCEL导出，则需要取消此配置才能进入打印管理器。

4. 自动备份天数（0……100）

指定系统自动备份账套数据的周期。例如：设置为“1”，表示系统每天自动备份账套数据1次；设置为“0”，表示系统不允许自动备份。最大备份周期可设置为“100”，表示每一百天备份一次。

系统自动备份产生的数据存放在《管家婆》辉煌系列服务器安装目录下的backup文件夹里，文件名是“数据库名+系统登录日期”，例如：“hh20050317”。

注意：系统一天只能自动备份一次，且只在第一次退出系统时进行。

5. 收付款结算方式  该选项直接影响收付款单的结算方式，可下拉选择按单据结算和按金额结算；按单据结算时，进入收付款单，并选择单位后，可以看到单据的结算情况并能按每张单据的金额进行结算分配。按金额结算时，则无法看到单据明细。

特别说明:辉煌非+版本只提供按单结算，辉煌+才提供按金额结算.

6. 默认税率 

此处可以设置企业的默认税率，设置税率以后，在进销单据选择商品，表体商品税率相关字段将自动按设置的默认税率来计算税额。系统默认为空，设置方式是按百分比方式（%）设置。当商品也设置默认税率，则商品默认税率优先系统默认税率。

7. 零售模式

《管家婆》辉煌列提供两种零售方式，即零售POS模式和普通零售模式。

在零售POS模式下，零售操作界面是POS前台的无鼠标操作界面，同时提供交班功能；

在普通零售模式下，则不提供交班功能，同时操作界面也有很大不同。

两种零售模式在系统中只能使用一种，此处用于控制两种模式的转换，只能单选。

8. 单据自动保存间隔（30-600秒）。

勾选该项，并在空格中录入保存的秒数后，系统会按时间自动保存临时单据，当发生断电、关机等意外情况时，可以最大限度的保证数据的安全性。当再次进入该类单据操作时，系统会提示显示临时单据。

### 功能配置

1、品牌应收管理

设置为勾选后，启用品牌应收管理，当客户代理多个品牌时，其应收即结算，比较需要按“专款专用”模式来管理，即每一笔应收或预收均与品牌有了关系，而非简单按照单据或商品来进行结算。与系统全局的“收付款结算方式”有关但又不同，不同的是仅针对销售类业务，且可能与按商品结算会同时存在。

启用时，与“收付款方式”中的“按单结算”、“按金额结算”互斥，即设置了“按单结算”、“按金额结算”就不能勾选“启用品牌应收管理”，启用了，则不能再去设置成“按单结算”或“按金额结算”。

启用后，收款单：

A.按商品结算时，表体不变，当收款金额与下表体结算金额相等时，自动分配到结算商品对应的品牌上；保存时，检测当上表体收款金额大于结算金额时，则弹出提示：收款金额大于结算金额，多收款部分将计入分配品牌的预收账款，请进行分配；

B.按金额结算时，上表体“科目全名”字段后，增加字段“品牌全名”，选择品牌信息，必填字段。

2、加盟店模式

当设置为“加盟店总店”时，增加一个选项“加盟店下传零售价”勾选项，默认不勾选。勾选后，加盟店下传时，增加对商品零售价的下传。下传后，加盟店仍然可以修改，只是再次下传后，以总部零售价为准。

　

### 录单配置

“录账配置”主要是在进行业务单据录入时使用的设置。在“用户配置”界面点击“录账配置”标签进入“录账配置”界面，在每一项设置后的“允许”单元格中有“√”的表示选中，则该选项系统中使用。

如需要选中某项，鼠标双击所在的行，在“允许”单元格中打上“√”，如取消设置，再次双击即可。

项目内容介绍：

1、录单时，数量默认为1

设置为允许后，物流类单据选择商品后，默认显示的数量为1；不选择时，默认显示数量为0。

2、虚拟库存负库存提示

设置允许后，商品出库时，如果虚拟库存数量为负或将出现负数时，则进行提示。

3、 虚拟库存负存不允许过账

设置允许后，商品出库时，如果虚拟库存数量为负或将出现负数时，则不能进行单据过账。

4、 系统使用基本信息授权控制

选择了该选项后，才能使用基本信息授权功能。

5、 系统使用目录板

选择该选项后，商品信息等涉及类的分级显示方式会在表格左边有树状目录板显示。但是建议录入量大的客户不勾选该项，会影响数据的响应速度。该选项默认为选择。

6、 客户进价跟踪

勾选后，系统将跟踪往来单位每一种商品的最近一次折前进价，用户可进入“辅助功能－物价管理”查询和修改某往来单位对应商品的最近进价。使用该功能将会影响系统的运行速度。如果觉得系统速度太慢，可以将该功能关闭。

注意：一旦配置价格跟踪，则有历史记录的商品可以优先跟踪价格，没有记录的商品价格为0。

7、 客户售价跟踪

勾选后，系统将跟踪往来单位每一种商品的最近一次折前售价，用户可进入“辅助功能－物价管理”查询和修改某往来单位对应商品的最近售价。使用该功能将会影响系统的运行速度。如果觉得系统速度太慢，可以将该功能关闭。

注意：一旦配置价格跟踪，则有历史记录的商品使用跟踪价格，没有记录的商品价格为0。

8、 售价低于最近进价、成本价、最低售价时提示

当销售折后单价低于最近折后进价或低于库存成本或低于“物价管理”中设置的最低售价时，系统给予提示，帮助用户及时检查、防止错误。

9、 低于最低售价不能过账

勾选后，当商品的销售价格低于最低售价时，将不能过账。

10、允许商品条码重复

选择该项后，将支持不同商品使用同一条码。

11、修改草稿后变更制单人

选择该项后，在业务稿中修改单据后，制单人会修改为登录人。否则，将不变。

12录账时同一种单据连续录入

录单时，有时需同时录入几张相同的单据，如果这种情况较多，可选中此项。那么，就可以连续录入同一类型的业务单据，完成一笔业务过账时不会退出单据录入界面，继续录入下一笔业务。

13、系统允许修改/删除已过账单据

正常情况下，单据过账后将不能再作修改，单据录入错误后，只能通过红冲单据处理。勾选该选项后，可以对已经过账的单据进行修改，包括单据的表头信息及表体字段信息，可以修改商品、数量及价格等。

注意：

1）修改已过账单据功能不能修改非移动加权平均算法的商品。

2）电脑通讯版和皮革布匹版不支持该功能。

3）进行了审核控制、进行了按单据结算的单据，不能使用该功能。

14、超出应收上限不能过账

勾选该项目后，当往来单位超过应收上限时，销售类单据将不能进行过账。

15、录单时不允许修改经手人

选上此项后单据的经手人信息不能修改。如果操作员是管理员，则本设置无效。

注意：单据经手人默认为操作员。如果操作员为管理员，则经手人默认为空。

16、打印单据之前必须保存数据

防止操作员打印单据后将单据废弃，造成虚假数据信息。将该项设置为允许，则在打印前对数据进行保存。

注意：保存模式根据权限，保存为草稿或过账。只要有过账权限，过账优先。

17、客户进货折扣跟踪

设为允许后，系统将跟踪往来单位每一种商品的最近一次进货折扣率，折扣可在“辅助供－价格折扣跟踪”里查询和修改。

注意：用户使用的客户价格跟踪和折扣跟踪，在年结存后继续有效。

18、客户销售折扣跟踪

设为允许后，系统将跟踪往来单位每一种商品的最近一次销售折扣率，折扣可在“辅助供－价格折扣跟踪”里查询和修改。

注意：用户使用的客户价格跟踪和折扣跟踪，在年结存后继续有效。

19、负库存提示

设置为允许后，商品出库时，如果库存数量为负或将出现负数，则进行提示。   

注意：普及版Ⅱ的“录单配置”项目做过调整，请以实际配置为主。

20、是否自动生成摘要

勾选后，将自动生成摘要信息，否则摘要信息一直为空。

21、启用三方结算

勾选后，将可以使用三方结算功能。在单位信息、销售单中增加“结算单位”选项，销售做单后系统将按结算单位产生往来账款。取消勾选后，结算单位隐藏显示，此前已过账数据不变，新增单据往来账款按购买单位产生。

22、启用物流配货

勾选后，将可以使用物流配货功能。

23、开进货单只能调订单

   勾选上此项后，进货单将不能直接选择商品，也只能通过调取进货订单执行来开单。

24、开销售单只能调订单

勾选上此项后，销售类单据将只能通过调取订单执行来开单，不能直接选择商品。受此控制的单据包括销售单、组合套件销售单。

25、不允许超量执行订单

勾选此项后，允许执行订单时，执行数量不能大于原订单数量。此选项针对进货单调用进货订单、销售单调用销售订单、套件销售单调用套件销售单有效。

26、录单时焦点不自动跳转到辅助数量1/2

不勾选此项后，商品信息中和单据配置了辅助数量1/2，在录入时焦点先落在辅助数量1/2上，然后在落到数量上。

27、成本异常时0成本出库

默认不勾选。未勾选时，同现在处理。勾选后，出库0成本时不提示；成本异常时，按0成本出库。

28、允许零单价出入库

默认不勾选，未勾选时同现在，勾选后在所有单据开单时，如果商品没有单价或单价为0，可以过账。

注意：勾选此配置后成本为0单据过账时不做提示。此配置适用于不管钱只管数量的客户。

29、 售价低于成本价不允许过账

销售价低于成本价不允许过账，勾选此选项后在检测到售价低于成本价将不允许过账。

小数配置

在此可统一设置系统单机、数量、金额、折扣小数位数。设置后系统中所有单据、报表等中的数值字段均按设置保留小数位数。

注意：小数配置小数配置在开账之前设置，开账之后将不能再修改。

气泡信息

对基本信息勾选后，在单据表体中将以气泡形式显示库存数量、成本单价等字段信息。并可以设置气泡显示时间。

特别说明:辉煌非+产品中，无“启用三方结算”功能。
## 系统重建
操作:系统维护-->超级用户-->系统重建

　　窗口如下:　　

　　系统重建要影响的数据有:

1. 清除库存商品和会计科目的期初值；选择此项，其值清为0。

2. 清除草稿；选择此项，则业务草稿中的所有单据将被清除。

3. 系统重建订单项；指进货订单与销售订单；选择保留订单，则订单保留，反之则清除所有订单。

4. 系统重建促销单选项；根据选择配置，对促销单进行删除处理。
　
## 关于打印

◆ 新打印管理器的基本结构

　　新打印管理器由print.exe和各种单据的打印格式RPDB.mdb文件组成，print.exe存放在客户端下，RPDB.mdb文件存放在客户端data下。

◆ 打印管理器中的设置问题

要增加每页显示的行数，到自定义编辑-文件-报表属性设置中修改最大数据行。

要在一页中打印几个单据，到自定义编辑-文件-报表属性设置中修改每页表数；另还要到打印设置中自定义纸张。

关于自定义纸张。由于打印管理器重新进入管家婆只默认A4纸，要让其默认自定义的纸张，请到windows下的打印机驱动程序中修改为默认自定义纸张。

显示小数位数、日期没有显示完、显示为会计记数方式到具体的单元格属性中修改。对日期没有显示完，要将小数后保留几位设置为“-1”。  

:::warning 修改设置后切记保存!
:::

※备注：打印时报“I/O 出错”，这种错误可能跟打印机或操作系统有关系，请检查打印机和系统。  

- 常见问题处理

:::tip 打印时提示:将文档"XXX.RWX"打印到LPTI时发现一个错误。是否再试一次或取消作业。

这是打印机打印时报的错，请执行以下常规检查

1. 检查能否打印测试页，如果不能打印测试页，可做如下检查：
  - 电缆线有没有接、或者有没有接好、或者是否接的其它的打印机或设备
  - BIOS中LTP1模式设置不是EPP或者其它，可以都换一下
  - 打印机驱动程序与打印机是否匹配
  - 打印机驱动程序是否显示的是正确的，但实际文件不对，比如对Epson打印机，可以先卸载所有Epson打印软件，多次卸载并启动以保证“添加删除程序”中Epson打印软件项消失，然后再安装新的
2. 在Word或其它软件中能否正常打印，如果能打印测试页而在Word等其它软件中不能打印，那暂时就不知道原因了。
3. 检查用打印管理器打印时队列中有没有内容，如果没有内容则可提供打印机详细型号及错误现象（如果有）报开发的处理；如果有内容而不能打印，请仔细看打印机有没什么错误提示（比如显示在激光打印机的LCD屏上的），可提供错误信息（如果有）联系开发协助处理

:::

:::tip 疑难杂症
1. 在三星MP1430上打印单据的时候挂起，即打印死机
2. 在三星SCX-5312F一体机上，打印时提示缺纸，无法进行打印
3. 在三星的激光打印机点击打印没有任何反映，预览都可以
4. 在联想激光多功能一体机LJ6012MFP上，按了打印键后，打印任务会在打印机的打印任务栏里出现，然后会自动删除就没了反应，但按一下打印机上自带的取消作业按钮又会打印出来，按一下打印一页
5. 其它：打印出来与设置的自定义纸张大小不符、缩成一团、不走纸 等等

问题1(Issue60) 已确认在打印管理器最新版本解决，我们自己专门去找了一个打印机测试验证过，问题3 估计与问题1相同性质也以解决

问题2和问题4(Issue170) 发10版新版本给代理商后已收到反馈确认解决

这些疑难杂症的特点就是用Word打印都是对的，就是用我们的打印管理器不对，而且确实不是设置的问题。但这些问题都与特定型号或者打印机特定驱动程序有关，不是所有的都有问题。

但我们发现最新版本的打印管理器已经能够解决问题，原因是打印管理器由于历史原因存在有9版和10版两个版本，9版没有在打印驱动这一层次做工作，对打印机的驱动程序有很强的依赖性，所以会出现有时候换个驱动程序就对了。而10版则自己做了一层打印驱动的抽象支持，对打印机驱动程序减少了依赖性，尤其是9版支持自定义纸张的各种问题在10版几乎全部解决。由于10版相对9版的改动非常大，所以9版基本上只修改小BUG，不增加功能，而且改动风险大的，比如换打印底层，也不会再做。

这里，我们对这些仍然存在的疑难问题提出统一解决方案：

1 对于仍然使用老(小版本旧的)9版的管家婆851、千方、标准35等版本等

1.1 请升级到最新的9版，可能可以解决小部分问题，这个方案不需要各版本开发组做任何修改

1.2 更换打印机驱动程序，比如我们确认过LQ 300系列驱动支持自定义纸张有问题时，换LQ 1600KIII就没问题；对于LQ300+，则只能换LQ1600KIII，换之前先在“添加删除程序”中把所有Espon的打印软件卸载；新版LQ1600III打印机使用LQ 1600KIII后面带H等的驱动有问题时换成不带H的LQ 1600KIII就没问题

1.3 与开发组配合，对程序做很少改动后升级到打印管理器 10版

2 对于仍然使用老10版的千方部分客户、标准41、服装2005等版本、所有天通、分销ERP、分销服装等BS产品

2.1 请升级到最新的10版，可以大部分解决问题，这个方案也不需要对应各版本开发组做任何修改

2.2 如果2.1不能解决问题，则只有个案处理；如果通过各种途径能够解决或者不能够解决问题，都请及时反馈沟通

- 建议实施解决方案之前需要了解的内容：
1. 能否打印测试页、用Word能否正常打印
2. 用打印管理器打印后打印队列中有无内容
3. 如有条件换打印机能否换打印机测试
4. 打印机的具体型号
5. 对于10版打印管理器可以在自定义编辑或者预览中按F11后照提示操作以辅助查找问题

- 我们的个案处理可能解决步骤：
1. 如果打印不能进入队列，我们可以根据打印机型号找个驱动程序来测试，这种情况一般都能解决，不需要在实际的打印机测试，网上找不到驱动程序时需要客户提供
2. 如果打印能够进入队列，我们只有想办法找实际的打印机测试了
:::

:::tip 如何支持小票打印？
- 可以通过两种方案来支持小票打印：
1. 通过安装小票打印机的Windows驱动程序后把它当作普通打印机使用
2. 打印管理器直接支持小票打印，小票打印速度比Windows驱动打印快很多倍，而且打印出来很清晰

- 天通等软件用的老版本打印管理器只能采用方案1；其它软件用的9版和10版打印管理器直接支持小票打印，要求cprint.dll目录中有billPrint.dll后可以设置报表属性，选中“使用POS打印”，如下图A，然后点菜单“POS打印设置”，设置小票格式，如下图B，设置后可以预览和打印小票，如下图C。
:::

:::tip 使用POS小票打印时商品名称只能打印五个字，后面的字都不能显示，而我设置的商品名称字段占用了一行，如何解决？
请在pos打印设置中“#商品全名!”的叹号前多加几个空格即可，如果出现乱码，则再多加一个空格或减少一个空格
:::

:::tip 使用小票打印机Windows驱动程序打印票据时，票据纸不能按实际打印内容走纸，在打印管理器中自定义纸张大小也不起作用，但该打印机在其它软件中工作正常(如word、excel、客户用的其它软件
用新版本（v10.0以后）打印管理器后打印正常，而用老版本（9版或天通1.0版）打印管理器在pos58小票打印机上重现该问题。
问题在于老版本支持自定义纸张有问题，自定义纸张设置经常无效，只有打印驱动程序对路才可以。

参见打印管理器使用说明
:::
 
## 修改密码
操作员自己修改自己的密码，防止他人进入自己的操作权限。

操作：“系统维护”-->修改密码”
　　
## 用户口令及权限设置
　　为了保证企业财务数据的安全，操作员可在口令权限里设置进入账套的口令，超级用户（系统管理员）可授予操作员不同的操作权限，有效避免操作员越权操作，篡改单据，减少管理员人为操作失误。权限设置有下面几大类：单据使用权限、录账权限、查账权限、其它权限。  

进入“系统维护-->超级用户-->用户口令及权限设置”，或直接从“系统维护”图形化菜单中进入：

◆  修改管理员名称，选中“管理员”，点更名，输入名称就是。

◆  复制操作员权限 对于新加的操作员，如果其权限与已经存在的某操作员权限相同，则可使用“复制”方法。使用方法是：选中新操作员“销售员”，点“复制”，则进入如下窗口，然后选择与“销售员”有相同权限的操作员“管理员”，点“选择”就可。

◆　添加操作员和口令设置　

　　管理员可点下边的“添加”按钮添加操作员。

　　操作员点下边的“密码”按钮添加或修改自己的密码。

◆　操作员权限设置　

操作员权限设置只能由管理员来完成，鼠标点蓝要设置权限的操作员，然后选择要设置的权限，在相应的单元格打点，表示拥有该权限。

在全选框打勾，表示对当前列表中所有权限选中；

选择某一列，则表示对当前表格中该列权限全部选中；

取消查看或查看执行时，该行所有权限全部取消；

单据权限选中录入或过账或打印时，查看权限自动选中；

◆  操作员级别说明

1、管理员默认就是高级，并且永远是高级。

2、新增操作员，默认为普通。只要拥有“年结存”权限或“数据恢复”权限中任何一个，则该操作员成为高级；只有同时不具有“年结存”权限和“数据恢复”权限，该操作员才是普通。

◆  操作员状态说明

1、该状态用于表示该操作员是否绑定安全钥匙。如果已经绑定，则状态为“已绑定”；如果没有绑定，则状态为“未绑定”

2、安全钥匙，是用于操作员登录安全认证的一种硬件设备，也是一种加强信息安全的手段。

◆  绑定钥匙

即对该操作员进行安全钥匙绑定,一旦绑定了安全钥匙,那么,该操作员要登录系统就必须在客户端计算机插入自己的安全钥匙,然后才能凭密码登录系统,否则无法登录.

绑定钥匙后,该操作员状态为“已绑定”。光标在“已绑定”操作员上，该按钮显示为“取消钥匙”，则点此，就会将该操作员已经绑定的安全钥匙信息取消。

◆  权限列表说明

1、单据权限列表中说明如下：

全选：即将所显示表格中所有供选权限都进行选中。

查看：即可以打开已经保存的草稿或经营历程中此单据进行查看。这是操作该单据的必须条件。

录入：即可以打开此空白单据进行信息录入并保存为草稿。必须与查看权限配套使用。

过账：即将当前单据进行过账处理。必须与查看权限配套使用。

打印，即打印单据。

灰色单元格：表示不存在此权限操作。

空白单元格：表示存在此进行权限控制。

2、报表权限列表说明如下：

全选：即将所显示表格中所有供选权限都进行选中。

查看：即打开该报表主窗体进行查看的权限。

打印：即打印报表内容的权限。

3、其它权限列表中说明：

全选：即将所显示表格中所有供选权限都进行选中。

查看执行：即对于需要打开查看的功能进行打开查看；对于需要直接进行功能处理的进行功能执行。比如，基本信息就是查看，年结存就是执行。

新增复制：对于需要进行新增控制的，就进行新增控制；需要进行复制控制的，就进行复制控制。比如基本信息管理窗口，两者都需要进行控制。

修改删除：对于需要进行修改的进行修改控制，对于有删除的进行删除控制。比如基本信息管理窗口修改和删除都进行控制，物价管理窗口就只进行修改控制。

打印：即有打印设置的功能进行打印控制。

:::warning 特别说明
安全钥匙需要单独购买
:::　


## 关于月结存和年结存
月结存和年结存

◆ 什么是月结存？

月结存是在当前 账务做一个标记。这样可以按每月划分账本，查询业务时可以按月查询。辉煌版的月结存不同于财务上的会计期间，您可以一月做一次，也可以半月或几个月做一次，可以没有规律。

◆ 怎样做月结存

进入“系统维护--月结存”，做月结存之前首先确认数据没有问题，再次要确定做月结存的时间。

上月结束：指上次月结存的结束时间，初次月结存时，该信息不显示。为默认显示信息。不可修改。

月结期间：月结期间指月结存当月显示的期间信息，该信息会与各种月分析报表中的月份统计一一对应，例如，首次月结期间的数据为2，则月分析报表时，该月的数据信息将会显示在“2月”字段列上。

说明：

　　１、月结存是无法取经营历程中某一段时间来作月结存的。做月结存时，结存时间可以自己选择。 

　　２、每年最多允许做１２次月结，即如果你已经做了１１次月结存了，则不能再结存，必须要进行年结存了。

 (总账版能多做一次月结存)

◆ 月结存对数据的影响？

月结存对 账本没有任何影响。月结存不会清除明细账本和草稿。月结存后，对已做月结存的单据不能进行红字反冲，作了月结存之后，继续开单录账的日期就必须在月结存日期之后。

为使成本更加准确，建议月结存之前重算成本

（总账版月结存后能自动结转当月的出库成本，分单据类型生成会计凭证，可在结转成本附件中查看当月或历史月份结转的单据出库成本和单据其他信息）

◆ 如何进行反月结存？  

　　进入“系统维护－月结存”，选择反月结。

　　如果你已经做了三次月结存，则系统存在四个会计月，则你能够进行反月结的次数等于系统存在的会计月数减１；

　　反月结后影响月结存信息表，系统存在的会计月数也减少一个。

（总账版反月结存需结转成本的会计凭证没有记账、审核或签字）

◆ 如何年结存？

　　 管家婆辉煌版提供两种年结存方式：即系统不使用多年账、系统使用多年账。

　　系统不使用多年账：年结存将结存所有的账本数据，将现在的结存数据做为下一年的期初值，并清除经营历程。这样数据易管理，不会因时间太长数据庞大。年结存后是处于期初建账状态，您可修改您的期初数据。如下图。 

　　系统使用多年账：年结存后，系统将保留之前的全部单据及明细账，并且可以查询跨年类报表，也可以进行跨年结算。年结存后，不需要再进行开账操作即可进行新的业务。

　
操作：“系统维护--年结存”

　　系统不使用多年账   

　　做年结存前请首先备份数据，并确认备份数据的正确性。年结存后清除了明细 账本和草稿。要查询去年的账本详情就必须把年结存前的备份数据回到查询版查询。  

　　年结存促销单选项：根据你的选择，对促销单进行删除处理 。

　　系统使用多年账

　　为了保证数据查询的准确性，将填写正确的年结存名称。



 
## 操作日志
操作日志

在操作过程中，为了更有效的控制系统的安全性，我们在辉煌系列中增加了操作日志功能，用于记录各操作员使用软件的各种功能的情况。 　　

操作:［系统维护］－［系统管理］－［操作日志］

点击菜单后，弹出查询条件窗口，输入查询条件，然后进入操作日志主界面。 如下图：

　　 　　

操作日志主界面中会记录各操作人员使用各功能的时间及动作。由于操作日志数据量具大，为了保证系统的正常运行，我们会将操作保留天数的操作日志删除，保留天数可以自行设置，默认天数为90天。 　　 　　
## 基本信息授权
基本信息授权

随着管理的日益规范，企业在经营活动中，经常需要职员查看及使用往来单位、仓库、部门、会计科目和商品时进行控制。即，某职员只能对某些单位销售，或者只能从某仓库出货，或者只能销售或采购某些商品。为了实现这些控制，则需要进行基本信息的授权管理。

　　操作：系统管理－基本信息授权




管理员有所有基本权限，职员权限必须进行手动处理。
状态栏为空，则表示无此基本信息操作权限。

★表示有此基本信息操作权限。

☆表示此类基本信息下有部份信息有权限。

对于新添加的基本信息，默认的为所有操作员都有此操作权限。

在单据中，操作员只能对自己有权限的基本信息进行操作录入，并且，选择基本信息时也只能看到自己有权限的基本信息。

在查询统计窗口，操作员也只能看到自己有权限的基本信息。

选中：即表示拥有此权限，打上★。

全选：即表示将此基本信息全部打★。

清空：即表示将此类基本信息全部取消★，置空处理。

注意:

１、操作员（除管理员外）只能对自己有全部权限的类进行添加操作

２、操作员在自己有权限的类下添加的信息，除操作员有权限外，与操作员一样有该类信息权限的操作员也自动有操作权限

３、操作员对自己有权限的信息进行分类后，该类下所有信息都有操作权限，并且，分类前也有该信息的其它操作员也同样自动拥有该类下所有信息权限。

4、使用基本信息授权功能后，查询报表的数据仅会显示有授权部分的数据信息，使用了该功能的用户在报表查询时需要注意。

注意：基本信息授权功能仅辉煌+中有。

　

　
## 价格信息设置
价格信息设置
当系统预置的价格字段不够用时，可以在【价格信息设置】中增加字段。

操作：系统维护—价格体系—价格信息设置

      
功能操作：包括增加、修改、删除操作。
字段说明：

● 固定名称：系统名称

● 显示名称：在系统相关地方显示时的名称

● 系统行：系统默认字段，系统行不允许修改和删除
与其他功能接口：

● 与物价管理：在价格体系中编辑的价格信息，可在物价管理中进行价格维护。

● 与基本信息：在价格体系中编辑的价格信息，基本信息维护价格时，可进行维护。

● 与业务单据：在价格体系中编辑的价格信息，开单选择价格字段时，可以选择。

● 与报表查询：在价格体系中编辑的价格信息，在部分报表查询时，可显示查看。

　

　

    
## 价格取值顺序设置
在【价格取值顺序设置】中，可以设置在零售、进货价及销售时，取商品价格字段的取值顺序。

操作：系统维护—价格体系—价格设置（顺序）
  
- 操作说明：
  - 可分别设置零售、进价、售价的取值顺序，通过页面切换分别设置。
  - 上表格为参与取值规则的字段及顺序，下表格是可参与的字段。
  - 通过“增加”按钮选择下表格字段参与规则，通过“删除”按钮取消字段参与取值规则。
  - 通过“上移”“下移”调整取值顺序。
  - 修改规则,“保存”后立即生效。
  - 系统提供默认取值顺序，通过“恢复默认”将删除用户自己配置的规则，恢复到系统初始默认规则，且不可再恢复到用户配置规则。
  - 价格项中提供字段，为“价格信息设置”中字段。同时提供仓库价格字段。

　
## 价格字段分配　

  
价格字段分配，主要是便于用户对价格字段进行授权控制。
  
操作：菜单“系统维护-价格体系-价格字段分配”
  
价格字段分配中，被授权操作员需先在“用户及权限设置”中添加，此处不能添加、删除操作员。
  
此选项为全局控制，只要勾选“启用”，即所有职员都启用价格字段授权控制。系统默认为未选中状态，被选中后，价格字段授权生效。
  
此处授权后，在开单选择价格时,则只能选到有权限的字段，没有权限的价格字段将看不到。
  
相关报表查询中，选择价格方式处，将也只能选择到有权限的价格字段，比如库存状况。物价管理、仓库物价管理、商品基本信息中，暂不做控制。

　

　
## 支付通支付
管家婆支付通支付，是通过银行通道接入微信、支付宝支付的一款聚合支付。开通了支付通，即关联开通了微信、支付宝支付方式，无需逐个另行申请开通。一次提交，全部开通。
如需申请，请登录下面网址进行提交资料申请开通：https://dls.gjppay.com/，使用管家公账号及密码登陆。申请开通资料需要提供：营业执照+法人身份证+银行卡号+门店照等。

:::tip 支付通商户号如需开通请联系当地经销商进行申请开通。
:::
1. 支付通设置
  操作：系统维护－第三方支付—支付通设置

 在设置界面填入申请的子商户号保存，在销售结算时，即可选择支付通账户进行微信、支付宝二维码扫码结算了。

  注：支付通账户，批发销售单及零售单中都可使用。
2. 支付通后台使用

  操作：在销售单等其他单据中，收款账户选择“支付通账户”，并录入收款金额后，点击保存单据 （零售中点击确定）会进入如下支付通支付界面：
 
 授权码中可通过录入或扫描微信、支付宝付款二维码进行结算。
3. 支付通零售单使用

  操作：在零售POS销售时，收款账户选择“支付通账户”，录入收款金额后，点击确定进入 支付通支付界面进行扫码收款，默认收款方式为商家扫客户。
4. 支付通对账

  支付通对账单，取值来源于支付通支付平台数据。并与软件单据关联查看用于对账。
 注：支付通支付支持单据：销售单、销售退货单、零售POS单、零售POS退货单。微信支付退货单只能调原单退货使用。

　
## 三方支付异常信息
三方支付异常信息

　　
在销售收款时，选择移动支付方式支付结算时，由于不可控原因导致收了用户钱，而单据无法过账时。出现异常现象单据在三方支付异常信息中会进行显示，并可以在此页面中针对异常单据进行退款。

   
## 微信支付
管家婆辉煌产品移动支付暂支持微信支付。微信支付需先在“微信设置”中启用绑定微信商户号（此账号需联系任我行通用事业部申请开通），用于接收收款或用于付款。
1. 微信设置

操作：系统维护－微信设置－微信设置     

微信支付，必须勾选启用“是否启用微信设置”，录入正确子商户号才能使用。

销售单中收款账户选择“微信钱包”，并录入收款金额后，点击保存单据会进入如下微信支付界面：
  
授权码中可通过录入或扫描微信付款二维码进行结算。

2. 微信对账
微信支付对账单，取值来源于微信订单数据。并与软件单据关联查看用于对账。

注：微信支付支持单据：销售单、销售退货单、零售POS单、零售POS退货单。微信支付退货单只能调原单退货使用。

　
## 微信公众号管理

  微信公众号，是商家在微信公众平台申请的应用账号，通过该账号，商家可在微信平台上实现和特定群体的文字、图片、语音、视频的全方位沟通、互动 。形成了一种主流的线上线下微信互动营销方式。
- 在管家婆辉煌软件中微信公众号可以实现什么功能呢？ 功能内容如下：
  - 支持微信支付后与微信公众号绑定
  - 微会员卡：注册会员卡、绑定老会员卡。
  - 会员储值、消费微信消息推送
  - 支持向关注者进行批量消息推送。该推送由公众号发出。
  -------------
- 软件操作流程如下：

一、微信公众号绑定

1、需在开始菜单安装目录中打开“辉煌微信公众号服务器”。

在右下角中选择服务器进行数据库连接配置以后，点击进入如下界面：

在此页面中录入外网地址后启动服务器。

微信服务器的外网地址如何录入呢？说明如下：

一般家庭使用的网络有独立的公网ip但是不是固定的，有条件的个人或者企业会购买固定的ip地址，得到此地址后，可以直接输入在微信服务器地址栏中；查询ip可登录www.ip138.com查询

由于运营商默认分配的地址不是固定的，因此，如果条件不允许的话，可以使用花生壳或者金万维等免费域名解析工具进行ip地址的绑定，这样在微信服务器地址中输入解析出的域名即可。

由于微信服务器是要占用3251端口的，所以以上设置必须是在3251端口畅通的情况下进行操作，如果外接了路由器的话，需要在路由器中做3251的端口转发，如果做了端口转发之后3251端口还是不通，需要联系运营商解决。

2、操作：系统维护－微信公众号－微信公众号绑定，绑定前需增加会员卡类型。界面如下：

      
以上信息需登录企业微信公众平台中获取。微信公众平台登录地址：http://mp.weixin.qq.com/。

原始ID为微信公众平台原始ID，点击“公众号设置”菜单获取，操作如下：
      
其他信息获取如下：

点击进入“基本配置”，界面如下：

在此界面中可以直接获取AppID、AppSecret信息。

IP白名单，腾讯为了提高接口调用安全性，微信公众号配置时，只有将IP地址设置为公众号的IP白名单，才能成功调用该接口。IP白名单地址为：114.215.240.42

EncodingAESKey需进行配置后随机生成。点击修改配置录入URL、Token，录入内容请复制下面信息。 

         

服务器地址(URL)为: http://cyb.grasp.com.cn/GraspHHWeiXin/web/weixin.aspx

Token(令牌)：GraspWeiXin

“JS接口安全验证文件”需进入如下界面获得：

点击设置进入：

点击红框处链接下载文件，然后在辉煌微信公众号绑定中“接口安全验证文件”处选择下载文件进行上传，上传成功在域名1、域名2中录入域名进行保存。

录入域名1为：ding.cybserv.com.cn/GraspHHWeiXin

录入域名2为：cyb.grasp.com.cn/GraspHHWeiXin  

二、微信会员卡设置

微信公众号会员卡设置，此功能主要用于微信卡包显示。可以针对不同会员卡类型设置不同卡包信息。

由于会员卡信息设置好以后会在微信卡包中显示，所以添加好以后微信后台会进行审核，在微信审核期间，可以在白名单中绑定10张会员卡进行使用。审核通过后可按发型数量进行添加绑定会员卡。

三、微信模板消息设置

微信推送消息用户不能自定义设置，需从模板库中添加加载。

1、在微信公众平台“模板消息”中添加模板。

添加后，在微信模板消息设置中，复制模板ID加载，不同消息对应不用模板。

加载成功后，在上图中会带出模板对应字段信息。

参照以上样式设置即可。

四、微信公众号消息推送

1、会员关注企业微信公众号

2、在手机中进入微信公众号中，选择“注册/绑定”

3、点击进入会员绑定页面：

4、如果是新会员，直接在界面中录入姓名及手机号注册绑定。如果是老会员可以选择下面两项进行会员绑定。

5、会员绑定后，该会员卡进行储值、消费、生日等会进行微信消息推送，如下：