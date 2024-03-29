# 基本信息和期初建账<Badge text="辉煌系列" />

　　基本信息包括：库存商品、往来单位、地区、部门、内部职员、会计科目、固定资产、费用类型、银行账户、其它收入、存货仓库。

　　期初建账包括：库存商品、应收应付、固定资产、现金银行、账务数据、借进商品、借出商品、委托商品、受托商品、资产负债表、开 账。

:::tip 注意
1. 在基本信息录入过程中，为了方便，推荐顺序为：存货仓库>>>>库存商品>>>>地区>>>>往来单位>>>>部门>>>>内部职员>>>>其它。

2. 期初建账相关内容输入完成后，一定要查看资产负债平衡表，如果未平，则一定要检查原因进行更正。

3. 在开账前，请一定再次检查期初中的有关数据和基本信息，尤其是库存商品的成本算法。

4. 特别说明：拼音码，即基本信息全名的汉字首字母。
:::

## 新增账套、删除账套
- 新增账套

第一次进入系统后，账套选择框是空白的，用户需要自己新增账套：

点下边的“创建”按钮，进入增加账套界面：

系统管理员账号是指SQL　SERVER数据库的管理员账号，默认为“sa”，密码默认为空。

账套名称是你这套账在管家婆的名称，数据库名称是你这套账在SQL　SERVER数据库里的名称，建议不要用汉字，最好用字母。

填完后，点“确定”按钮即可。

注意：最多能够创建9999个账套。账套名称与数据库名称，最多50字符。

- 删除账套

用鼠标点蓝要删除的账套，点下边的“删除”按钮，进入删除账套窗口：

同样，在系统管理员账号输入“sa”（默认），密码为空，点“确定”按钮即可。

　
## 基本信息的录入

### 基本信息录入概述 

　　在进行系统初始数据建立之前，需要对“库存商品”、“往来单位”、“内部职员”、“存货仓库”、“部门信息”、“会计科目”、“地区”等内容搭建一个基本的框架。例如：可以先建立商品的目录，而不论仓库是否有库存，此后对商品的选取可直接在建立的商品库中“选出来”，不必像手工账一样重复地抄写。

:::warning 基本信息多级分类的概念

　　如果您是一家零售商，您很可能将您的商品按一定的属性进行分类管理，如果您是批发商或是供货商或开有分店，您可能会将您的客户按地区或其它进行分类，“多级分类”正是基于这一现实模式而创建的。

　　举例 ：库存商品有“生产用品”、“日用品”、“食品”等类，然后对“生产用品”再分类。
:::

空白新增：`则表示打开一张没有任何信息的商品录入窗口添加新的基本信息；`

复制新增：`则表示将光标所在行信息的编号、全名之类复制到基本信息录入窗口，然后进行简单修改添加；这种方式对于基本信息差异比较小的情况是非常有用的。`

修改：`即对选中的基本信息进行修改；有些信息我们是不能修改的，比如已经开账后的往来单位期初应收应付；已经被过账单据使用过的库存商品的成本算法等。`

删除：`即对选中的基本信息进行删除。是否允许删除参见后面的说明。`

分类：`对不曾使用过的商品信息进行分类处理，即将不曾使用过的商品信息设置为商品类，并在其下添加新的商品信息。`

上移：`即将某行信息与其上一行号信息交换顺序，从而进行手动调整顺序；与下移、保存配套使用，不保存的话，手动调序没有意义。`

下移：`即将某行信息与其下一行号信息交换顺序，从而进行手动调整顺序；`

排序保存：`即对手动调整顺序或通过列表头排序后的结果进行保存，便于下次进入时看到的还是上次调整过的顺序；`

:::tip 特别说明：

上移、下移和保存排序受配套使用，上下移后如果不进行保存排序，则下次进入基本信息管理窗口时同，依然是调整前的顺序 。

编号递增，选择此后，确定保存当前信息后，系统自动根据刚才保存信息的编号自动加1或补1生成新编号。

比如，刚保存信息编号为A，则确定后，新窗口编号就自动显示为A1；如果刚保存信息编号为A010，则确定保存后新窗口编号自动显示为A011；
:::
　

:::tip 分级说明

　　如上所述，以同样方法，库存商品、往来单位、存货仓库、内部职员 、部门、地区信息依次可以进行再往下分类，最多分五级；固定资产、收入费用、银行账户基本信息系统允许进行3级分类；每级分类允许99万条记录。 

　　分类管理，将提高你的管理效率，方便查找与统计，为了你今后的管理，你一定要仔细考虑你的分类方法，不可随意处理。对于往来单位，你可以按照供销关系分供应商、经销商、客户和其它单位；对于库存商品，你可以按照商品属性分电器、食品、图书、服装之类。当然，具体怎么分类，将根据你的管理需要来处理。

注意:为提高查询效率,建议你的第一级信息不超过20个.
::: 
◆基本信息的删除

　　基本信息的删除与修改是有一定控制的。如果某末级基本信息已经有数量金额并且已经开账，则此基本信息不能再进行分类，也不能进行删除。只有在下一年度期初才可以进行调整。

　　比如，已经分类的信息，类是不允许删除的，必须把类下信息全部删除后，类才能删除；已经有期初或被其它单据使用的仓库、商品、单位是不允许删除的；已经被设置为操作员的职员是不允许删除的。这些都需要我们注意。

◆基本信息的新增

1、操作员（除管理员外）只能对自己有全部权限的类进行添加操作

２、操作员在自己有权限的类下添加的信息，除操作员有权限外，与操作员一样有该类信息权限的操作员也自动有操作权限

３、操作员对自己有权限的信息进行分类后，该类下所有信息都有操作权限，并且，分类前也有该信息的其它操作员也同样自动拥有该类下所有信息权限。

◆其它注意事项 

库存商品的基本信息中，不能有两个商品全名与编号全部相同，系统以全名和编号共同来确定一个具体的商品。 系统不允许编号相同。

商品保质期：保质期是指某商品从生产日期开始后在多少天内仍然可以使用。如：使用期为三年，则在这里录入360*3=1080（天）。系统可以根据进货录入的生产日期加上保质期计算出还有多长时间商品就要过保质期。

扫描枪的使用：在录入基本信息时，可以通过扫描枪来录入条码。扫描枪的使用与键盘类似，在需要录入条码的地方可以使用扫描枪录入数据。

　　在建立完基本信息之后，就可以进行“期初建账”了。

　

 ◆右键功能

　　筛选：即对表格中统计出来的信息进行模糊查询。查询的依据将根据表格字段确定。表体的任一字段将可以进行筛选。

　　

　　点击“选择列”的下拉按钮查询选择列后，录入过滤条件，点筛选按钮，则系统从当前表格所显示的信息中查询出所有符合过滤条件的信息来。 筛选功能只能对当前显示的信息进行筛选。

　　列信息类型不同，过滤条件也不同，如果列信息是数值类，则要求我们录入的过滤条件是一个上限和一个下限，如果列信息是日期时间类，则要求我们录入一全开始日期和结束日期。

　　定位：即根据查找依据和查找内容，在表格信息中从上往下或从下往上或全部表格范围内一条一条地查询出符合条件的信息。

　　

　　列字段：对表格列信息是否显示，显示的名称进行修改及调整。

　　“隐藏此列”，把已经显示的字段进行隐藏。

“增加一列”，可以把隐藏的字段进行增加显示。

　　“修改列名称”，即对显示出来的列名名称进行修改，比如，我们可以将“部门全名”修改为“部门名称”来显示。

“锁定此列”，该列锁定后不会随着滑动条的移动而移动。

显示字段：可以根据客户需求进行新字段的添加修改和删除，有公式字段和定制开发字段两种。

对齐方式和显示格式：用户根据自己的喜好，安排数据是左对齐、右对齐还是居中。
 
### 商品信息

　　特别说明：如果不希望某人 查看修改价格，则在进行权限设置时，不给予这个人“物价管理”权限就行；

　　操作：基本信息－商品信息

　　
　　空白新增、复制新增、修改、删除、分类、列表、商品信息批量修改、上移、下移、保存排序功能介绍参见：基本信息录入概述

　　特别说明：商品一旦被使用，其成本算法选择就不允许修改。

　　查询：即穿透式查询，不仅可以查询表格中的，也可以查询类下的信息，并且可以将查询出来的信息进行修改处理。

　　商品信息新增

　　 点击空白新增或者复制新增进入“商品信息”录入界面。录入界面的主要字段功能如下：

　　商品编号：为了录入快捷和便于查询，您可为商品定义编号，可以是数字，也可以是拼音；

　　成本模式：系统提供四种成本核算方法，移动加权平均法、先进先出法、后进先出法和手工指定法，选用哪种成本算法可根据企业自身特性。

 　　如采用先进先出法，期末存货成本接近市价，使资产计价较合理；后进先出法，期末存货成本按较早的成本计算，与当前市价偏差较大，尤其在物价上涨时，期末存货成本计价偏低，影响资产计量；

　　采用后进先出法，本期销货成本最接近市价，与当期收入相配比，计算的利润较合理，当物价上涨时，还可以规避因涨价而带来的经营风险，而采用先进先法，本期销货成本较低，会导致虚增资产，虚增利润。

　　由于后进先出法计价使本期销售成本较高，期末存货成本较低，所以在一定时期内以减少应交所得税　，从而增加企业现金流入。

　　从长远角度看，企业的存货最终都将转化为销售成本，因此不管采用这四种成本核算方法中的哪一种，最终的结果都将是一致的。

商品信息批量修改：可修改项为规格、型号、产地、有效期（天）、替换品、品牌、称重商品、备注。根据所选修改项，如为选择项，则修改值对应为选择项。

　　※ 成本核算方法一经确定，开账后是不允许修改的。

　　有效期（天）:有效期主要用于商品的保质期管理，主要用于采用非移动加权平均法的商品，在涉及库存增加如进货单的单据格式配置中选上“生产日期”一项。查询时，在“库存 查询-->商品保质期查询”中可以查询将要到保质期的商品。在“辅助功能-->启动报警”中，也可以查询到已到保质期的库存商品。

 替换品：选择一种商品作为替换品，此种商品没货时可以选择此替换品进行代替。

商品属性：有库存商品，服务/劳务 、、联营商品、拆分商品、套件商品五种选择。 当商品信息选择“服务/劳务”时，会将该商品作为特殊商品处理。即在业务单据中不处理库存，而是根据商品金额，处理为收入或支出。选择为“服务/劳务”类的商品信息，将只能在进货和销售类的单据中选取，在其他物流类单据

 中，将不能使用。 当商品信息选择“联营商品”时，在程序中不管理进货及库存，只统计销售数据，然后根据联营商品销售额的扣点金额作为商家销售收入。套件商品，商品购进时按照明细购入，打包卖出，且不用组装。拆分商品：比如猪肉整条购回，会拆分成猪排、猪头等进行销售，那么猪排和猪腿等这类无需直接进

 货而是由其他商品分解而来的，在系统中就建立为“拆分商品”。

 默认税率：输入商品的默认税率后，在开单时选择该商品后即可带出该商品的默认税率，带出后可修改，当然也可以设置整个系统的统一默认税率，开单时默认税率的读取优先级为：商品默认税率-系统默认税率，即当同时有商品默认税率和系统默认税率时，以商品默认税率优先取数。

　 编号递增：选择此后，保存当前信息，下一信息的编号将在当前信息编号基础上补1或加1生成新的编号。如当前编号为A，则保存后下一信息编号为A1；如果当前信息编号为A010，则下一信息编号为A011。
　　停用：默认情况下是使用。商品一旦停用，在业务单据中将不能再录入该商品。但查询统计不受影响。 商品信息及报表中已停用的商品会展示为不同的颜色以便区分。

　价格信息

　　1、单位关系：单位关系是指基本单位和辅助单位间的换算比例，数量关系是

基本单位量=单位关系*辅助单位量；

比如，某商品基本单位是个，辅助单位是件，单位关系是20，则有(1件)*(20个/件)=(20个)

2、建议基本单位采用最小计量单位,辅助单位为大单位.

3、预设售价：预设售价主要是用于录销售单时自动跳出售价，您也可以在辅助功能－物价管理中录入或修改；

4、最多支持三个计量单位；

5、不同计量单位有自己的价格体系，录单时选择不同单位自动带出对应单价，价格跟踪时也会针对不同计量单位进行价格跟踪记录；

6、有自己的条码。在录商品时，录入对应的条码，就带出对应的商品的计量单位。

　商品条码：管家婆辉煌版支持扫描枪输入，你只需在基本信息中输入该商品的条码信息，录单时在条码处使用扫描枪即可跳出该商品；

一品多码：在商品基本信息编辑页面，“价格信息”处，双击“条码字段”，则调出商品对应单位的多条码录入框。此处录入的条码，在商品录入及查询时，均有效。


　条码打印:即录入要打印的纸张张数 ，然后进行条码打印。

　打印设置：进行条码格式设置 ，包括条码样式，纸张布局，条码打印机类型选择，条码标签等。具体使用方法参见条码打印设置界面帮助。

点击商品提成页面签将进行商品提成方案选择栏，如下图

商品基本信息中的“商品提成”页面，主要显示的是该商品使用的提成方案的基本信息，如果名称、时间等等。

选择方案后，系统将会根据商品的销售情况，统计职员的提成。

点击“新增”按钮，可以在提成方案管理界面中选择新的方案；

点击“删除”按钮，可以删除该商品对应的方案，但并不会删除提成方案本身。

注意：此处选择了商品的提成方案后，可以在商品销售提成统计报表中查询相关数据。

注意：此处选择了商品的提成方案后，可以在商品销售提成统计报表中查询相关数据。

　　点击其它信息栏，将进入其他信息栏，可管理图片、备注和商品来源方式。

 商品图片：《管家婆》辉煌系列可以上传并显示商品的图片信息。点击“图片管理”按钮，选择商品的图片信息，点击“打开”按钮后图片保存到数据库，并在基本信息框中显示，如果要删除该图片则直接点击“图片删除”按钮。

 商品来源方式：此处商品来源方式仅影响MRP运算的生产/外购建议。如果勾选自制，则生成派工单，勾选外购，则生成进货订单，周期代表生产和进货的周期，MRP运算结果中建议开工时间/建议采购时间=需求日期-周期，此处如果多选，则生成重复建议。支持批量修改商品来源方式。

　　拆分商品设置：用于设置拆分商品，主界面分为上下表体，上表体为拆分前商品，下表体为其拆分后明细商品；表格上方信息，为被拆分商品信息，选择基本信息中的“库存商品”；拆分明细部分，选择商品基本信息中的“拆分商品”。“基本单位”指明细商品的基本计量单位，此处扣减被拆分商品库存时，均按基本单位进行换算。“单位关系”指明细商品基本计量单位与被拆分商品基本计量单位的换算比例，比如，“整猪”基本单位是公斤，“猪排”基本单位是斤，那么“猪排”应该是出2斤扣减“整猪”1公斤库存，那么此处数量就应为0.5。此功能受商品基本信息新增、修改权限控制。拆分商品可设置物价，可参与促销。

套件商品设置：原“组合套件设置”，套件商品可设置物价，可参与促销，组合套件销售取设置中的零售价。如果根据POS取价规则有取到非“零售价”字段，则视同单价修改，其明细按照比例修改其实际销售价格。套件商品在POS开单中可选，不可修改其明细。
　　
### 商品信息查询

　　 基本信息商品信息中，利用“查询”功能，可以实现针对商品的深入查询过滤和修改。

　　即 ，不仅可以针对表体显示的信息进行查询，还可以针对类下信息进行查询。该查询功能可以查询全部商品信息。

　　在商品信息窗口点查询后，选择或录入相关查询条件，点击确定，就能查询出相关的商品信息。

　　信息查询后，点击“修改”按钮，可以对指定商品信息进行修改处理。　　

### 单位信息

　在建立“往来单位”基本信息前，可先建立“地区”的基本信息。
　　基本信息－地区
　　“地区”主要是用于“往来单位”信息的，为“往来单位”选择了相应“地区”后，您可在以后进入“数据查询－销售分析－地区销售 排行榜”进行查询。
　　

　　基本信息－单位信息

　　进入“基本信息－往来单位”， 进入往来单位管理界面。

　　单位信息中的其他操作请参考：基本信息录入概述

　　点击“空白新增”按钮，进入单位信息录入窗口如下：

　　

　　换货期限：即与该单位进行的供销业务，在多少天内允许换货；

　　换货比例：即在换货期限内，与该单位发生的的供销业务额，允许退货的最大比例。

　　换货示例：某单位换货期限为10天，换货比例为10%，这10天里总销售为1000元，如果此间没有进行任何换货业务，则此次允许退货的最高金额为1000＊10%＝100元。如果此前已经换货50元，则此次最高允许换货就应该变成100－50＝50元。对于进货换货，则以进货单和进货退货单为金额计算。对于销售换货，则以销售单和销售退货单为计算依据。

　　地区全名：进行选择单位所属地区信息。

 停用：即往来单位不再参与新的业务录入；但对查询统计不影响；

　　期初应收应付： 期初应收应付金额栏，你可以录入应收或应付的期初余额，在此录入了，在期初建账：应收应付里就不用再录入了；您也可以在“期初建账－应收应付”里统一录入。

 期初预收预付：此处录入往来单位的期初预收预付款，也可以在“期初建账－应收应付”里统一录入。

 结算期限（天）： 在收款期限栏输入相应的天数，则与这个往来单位相关的销售单收款期限自动地连接，方便你的操作，便于你对不同的往来单位根据合作关系设置不同的收款期限，辅助控制欠款坏账问题。该设置与销售单中“收款日期”匹配使用。

　　适用价格：即该单位针对所有的商品，适用预设售价１、还是预设售价２、还是预设售价３、还是零售价，一旦设置好，并且用户配置中配置了使用“单位价格体系”，则默认情况下该单位在销售时就会自动取商品对应的价格。

　　拼音码：即全名每个汉字首字母，全名一旦修改，则拼音码自动修改。

　　应收应付款上限：即往来单位信用额度，往来单位能够欠款的最大限度，设置此额度后，开销售单时将会有一些提示。此上限也可以在“数据查询-往来分析”中输入。０表示不受权限。比如，如上食品公司应收款上限为100，现在销售给客户8300元商品，则在过账时会进行“应收应付限制”提示 。

默认经手人：在有往来单位的业务单据中，优先显示“默认经手人”信息，根据权限控制可以修改经手人信息。

结算单位：结算单位可以为空，为空时默认为本单位。结算单位与收货单位不同时，按结算单位产生往来账款。（注意：在系统配置中勾选“启用三方结算”选项后结算单位才会显示出来。）

特别说明：辉煌非+产品中，无结算单位功能。
### 职员信息

　　操作：基本信息－职员信息
　　每单优惠限额：即该职员录单时，每次能够录入的优惠金额的最大值。

 最低折扣下限：即该职员录单时，职员能够录入的最低折扣值，低于此折扣将不能过账。

　　职员提成：在职员信息中，可以选择职员对应的提成方案，选择后，可以在职员销售提成统计报表中查询相关数据。

其他信息：可以添加删除职员照片。还可以做情况备注。

　　空白新增、复制新增、修改、删除、分类、列表、上移、下移、保存排序功能介绍参见：基本信息录入概述
### 仓库信息

　　在实际管理中，仓库不仅仅可以代表一个具体的仓库，也可以是库位，也可以是一个门市部，还可以是一个分公司，这需要根据你的管理来决定。

　 　操作:基本信息--仓库信息　

　 在仓库基本信息中，用于记录仓库的编号、全名、地址、负责人姓名、负责人电话。　

　　需要指出的是，各个仓库的成本核算是分离的，因此同一个商品在不同仓库可能成本不一样。

　　仓库信息中的其他操作请参考：基本信息录入概述

### 部门信息

　　“部门”信息的建立主要是用于以后查询“部门费用分布”、“部门销售排行榜”等，以及职员信息建立时进行部门归类。

　　 如果需要进入相关统计，在进行单据录入里，需要选择部门；

　　操作：基本信息－部门 信息

　　在部门信息中，主要用户记录部门的名称及编号。

　　设置了部门信息后，在进行职员信息录入时，可以选择职员所对应的部门信息。

　　部门信息中的其他操作请参考：基本信息录入概述

### 地区信息

　　地区信息在建立往来单位时会使用上，并且，诸如地区销售排行榜等统计查询也会用到地区信息。
　　操作：基本信息－地区信息

　 地区信息用于记录地区的编号及地区名称。建立了地区信息后，可以在往来单位中选择该单位所在的地区。

　　以便可以查询地区费用分布表及地区销售排行榜。　

　　地区信息中的其他操作请参考：基本信息录入概述
　　
### 品牌信息

　　说明：品牌是商品的一个重要属性，也是业务经营中的重要分析指标。
品牌信息在商品中使用。在使用前，需要预先在“品牌信息”中建立品牌库。

　　操作：基本信息-品牌信息。

### 口味信息

　　说明：在快消品行业中，常有同一个商品，有多种口味情况，比如口香糖，饮料等。而在这类业务中，除了区分口味之外，其他所有信息都一样。
口味信息中建立口味信息库，在商品信息中设置每个商品对应的具体的口味。

商品信息中使用了口味管理，那么在出入库单据中，会选择具体交易的商品，及口味。

库存等报表，可以查询对应口味的库存详情。

　　操作：基本信息-口味信息

### 套件商品设置
 组合套件商品在使用时需要预先进行设置，组合套件名称、组成成员、价格设置等信息模板，销售时可以直接调取模板。

 操作： 基本信息-套件商品设置
 
新增、修改、删除：针对组合套件维护。

组合套件设置界面如下：

组合的商品及编号需要全新建立，而该组合商品的价格由组成明细金额合计而来。

注意：组合套件商品只能在组合套件销售订单、组合套件销售单中被选择使用。


### 拆分商品设置
 拆分商品在使用时需要预先进行设置，好便于零售销售时判断是从哪个主商品中扣减库存。

 举例说明：

 1、猪肉按整头猪购买入库，前台销售时可拆零进行销售。

 ●建立商品信息：编号01，一头猪（斤），属性为“库存商品”。

 ●建立商品信息：编号02，猪蹄（斤），定售价，属性为“拆分商品”。

 ●建立商品信息：编号03，排骨（斤），定售价，属性为“拆分商品”。

 ●建立商品信息：编号04，前腿肉（斤），定售价，属性为“拆分商品”。

 ●在“拆分商品设置中”，表头录入主商品“01 一头猪”，明细商品选择“02”、“03”、“04”商品。换算关系默认为“1”。

 ●进货和库存中，只管理01的库存。

 ●前台销售时可同时销售01或是02等，销售1斤02商品时，则后台则扣减1斤“01”商品库存。

 

 操作： 基本信息-拆分商品设置

### 费用类型
费用类型

　　费用类型用于建立费用科目下的子科目。
　　建立好费用类型，可以在一般费用单、现金费用单等单据录单时使用，也方便进行费用统计与分析。

　　例如：查询费用分布表等。 　　

　　费用类型中的其他操作请参考：基本信息录入概述

　
### 费用类型(总账)
费用类型

操作：基本信息-费用类型

说明：此处录入费用类型和总账对应科目后，可在做相关业务单据后，总账中快捷引入相关会计凭证。

销售成本对应销售单业务

其他业务支出用于服务商品的销售业务

出库类型对应其他出库单单和报损单业务

费用类型用于一般费用单和现金费用单等业务

　

费用类型中的其他操作请参考：基本信息录入概述
### 银行账户
银行账户

　　如果企业中有多个银行账户，可以在此处建立相关信息。

　　录入银行账户信息后，在做业务单据时即可选择对应付款账户或收款账户。

　　系统允许3级分类，每级分类允许99万条记录。

　　银行账户中的其他操作请参考：基本信息录入概述

　　
### 账户信息(总账)
账户信息

操作：基本信息-账户信息
说明：

此界面录入需使用的现金账户和银行账户，业务单据中收付款账户可以选择此处账户

同时可设置总账对应的科目，业务单据中涉及此处账户的单据保存过账后自动生成会计凭证。

（选择总账会计科目界面可以新增总账会计科目）

账户信息中的其他操作请参考：基本信息录入概述



 



 

 
### 收入类型
收入类型

　　录入收入类型信息后，在做业务单据时即可选择对应收入类型，便于其它收入分析。　　

　　收入类型中的其他操作请参考：基本信息录入概述
### 收入类型(总账)
收入类型

操作：基本信息-收入类型

说明：此处录入收入类型和总账对应科目后，可在做相关业务单据后，总账中快捷引入相关会计凭证。

销售收入对应销售单业务

商品类收入对应其他入库单和报溢单业务以及其他产生差价的相关业务

其他收入用于其他收入单等业务

其他业务收入用于服务商品的销售业务

　

收入类型中的其他操作请参考：基本信息录入概述
### 科目信息
会计科目（业务）

　　会计科目信息的管理，主要用于对会员科目的新增及分类等。
　　系统自带的科目信息不允许删除，也不允许分类。包括优惠、利息收入、调账收入、调账亏损、固定资产折旧、收入类型中的其它、银行账户中的建设银行。

　　权益合计下不允许添加任何新的科目信息，也不允许删除修改已经存在的信息。

　　建立的会计科目可以在会计凭证等单据中使用。

　　科目信息中的其他操作请参考：基本信息录入概述
### 附加说明
附加说明

　　建立了“附加说明”信息后，在录入单据时，可以直接选择，而不需要再次录入。
　　附加说明信息一旦建立后，将可以在单据录入时直接选择，减轻了录入量，提高了工作效率。

　　操作：基本信息－ 附加说明

　　附加说明中的其他操作请参考：基本信息录入概述
### 自定义类型
自定义类型

　　 商品基本信息中，可以使用自定义类型功能。在商品基本信息中，为了使用的方便，可以预先维护这些信息，这样，可以提高录入速度。
建立了“自定义 类型”信息后，在录入商品基本信息时，可以直接选择，而不需要再次录入。

　　 录入的商品自定义信息可以在单据中和相关报表中显示，方便统计和查询。

　　操作：基本信息－ 自定义类型

　　

 商品自定义中的其他操作请参考：基本信息录入概述

 

　
## 期初建账
### 期初库存商品
　　操作：库存商品的期初建账是需要分仓库的，因此进入“期初库存商品”后， 首先“选择仓库”，然后再“修改期初”。

　　移动加权平均法商品的期初录入：

　　方法一：选择某一商品后，点击“修改期初”按钮，在“期初库存商品录入”窗口中，录入期初数量及成本单价后，自动生成库存金额。

　　录入库存期初时，可以在类显示模式下修改，也可以进入列表模式下修改。

　　方法二：使用单据方式录入，点击“单据方式”功能按钮后，在弹出的“库存商品期初数量录入”窗口中，选择商品后，录入期初数量及成本单价后，自动生成库存金额。

　　期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品 ，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加库存。如直接在“期初库存商品”中修改，则是替换覆盖期初数据。

　　非移动加权平均法商品的期初录入

　　方法一：点击批次详情按钮，在弹出的“库存批次表”中录入商品的数量、单价及生产日期、批号等信息。

　　批次详情：即查看某一仓库中某一非移动加权平均算法商品的批次情况；

　　方法二：使用单据方式录入，点击“单据方式”功能按钮后，在弹出的“库存商品期初数量录入”窗口中，选择商品后，录入期初数量、单价、生产日期、批号信息后，自动生成库存金额。

　　注意：在进行库存商品期初录入时，为了方便，可以使用辅助单位进行录入，录入辅助单位的数量及单价，录入完成后，系统会自动将辅助单位的数量和单价转换成基本单位的数量及单价。

　　特别注意

若期初有借进（即借进而没有借转进货的也没有借进还出的部份）商品，那么在库存商品期初里也应反映。如期初借进商品10个，不含借进的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经借进的商品。

若期初有借出商品，那么在库存商品期初里没有反映。如期初借出商品10个，不含借出的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经借出的商品。

若期初有受托（即受托而没有结算的也没有退货的部份）商品，那么在库存商品期初里也应反映。如期初受托商品10个，不含受托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经受托的商品。

若期初有委托商品，那么在库存商品期初里没有反映。如期初委托商品10个，不含委托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经委托出去的商品。

如果库存期初由于某种原因需要为0,允许录入成本单价0。

### 期初应收应付

　　往来单位 期初应收应付主要指往来单位的应收应付款及预收预付账款的建立，有两种方法：

　　方法一：在录往来单位基本信息 中录入；

　　方法二：在“期初应收应付”中建立。 

　　操作：进入“期初应收应付”，点下边的“修改期初”按钮进入“期初应收应付 款”窗口录入信息。如下图：


注意：一个往来单位不能同时输入“应收账款”和“应付账款”，也不能同时输入“预收账款”和“预付账款”。

　　　在实际财务中一个往来单位可能同时有应收和应付款 ，预收和预付款，但在期初应收应付中只能输入其往来账的累计值。

### 期初财务数据（业务）

　　“期初财务数据”主要是用于一些不常用的或者系统在其它地方没有提供期初录入的项目，如待摊费用、应交税金等。

　　“现金银行”、“固定资产”等不涉及商品和往来明细的科目也可在此录入期初。

　　　操作：基本信息－期初建账－期初财务数据，在操作界面点击修改期初后进入录入各会计科目的余额即可。

说明：为了更好的处理用户的权益类会计科目。我们在10.3版本中进行部分调整。

1、在处理期初会计数据时，增加期初损益类科目的录入及调整。损益类科目下的实收资本和未分配利润可以录入期初数据。

2、在开账时，系统会根据“资产＝负债+所有者权益”平衡公式进行计算，当出现不等数据时，系统可以将差额自动写入“实收资本”。用户也可以在开账前，手动调平。

3、在开账后，我们也可以在会计凭证中调整损益类科目。

特别说明：“库存商品”、“应收款合计”、“应付款合计”、“借入商品”、“借出商品”、“委托商品款”等涉及商品和往来明细的科目须在相应的“期初建账”里录入，这里不能录入和修改。
### 期初现金银行

　　期初现金银行用于记录在期初时，有多少现金，各银行账户有多少资金。
　
　　现金银行合计科目是不允许直接修改的，只能修改现金科目和具体的银行账户科目。

注意：在10.3版本以后，现金科目可以进行二级分类。
### 期初固定资产（业务）

　　期初固定资产，主要是录入期初固定资产的现值。
　　

　　固定资产合计是统计出来的，我们只能对固定资产具体项目进行期初处理。
### 期初会员储值

　　 期初会员储值主要指会员客户的期初储值余额的建立，有2种方法：

- 方法一：在会员发卡中录入期初储值。

- 方法二：在“期初会员储值”中建立。

　　操作：进入“期初会员储值”，点下边的“修改期初”按钮进入“期初会员储值修改”窗口录入信息。如下图：

### 期初品牌应收
 期初品牌应收，可在期初时录入往来单各品牌对应应收账款数据。

操作：基本信息-期初建账-期初品牌应收
### 期初借进商品

　　在辉煌系列中，可以对商品借进、借进还出、借转进货、借出、借出还回、借转销售业务进行处理。

　　若有期初，可在“期初借进商品”中建立。进入“期初借进商品”窗口后 点“新增”按钮，在弹出的“期初建账借进商品”中录入借进商品的数量及成本单价。

　　在期初借出借进窗口中可以“分类排列”，即选择按往来单位还是按商品排序。
　　期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品 ，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加记录。如直接在“期初借进商品”中修改，则是替换覆盖期初数据。

注意：

若期初有借进（即借进而没有借转进货的也没有借进还出的部份）商品，那么在库存商品期初里也应反映。如期初借进商品10个，不含借进的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经借进的商品。


若期初有借出商品，那么在库存商品期初里没有反映。如期初借出商品10个，不含借出的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经借出的商品。

　
### 期初借出商品

　　在辉煌系列中，可以对商品借进、借进还出、借转进货、借出、借出还回、借转销售业务进行处理。

　　若有期初，可在“基本信息－期初建账－期初借出商品”中建立。进入窗口后 点“新增”按钮，在弹出的“期初建账借出商品”中录入借出商品的数量及成本单价。

　　在期初借出借进窗口中可以“分类排列”，即选择按往来单位还是按商品排序。
　　期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品 ，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加记录。如直接在“期初借出商品”中修改，则是替换覆盖期初数据。

注意：

若期初有借进（即借进而没有借转进货的也没有借进还出的部份）商品，那么在库存商品期初里也应反映。如期初借进商品10个，不含借进的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经借进的商品。

若期初有借出商品，那么在库存商品期初里没有反映。如期初借出商品10个，不含借出的商品库存为100个，那么在录“期初库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经借出的商品。
　　 
### 期初受托商品

　　在辉煌系列中，提供了对受托代销商品的处理。若有期初，您可在“期初受托商品”中建立。

　　此处建立的受托商品期初，是针对业务的，目的是为了查询受托业务，为了受托业务的结算、库存等处理，不影响库存商品。

　　具体方法是在上边的客户栏选择相应的客户，选上要建立期初的商品，点 击“修改期初”按钮后，在弹出的“录入期初库存”窗口中录入单价及库存数量。

期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加记录。如直接在“期初受托商品”中修改，则是替换覆盖期初数据。

特别注意
若期初有受托（即受托而没有结算的也没有退货的部份）商品，那么在库存商品期初里也应反映。如期初受托商品10个，不含受托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经受托的商品。

若期初有委托商品，那么在库存商品期初里没有反映。如期初委托商品10个，不含委托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经委托出去的商品。
　　
### 期初委托商品
　　在辉煌系列中，提供了对委托代销商品的处理。若有期初，您可在“期初委托商品”中建立。

　　此处 建立的委托商品期初，是针对业务的，目的是为了查询委托，为了委托的结算、库存等处理，不影响库存商品。

　　具体方法是在上边的 往来单位栏选择相应的客户，选上要建立期初的商品，点下边的“修改期初”按钮，在弹出的“录入期初库存”窗口中录入期初信息。

　　期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品 ，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加记录。如直接在“期初委托商品”中修改，则是替换覆盖期初数据。

在录入窗口中录入库存数量 、单价、成本单价，系统会自动生成金额及成本金额。　

特别注意
若期初有受托（即受托而没有结算的也没有退货的部份）商品，那么在库存商品期初里也应反映。如期初受托商品10个，不含受托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经受托的商品。

若期初有委托商品，那么在库存商品期初里没有反映。如期初委托商品10个，不含委托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经委托出去的商品。

### 期初委外商品
　　在辉煌系列中，提供了对委 加工商品的处理。若有期初，您可在“期初委外商品”中建立。

　　此处 建立的委外商品期初，是针对业务的，目的是为了查询委外加工商品，为了结算、库存等处理，不影响库存商品。

　　具体方法是在 右上角的 往来单位栏选择相应的单位信息，选择要建立期初的商品，点下边的“修改期初”按钮，在弹出的“录入期初库存”窗口中录入期初信息:　　

在上表中录入库存数量 、单价、成本单价，系统会自动生成金额及成本金额。
期初录入单：即以单据方式录入期初值，可以方便地大批量处理，尤其是不容易忘掉要处理哪些商品 ，如要减去库存，则可以录入负数冲减库存。注：期初数据如果是通过多张“期初录入单”录入，期初数据是以追加记录。如直接在“期初委外商品”中修改，则是替换覆盖期初数据。

特别注意
若期初有委外加工的商品，那么在库存商品期初里没有反映。如期 初委外商品有10个，不含委外的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经 委外加工的商品。


### 期初单据查询

期初单据查询提供了按单据类型和查询日期范围查询条件，用户可根据实际情况进行组合查询，以方便、快捷地查询到自己需要的单据。

操作：“基本信息—期初建账-期初单据查询”。

功能按钮说明：

查看单据：调阅出具体的单据进行查看。

查询条件：在输入某一或某组查询条件后，按“确认”按钮，就会查到所有符合查询条件的单据。

修改：可对选中的单据进行修改。

删除：将选中的单据删除。

注：包含有非移动加权商品或行业属性商品的单据不能修改、删除。

### 期初资产负债表（平衡表）

　　管家婆辉煌版的资产负债表是针对非会计人员也能看懂的傻瓜式报表，它不是标准财务的资产负债表。
　　管家婆辉煌版资产负债表分为资产负债表(树形表)和资产负债表(平衡表)，树形表是以树状显示，并能进行每月比较、历史查询和明细账本。平衡表则只能查询历史记录。

　　资产负债表是由资产、负债、所有者权益三大要素组成。

　　在会计上遵循资产=负债+所有者权益。因此，您看到的资产负债表(平衡表)应是左右相等的。

　　通过资产负债表，我们可以从一个整体的角度了解到企业总的资产、负债情况及流动资产(可在一年内或超过一年的一个营业周期内变现的资产，如现金、银行存款、库存商品、应收账款)、流动负债(1年或者超过1年的一个营业周期内应偿还的债务，如短期借款、应付票据、应付账款、预收账款、未缴税金、其他应付款和预提费用等)的情况，可以此数据为参考调整自己的管理。

　　期初资产负债平衡表，用于检查期初各项值是否正确，期初资产是否平衡？

　　根据会计准则，企业的资产必须等于负债加所有者权益
### 期初库存商品列表

操作： 在期初库存商品报表选择仓库后，点击“库存列表”按钮。进入期初库存商品列表查询报表。在该报表下，也可以进行“修改期初”操作。

　　　　如下图：　　

:::warning 特别注意
若期初有借进（即借进而没有借转进货的也没有借进还出的部份）商品，那么在库存商品期初里也应反映。如期初借进商品10个，不含借进的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经借进的商品。

若期初有借出商品，那么在库存商品期初里没有反映。如期初借出商品10个，不含借出的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经借出的商品。

若期初有受托（即受托而没有结算的也没有退货的部份）商品，那么在库存商品期初里也应反映。如期初受托商品10个，不含受托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入110个。 即是说期初库存商品里应该包含已经受托的商品。

若期初有委托商品，那么在库存商品期初里没有反映。如期初委托商品10个，不含委托的商品库存为100个，那么在录“期初建账--库存商品”时，则应建入100个。也即是说期初库存商品是不包括已经委托出去的商品。

如果库存期初由于某种原因需要为0，允许录入成本单价0。
:::

## 如何开账
　　期初建账完成后，就可以开账了。开账后，即可进行单据录入及过账，就可以进行正常的操作了。

　　操作：进入“系统维护－期初建账－开账”， 点击“开账”按钮后，即可完成操作。

　　开账之后不允许再修改期初，若已开账，但还没有录入单据的情况下可以通过反开账来修改期初。进入"系统维护－期初建账－开账"， 点击“反开账”按钮即可。

:::tip 特别说明
实际开账日期为第一张过账单据的录单日期。
:::
　

 
