# 系统配置
sysname	remark
手机提交单据存为草稿	勾选此项时，所有用手机做的单据提交到后台时，都以草稿形式保存
是否允许负库存过账	 商品成本计算方法为‘全月一次平均’时方能启用此系统配置。勾选此项，允许在没有库存的情况下做出库单，但月结前一定要补齐入库单确定月底没有负库存。
上传附件最大限制（M）	上传的附件最大不能超过多少M，默认设置为0时不限制上传附件大小。
金额小数保留位数	可设置所有单据中金额的小数位，当出入库明细表存在数据时不允许再修改此参数。
单价小数保留位数	可设置所有单据中单价的小数位，当出入库明细表存在数据时不允许再修改此参数。
数量小数保留位数	可设置所有单据中数量的小数位，当出入库明细表存在数据时不允许再修改此参数。
距下次跟进时间时长不超过(天)	设置销售跟单‘下次跟进时间’与‘跟进时间’的日期差，为0表示不设置
闲置意向客户自动转目标客户周期（天）	设置未联系的‘意向客户’自动转为‘目标客户’的时间！为0表示不设置。
销售订单启用套装	套装是指组合销售的意思，如：沐浴乳单品30元，洗发液单品35元，组合起来销售卖55元。勾选此项，销售订单增加套装字段并能引用套装管理下的套装组合。
查询时间默认值	设置单据、报表条件查询默认开始日期的查询时间，可供选项“当天、开账日期、当月1号、当年1月1号、月结会计期间1号”
退货单是否回填订单状态	勾选此项，如果采购退货单引用的采购入库单有关联采购订单，则会回填订单的状态；销售模块退货单、出库单、订单影响同理受到控制。修改此项要求在未开账状态下进行。
条码或序列号扫描	选择此项将会在单据录入页面出现条码或序列号扫描快速输入框
预收预付记应收应付	启用此配置，采购订单、销售订单、采购入库单、销售出库单、采购付款单、销售收款单中的本来记入预收、预付的凭证、往来改为记录应收、应付
商品信息不允许重复项	选择商品编号时，商品编号不允许重复；选择商品名称时，商品名称不允许重复；选择商品名称和商品编号时，商品编号和名称都不允许重复。
电商数据自动同步销售订单	电商数据自动同步销售订单  不勾选此配置 如果需要将电商数据同步到系统订单，则要手工通过【电商销售订单】导单 
采购订单单价差异提醒%	当配置值大于0，保存采购订单时会判断商品的单价与该商品所有采购入库不含税单价的差额所占百分比，如果存在比值大于设定的值，则给出提示是否继续保存。
启用电子商务	勾选此项，销售模块下面的电子商务模块可录入相关电商信息
往来单位信息不允许重复项	选择往来单位编号时，往来单位编号不允许重复；选择往来单位名称时，往来单位名称不允许重复；选择往来单位名称和编号时，往来单位编号和名称都不允许重复。
其他入库单零单价时自动获取价格	勾选此项，其他入库单若不输入单价，商品自动回填最近进价（若无最近进价则取预设进价，如果两个都没有则取0）。
组拆装单零单价时自动获取价格	勾选此项，组拆装单若不输入单价，商品自动回填最近进价（若无最近进价则取预设进价，如果两个都没有则取0）。
启用现款采购	
启用现款销售	
启用记住密码	勾选此项时，系统登录界面可勾选记住密码，用户下次可直接登录系统。
一般纳税人标志	
启用辅助单位	勾选此项时，商品管理可设置“辅助单位、换算率”等信息。添加单据时，可以带出默认辅助单位；系统将根椐换算率自动回填辅助单位数量，相反也会根椐辅助单位数量换算基本单位的数量。
是否启用来电弹屏	
默认币种	
固定汇率	
进入盘点标识	
商品成本计算方式	
小数点尾数为0不显示	勾选此项时，单据或报表若出现小数点尾数带有0的去掉0的显示，例100.50就显示成100.5。
是否盘点	
启用发票	
启用分支机构	
报表商品属性是否启用	
简单财务标志	
分仓核算	
默认系统风格	
启用双单位	
风格设置	
明细小数位数	
保留小数位	
来电服务器	
列表页每页显示行数	所有报表、单据列表默认显示的信息的条数。
样品价格底线	
增值税发票税率%	可设置增值税发票的默认税率，单据的发票类型选择增值税发票，会带出其默认税率。
普通发票税率%	可设置普通发票的默认税率，单据的发票类型选择普通发票，会带出其默认税率。
启用价格跟踪	勾选此项，在做单时记录商品A对应往来单位A的最后一次入库或出库的单价，并更新价格管理，下次添加往来单位A的单据时，商品A会自动带出最后一次做单的单价。
往来单位支持对应商品预设售价	勾选此项，往来单位增加预设售价组字段，如果商品A对应的往来单位没有最近售价，添加出库类单据时商品A单价默认为该往来单位的预设售价。
启用客户信用额度控制	勾选此项，添加往来单位时录入信用额度值，做销售出库，若客户的应收账款达到限制的信用额度，系统会给出提示。
启用价格控制	勾选此项，可对职员采购或销售的商品设置价格范围。
限制业务员的意向客户数量	设置指定职员可添加生命周期为‘意向客户’的数量！启用后，CRM基础信息—CRM基础设置增加‘意向客户数设置’。
单据保存后提醒打印	勾选此项，保存单据后会给出是否打印单据的提示。
启用通知弹出窗口提示	
自动刷新在线人员	
制单人拥有草稿修改删除权限	勾选此项，用户若没有单据的修改、删除权限，但拥有自己草稿单据的修改、删除权限。
导出数据时为0不显示	勾选此项时，表示导出单据列表、报表及单据数据时，为零的数据直接显示为空；不启用的话直接显示出0。
启用零成本入库单价提醒	勾选此项时，月结时检查系统是否存在零单价入库的其他入库单、销售退货单，若存在提示存在这些单据是否月结。
限制业务员的目标客户数量	设置指定职员可添加生命周期为‘目标客户’的数量！设置后，CRM基础信息—CRM基础设置增加‘目标客户数设置’。
上午工作时间段设置	设置工作流的处理时间，限期办理时限不统计非工作时间
下午工作时间段设置	设置工作流的处理时间，限期办理时限不统计非工作时间
工作台目标数据来源	选择工作台柱状图、销售曲线图显示数据的取值，取值为CRM职员目标管理的类型，
销售订单提示可用库存	勾选此项，销售订单的商品可用库存不足时，保存给出提示。可用库存=实际库存+入库未过账+销售退货未过账-出库未过账-采购退货未过账。
启用固定资产	勾选此项，财务管理、期初设置中可以录入固定资产相关信息，并能够对固定资产进行折旧，清理等维护工作
采购退货单条码复核	勾选此项，采购退货单明细增加复核码字段，复核码要与条形码必须一致方可保存。
同价调拨单条码复核	勾选此项，同价调拨单明细增加复核码字段，复核码要与条形码必须一致方可保存。
商品销售核算价	 勾选此项，可在商品管理录入核算价，添加销售业务单据时商品自动带出核算价，销售统计报表增加核算相关字段（注:不影响往来)。
管理员在报表所做的列配置影响其他所有用户	勾选此项，超级管理员在报表做列配置操作时，将会影响其他所有用户
启用商品开票	勾选此项，采购/销售开票管理明细增加商品字段，可按商品进行开票（此项仅在非标准财务配置生效）。
销售出库单启用套装	套装是指组合销售的意思，如：沐浴乳单品30元，洗发液单品35元，组合起来销售卖55元。勾选此项，销售出库单增加套装字段并能引用套装管理下的套装信息，增加相应的报表:套装销售统计报表。
是否允许录入销售价	勾选此项，添加出库类单据时能录入销售价。
启用品牌管理	勾选此项，商品管理和收付款账户明细增加品牌字段，收付款单明细按品牌的数量进行收付款，增加相应的报表（品牌回款统计报表、品牌统计报表、品牌往来统计报表）。
销售退货单条码复核	勾选此项，销售退货单明细增加复核码字段，复核码要与条形码必须一致方可保存。
采购入库单条码复核	勾选此项，采购入库单明细增加复核码字段，复核码要与条形码必须一致方可保存。
商品成本计算方法	1、对库存要求：     1)全月一次平均：当月存在足够的库存时，可任意选择本月的日期添加出库类单据     2)先进先出、移动加权：必须在出库日期前存在足够库存才允许出库   2、出库成本规则     1)全月一次平均：出库类单据 做单时成本取商品的最近进价，月结后商品的出库成本=各商品(上       月结存金额+本月入库金额)/(上月结存数量+本月入库数量)        注意：除同价调拨等入库成本=出库成本外的单据     2)移动加权平均：出库成本=本出库类单据前的最后结存金额/结存数量     3)先进先出：出库成本=最先入库并仍存在于仓库商品的成本  
本期存在草稿单据，不允许月结	勾选此项，月结时系统检查本期是否存在草稿单据，若存在提示存在哪些草稿单据且不允许月结。
隐藏成本价时隐藏采购入库单成本	不勾选此项时，被设置了隐藏成本价的用户，在采购入库单添加界面仍允许看到‘单价、金额、含税单价、含税金额’等成本字段；但在修改和详情页面的成本相关字段还是会被隐藏的。
启用折扣跟踪	勾选此项，在做单时记录商品A对应往来单位A的最后一次入库或出库的折扣，并更新价格管理，下次添加往来单位A的单据时，商品A会自动带出最后一次做单的折扣。
启用标准财务	勾选此项：1）凭证默认启用审核，凭证启用审核的复选框是被隐藏的。2）会计科目增加核算部门、仓库、客户、供应商、职员的功能。3）增加结转损益的功能。
同价调拨单必须引用调拨申请单	勾选此项，同价调拨单必须引用调拨申请单，且要求调拨单的商品、属性需与被引用的申请单相匹配
存在未审核单据，不允许月结	勾选此项，月结时系统检查本期是否存在未审核单据，若存在提示存在哪些未审核单据且不允许月结。
自动产生凭证	勾选此项时，对应单据保存后将自动产生相关凭证；不勾选时会在财务管理显示出“生成业务凭证”菜单，您可以进入菜单勾选相关单据并手动点击产生凭证
设置数据库备份时间	设置数据库每天备份的时间（系统只预留7天的备份）
启用条码管理	勾选此项，新增或者修改商品时，不需要录入条码，软件会自动生成8位的EAN8规则条码数字。规则：以2开头 + 6位从0开始到9的数值 + 1位校验码。且单据中商品弹窗口自动显示条码字段
销售出库单条码复核	勾选此项，销售出库单明细增加复核码字段，复核码要与条形码必须一致方可保存。
启用单据折扣	勾选此项，采购、销售模块单据主表显示折扣，明细表中显示折扣，折后单价、折后金额、折扣金额字段
单据编号只读	勾选此项，所有单据的单据编号都为只读，不可修改
启用赠样品	勾选此项，采购、销售模块单据明细表显示赠样品选项
启用单据含税	勾选此项，采购、销售模块单据主表显示发票类型，税率，明细表中显示含税单价、含税金额、税额字段.采购、销售模块下分别显示采购开票、销售开票单据
采购类单据多仓库	勾选此项，采购管理模块的所有单据，仓库字段在单据明细表显示，可多次选择不同或相同的仓库。
设置数据库碎片一天整理次数	设置数据库碎片一天整理次数
采购入库必须引用采购订单	勾选此项，采购入库不能直接添加，必须引用采购订单才能保存。
是否隐藏邮件地址	勾选此项时，外部邮箱发送的邮件，收件人只能查看到发件邮箱名称，看不到发件邮箱地址。
销售出库必须引用销售订单	勾选此项，销售出库单不能直接添加，必须引用销售订单才能保存。
启用保质期	勾选此项，商品管理可设置保质期，添加单据时，只录入生产日期，保质期限会根据保质期和生产日期自动回填。相反，根据保质期限和保质期也会回填生产日期。保质期限=生产日期+保质期。
启用追踪单号	勾选此项，单据主表的增加追踪单号字段，并默认回填单据编号。在单号追踪输入追踪单号，可搜索出所有该追踪单号相关联的单据。
启用保存前打印单据	勾选此项，添加单据保存前，添加页面提供打印按钮进行打印。
系统默认语言	系统可设置默认语言，可供选项有“简体、繁体、英文”。
采购订单录入到货日期	勾选此项，采购订单明细增加到货日期字段，且为必填项。
销售订单录入发货日期	勾选此项，销售订单明细增加发货日期字段，且为必填项。
商品属性字段	
启用外币核算	此功能开账后不允许修改。勾选使用此功能，需要添加外币类型和设置外币汇率；会计科目中将增加是否外币核算及核算币种两个字段，可对会计科目启用外币核算同时选择默认币种。
允许修改资料	勾选此项时，表示当基本信息（商品，仓库，往来，部门，职员）已被使用后仍可以修改编号、名称等信息。
电商订单导入销售订单	勾选此项，电商销售订单将自动导入销售订单，无此类业务严禁勾选。
导入库单时自动添加商品	勾选此项，入库类单据导入系统不存在的商品，会自动更新至商品信息。
启用MAC地址过滤	勾选此项，将在“系统”启用MAC地址过滤，可设置MAC地址，系统只能在指定的“实际地址”电脑上才允许登陆科荣软件。注：此功能只控制电脑，不控制用户
启用商品批量录入	勾选此项，进销存中有商品明细的单据，主表会显示商品批量录入字段，输入商品回车会将对应的商品信息回填到商品明细表中
启用多单引用	勾选此项，如果单据有引用功能，则明细中也可以引用多个相应单据
启用部门核算	勾选此项：1）所有单据部门为必填项。2）开账之后存在业务单据就不能再修改。3）所有数据按部门进行核算统计。
出库类单据保存时判断可用库存	勾选此项，出库类单据的商品可用库存不足时，保存给出提示。可用库存=实际库存+入库未过账+销售退货未过账-出库未过账-采购退货未过账。
列表缩略图高	有图片的报表和制单界面的行高，填0表示不显示图片缩略图以文字代替点击后查看图片
控制超采购订单入库	勾选此项，非admin用户入库单数超过被引用订单的数量时会给出提示，不允许保存。且基本权限设置增加“允许超订单数入库”的选项。
销售类单据多仓库	勾选此项，销售管理模块的所有单据，仓库字段在单据明细表显示，可多次选择不同或相同的仓库。
销售订单启用电商功能	勾选此项，销售订单启用电商功能，将会修改销售订单界面，请谨慎使用，无此类业务严禁勾选，一旦启用将不得更改。
配送流程	勾选此项，则可以使用配送流程单据  采购申请单-采购申请汇总单-配送单-配送验收单-配送退货单
入库过的序列号不能再次采购入库	勾选此项，无论入库过的序列号是否已出库，都不允许再次对该序列号进行采购入库操作。
仓库类单据多仓库	 勾选此项，仓库管理模块的所有单据，仓库字段在单据明细表显示，可多次选择不同或相同的仓库。
采购询价流程	勾选此项，采购管理中显示采购询价单，且采购订单，采购入库单可以引用此单据
采购换货流程	勾选此项，采购管理中显示采购换货单
销售出库单优惠金额分摊	勾选此项，销售出库单明细增加优惠金额字段，主表的优惠金额会根据金额比例自动分摊至明细。。
销售换货流程	勾选此项，销售管理中显示销售换货单
销售报价流程	勾选此项，销售管理中显示销售报价单，且销售订单可以引用此单据
微信后台网址	微信后台网址的设置
微信接口令牌号	微信后台网址的设置
控制对超结算账期未收款客户的销售	勾选此项，客户信息增加“结算账期（天）”字段，自动回填单据的“收款日期”，并提示对存在超结算账期未收款单据的客户是否再进行销售。
控制超销售订单出库	勾选此项，非admin用户出库单数超过被引用订单的数量时会给出提示，不允许保存。且基本权限设置增加“允许超订单数出库”的选项。
控制低于成本价销售出库	勾选此项，非admin用户都不能低于成本价销售出库，且基本权限设置增加“销售出库允许低于成本价销售”的选项。
低于限售价不能销售出库	勾选此项，非admin用户都不能低于限售价销售出库，且基本权限设置增加“销售出库允许低于限售价销售”的选项。
支持单据复核功能	勾选此项时，可在表结构设置单据的某字段是否支持复核，支持复核的字段可在单据详情页面修改，复核修改的字段不影响其他单据和报表，只供在详情页面查看。