# 皮革布匹版特色功能  <Badge text="辉煌系列" />
管家婆辉煌系列皮革布匹版，是任我行公司推出的专门针对皮革、布匹行业企业管理的软件。该产品在主体功能上与辉煌系列产品一样，但具有皮革、布匹行业销售及管理的一些特色功能。  
皮革布匹版特色功能如下：  
## 明细管理功能  
在皮革、布匹行业，最典型的行业特点就是计量方式上，需要使用多个计量单位来对货品进行进销存的管理，最常用的单位有匹、米、码、公斤，而不同单位间可能是固定也可能是不固定的单位换算关系，如米和码间有固定换算关系，而“匹”和其他单位间没有固定的换算关系，每匹布的米数都可能不相同，而且需要管理到每匹布对应的米数。如有10匹相同质地的布，用户需要管理到每匹布各有多少米，总共有多少米。  

对于细码的管理有两种方式：一、管理明细码，二、大码进细码出  
### 管理明细码
明细码管理也是一种严格的细码管理方式，在该方式下，商品的进、销与库存管理均需要管理细码。布匹的数量由明细码产生。  
### 大码理细码出
该方式主要是一种非严格的细码管理方式，在该管理方式下，商品在入库和库存管理时，只统计总数量和总件数，而不需要录入明细码信息；但在出库时，需要录入细码信息，出库时的总数量由细码信息产生。  

管理明细码操作方式如下：  
- 1、首先在商品基本信息录入界面的细码管理框选择“管理明细码”。如下图的红色圈。整件单位，一般录入“匹”。如果每一匹布的米数相对固定时，也可以使用“整件单位关系”，这样在进行录入时，系统会根据“整件数量×整件换算关系”计算基本单位的数量。注意：整件换算关系只在单据录入时生效。使用明细码管理的商品，在出入库单据中不能手动修改数量信息。  
- 2、在入库类业务单据中，选择商品后，就会弹出明细码录入界面。在该界面中，可以整件或者按明细码来录入入库数量。  
如下图，在整件数量处录入5，在明细处录入3个明细码。录入完成后在进单中，则会自动生成总件数和数量信息。  
- 3、在出库类单据中，选择商品信息后，即会自动弹出“管理明细码”界面，大该界面中录入“基本单位出库数量”，即可以进行整匹销售或剪零操作。  
当然，也可以点击“批量分配”按钮，由系统自动进行出库数量的明细码分配工作。如下图的销售米数是250米。当销售的数量非整出库时，视作剪零，如下图的红圈。  
- 4、在库存盘点、库存商品期初等信息录入时，均支持明细码的管理。而在库存状况表中，也可以查询到库存商品的明细码情况。如下图为库存状况表的查询信息。  

注意：只有使用移动加权平均法、手工指定的商品，才能进行明细码管理功能。  

大码进细码出操作方式如下：  
- 1、首先，在商品基本信息中的“细码管理”框中选择“大码进细码出”选项。  
- 2、在期初录入时，大码进细码出商品需要录入总件数和总数量。  
- 3、商品入库时，只需要录入总件数和总件数即可，不需要录入明细码的细码。  
- 4、商品出库时，在“管理明细码”界面，需要录入商品的出库细码，该细码可以打印，并根据录入的细码，自动计算出出库布匹的总件数和总数量。在出库时，可以进行商品拆零。如果不需要出库打印明细码的则可以在用户配置-功能配置中勾选“出库不打印库存明细码”，默认不勾选，勾选后出库类单据将只打印出库明细码。  
- 5、在库存管理及库存盘点中，仅管理总件数和总数量，不能查询此类商品的细码情况。  
- 6、在进行单据出入库单据录入时（除报损单和报溢单外），总件数和总数量不能为0。为了进行库存调整，在报损单和报溢单中，支持总件数或总数量某项为0。  
## 委外加工管理  
在布匹行业的销售过程中，很多会涉及到加工印染程序。经销商普遍采用的货物进销流程如下：  
购进坯布——送印染厂加工——成品入库——销售  
- a)购进坯布，坯布采购入库，此时的坯布还属于原材料，不会作为商品销售；  
- b)根据市场需求，将坯布送到专业印染厂中进行印染处理，对送到印染厂中的坯布，需要了解坯布的库存量；  
- c)坯布印染完成后，作为成品重新入库，同时付给染厂印染费，并将费用分摊到商品中。染费一般按米记价，“元/米”，总费用＝单位费用×米数；  

在管家婆软件中，增加了委外加工管理来处理此类业务。  
- 1、首先，购坯布可以使用进货单，坯布不需要管理明细码，以提高录入速度及管理的快捷。  
- 2、其次，当需要送坯布到印染厂进行加工时，直接使用“委外加工领料单”进行商品出库。出库后，商品进入委外加工库。  
- 3、当委外加工的商品需要退货时，可以使用“委外加工退料单”进行处理。将商品退到的仓库。  
- 4、当委外加工完成后，就可以使用“委外加工完工单”来处理原材料的损耗、完工成品的入库及加工费用的分摊、记账。  