# 系统安装与日常维护<Badge text="辉煌系列" />
:::tip 注意事项：
1. 为防止数据意外丢失，定期进行数据备份并对备份文件进行处理。
2. 系统升级前先进行数据备份，防止出现意外。
3. 系统开启顺序为：SQL+管家婆套接字服务器－>辉煌系列服务器－>辉煌系列客户端程序
4. 系统退出顺序为：辉煌系列客户端程序－>辉煌系列服务器 －>辉煌+管家婆套接字服务器
5. 为了防止软件狗被烧坏，避免热拔热插。
6. 为了防止数据读写错误，服务器所在硬盘必须有足够大的剩余空间。
7. 重装操作系统或SQL数据库前，一定将备份文件甚至整个管家婆辉煌系列安装目录（默认为C:\grasp）一并拷贝到D盘或其它非系统盘，防止发生意外。　
:::

:::: code-group
::: code-group-item 服务器环境
```ts:no-line-numbers
CPU：corei3及以上，网络版要求 corei7及以上
内存：4G及以上；
硬盘剩余空间：10G及以上
操作系统：windows2008 SERVER+
SQL数据库:SQl2000+最新补丁,sql2008 R2
```
:::
::: code-group-item 客户端环境
```ts:no-line-numbers
CPU：corei3及以上;
内存：4G及以上；
硬盘剩余空间：1G及以上
操作系统：win7,win10、win11
```
:::
::::

## 如何安装管家婆辉煌版

管家婆辉煌版的安装分为三大步骤:
- 加密狗的安装
- 运行环境SQL SERVER 2000数据库的安装
- 运行环境SQL SERVER 2008 R2数据库的安装
- 管家婆辉煌版服务器端和客户端的安装
- 使用MSDE安装特别说明
- 加密狗的安装

管家婆辉煌系列软狗（USB狗已经淘汰），如果您目前还使用USB狗，遇到问提需要重装
1. 安装USB狗。将USB软件狗插在计算机的USB插槽上，系统会自动找到软件狗，并弹出下图所示的对话框：

　　由于没有安装驱动程序，按“取消”按钮取消添加程序。如果没有弹出上图所示对话框，请检查系统BIOS设置是否将USB插口设为“ENABLE”，方法是在启动计算机时按住“Del”键进入BIOS中进行设置。
2.  安装应用软件。安装支持USB软件狗的管家婆软件，如管家婆辉煌版8.4。 但管家婆辉煌版7.2等版本没有USB狗的驱动程序，必须跳到第4步到网上进行下载。　
3. 重新启动计算机。系统会自动安装驱动程序，安装结束后你就可以直接使用。
4. 如果前三步未能成功，请到任我行公司主页上下载USB狗的驱动程序。
5. 对于门店版的狗的驱动程序需要单独安装，程序在安装目录下的drv文件夹里。

- 服务器SQL SERVER数据库的安装

SQL SERVER2000各版本的运行环境

操作系统要求
:::: code-group
::: code-group-item 企业版
```ts:no-line-numbers
Windows NT Server 4.0
NT Server 4.0 企业版
Windows 2000 Server
Windows 2000 Advanced Server
Windows 2000 Data Center Server。
(所有版本均需要安装IE5.0以上版本浏览器)
```
:::
::: code-group-item 标准版
```ts:no-line-numbers
Windows NT Server 4.0
Windows 2000 Server
Microsoft Windows NT Server 企业版
Windows 2000 Advanced Server
Windows 2000 Data Center Server
```
:::
::: code-group-item 个人版
```ts:no-line-numbers
Windows Me
Windows 98
Windows NT Workstation 4.0
Windows 2000 Professional
Windows NT Server 4.0
Windows 2000 Server
所有更高级的 Windows 操作系统
```
:::
::::

- SQL SERVER2000的安装

:::tip 安装SQL-Server2000注意事项
  - 在选择服务账户时，可以选择使用本地账户，也可以选择使用域用户账户，为了方便配置，请用户均选择“使用”本地系统账户。
  - 在选择身份模式时，为方便配置，建议用户均采用“混合模式”。下面的录入的sa密码请一定要记住，如果忘记，你将无法登陆服务，数据也将不能使用，我公司也绝不为用户解此密码。当然，用户也可以不设置密码。
  - 实例名。在没有安装其它SQL版本时，可以选择默认名称，在安装了其它SQL版本如7.0时，需要录入一个实例名，SQL2000支持多个实例名。
:::

使用SQL-Server的配置

点击“设置--设置数据库连接”中，选择服务器名，以及sa的密码。

其中，sa的密码是在安装SQL-Server时录入的。一般地，服务器名是<计算机名称>

启动SQL-Server服务，服务器一定要选择SQL-Server的服务器。   在服务中，一定要选择“SQL Server”服务。并确定左边的三角形成才表示SQL-Server服务器已经启动。

### 管家婆辉煌系列的安装

管家婆辉煌系列产品的安装包括两个部分
- 一是服务器端程序的安装
- 二是客户端的安装。
无论是单机版、试用版、网络版、门店版、均需要安装服务器与客户端两个程序。

在局域网使用中，只需要作为服务器的计算机安装服务器程序，作为客户端的计算机则只安装客户端程序。但若是单机使用，则必须在计算机上同时安装服务器与客户端。　

安装步骤如下：

- 《管家婆》辉煌系列安装盘插入光驱后，安装盘将自动启动安装程序，或者手动执行光盘目录下setup.exe文件，首先执行解压缩，然后弹出欢迎界面。

- 点击下一步，进入许可证协议窗口，点击“是”，进入安装说明界面，仔细阅读。

- 点击下一步，弹出版本功能说明窗口，继续点击下一步按钮，进入安装路径选择窗口，系统默认安装路径是在C盘根目录下，用户可选择其他的路径进行安装。

- 路径设置完成后，点击下一步，进入组件选择窗口，服务器端选择安装“服务器程序”，客户端选择相应的“客户端程序”和打印程序，如购买的是单机版就选择单机版，如是网络版就选择网络版。安装客户端,一定要安装打印程序.

- 然后点下一步，检查按照路径和组件后，系统开始安装软件，直到安装完成。安装进程中，安装程序会自动安装狗的驱动程序。

服务器端选择安装“服务器程序”，客户端选择“客户端程序”，然后点“下一步”进行直到安装完成。安装完成后，系统会在桌面和开始菜单里创建图标。


:::tip 如果是升级补丁，则在启动升级程序后选择“修复”，然后选择组件，然后升级就行。如果是升级安装，必须注意：
1、先进行数据备份；

2、安装升级新程序或升级包；

3、账套升级；
:::

:::warning 使用MSDE安装特别说明
　
　　问题:在安装MSDE后，我们启动管家婆时，系统会提示“ 用户 'sa' 登录失败，未建立信任连接...”

　　解决方法:
　　在MSDE的安装初始化文件setup.ini里加入如下信息就可,经测试,在98以上系统都行.
　　[options]
　　SECURITYMODE=SQL

　　应用:使用MSDE安装时,同时进行数据库加密,如何处理呢?
　　解决方法:
　　在MSDE的安装初始化文件setup.ini里加入如下信息就可,但需要重新启动系统.
　　[Options]
　　saPWD=grasp    (*给数据库加上密码)
　　DIsaBLENETWORKPROTOCOLS=0

相关链接

1、提示找不到软件狗怎么办?

2、提示“连接服务器失败”怎么办?  
:::
　
### SQLServer 2008 R2安装

:::tip 安装前的准备

1. 需要.Net Framework 3.5，在SQL Server 2008 R2安装的前会自动更新安装

2. 需要Widnows PowerShell的支持,WPS是一个功能非常强大的Shell应用，命令与DOX/UNIX兼容并支持直接调用.NET模块做行命令编辑，是非常值得深入研究的工具（在SQL2008 R2安装时会自动更新安装）

3. 需要确保Windows Installer的成功启动，需要4.5以上版本（需要检查服务启动状态service.msc）

4. 需要MDAC2.8 sp1的支持（XP以上系统中已集成）

5. 辉煌.NET 的数据库必须选择SQL Server 2008 R2，机器上已经安装Visual studio 2008则需要重新安装 2008 R2版本。
:::

:::tip 安装配置过程

1.进入SQL Server安装中心，如图1所示：（图1）

2、若要创建全新安装，选中右侧红圈部分，进行安装如图2所示：（图2）

3、图2中规则必须全部通过后单击“确定”进入下一步操作界面，如图3（图3）

4、进行到此步骤如果没有产品密钥可以选择安装试用版（180天试用期）。输入产品密钥后单击“下一步”进入下一操作界面，如图4所示(图4)

5、 图4中选择红圈选项“我接受许可条款”，点击“下一步”进入图5（图5）

6、点击“安装”，进入下一步操作界面，如图6所示（图6）

7、在图6安装程序支持规则检测中，全部通过后点击“下一步”进入如图7所示（图7）

8、图7中勾选红圈部分，点击“下一步”进入如图8所示（图8）

9、图8中单击“全选”按钮选择全部组件，上图红框处更改安装目录到空闲较多的逻辑盘下，如果系统盘比较空闲，可以使用默认值，推荐更改安装，点击“下一步”进入如图9所示（图9）

10、点击“下一步”进入如图10所示（图10）

11、在图10实例配置中选中“命名实例”，输入实例名（这里需要注意的是，如果服务器上已经安装有SQL2000，请不要使用SQL2000的实例名进行升级处理），点击“下一步”进入如图11所示（图11）

12、图11中确定所选目录磁盘空闲空间足够则继续单击“下一步”进入如图12所示（图12）

13、 服务器配置，服务器配置主要是服务启动帐户的配置，可以通过单击“对所有SQL Server 服务使用相同账户”按钮，统一指定SQL Server的指定账户，服务的帐户名推荐使用NT AUTHORITY\SYSTEM的系统帐户。单击“确定”后点击“下一步”进入如图13所示（图13）

14、数据库引擎配置中为数据库引擎指定身份验证模式和管理，图13中如红圈所示，选择混合模式，输入密码，SQL2008对sa的密码强度要求相对比较高，需要有大小写字母、数字及符号组成，否则将不允许你继续安装。在"指定Sql Server管理员"中最好指定本机的系统管理员administrator。设置确定后点击“下一步”进入如图14所示（图14）

15、图14中如红圈部分所示，单击“添加当前用户”，确定后点击“下一步”进入如图15所示（图15）

16、图15中选择“安装本机模式默认配置”选项，点击“下一步”进入如图16所示（图16）

17、图16中是错误报告，如果不想把错误报告发送给 Microsoft 可以不选任何选项，点击“下一步”进入如图17所示（图17）

18、图17中安装配置规则检测通过后，点击“下一步”进入如图18所示（图18）

19、图18所示准备安装界面，列出了之前所做的设置以供检查，如果还有待修改之选项可以单击“上一步”返回修改。如检查无误则点击“安装”，开始安装（图19）

20、图19中查看安装进度，安装结束后进入到如图20所示(图20)

20、安装完成。
:::
　

### 如何启动管家婆程序

- 成功运行管家婆软件，请按以下步骤操作:
  1. 服务器端计算机安装与操作系统匹配的SQL数据库；
  2. 服务器端计算机安装管家婆服务器端程序和软件狗驱动
  3. 客户端计算机安装客户端程序
  4. 服务器计算机端启动SQL服务器，并且正确设置
  5. 服务器端计算机启动管家婆套接字，并且保证211端口没有被占用或封闭；
  6. 服务器端计算机启动管家婆产品服务器程序，并且设置好数据库连接，要使用IP精灵的也进行申请；
  7. 如果要使用远程登录，并且使用IP精灵，服务器计算机必须上公网获得公网IP；
  8. 客户端计算机运行客户端程序
  9. 客户端程序进行注册
:::tip 注意：网络版不能单机使用，必须在网络中才能运行。
:::
- 服务器端要运行处理的内容

  1. 启动SQL服务器、套接字服务器和辉煌版服务器，可以通过右下角图标查看是否启动。如下：　　

  2. 启动服务器上的SQL Server服务器

在运行<管家婆辉煌系列>软件前，必须保证SQL Server服务器是启动的。如图所示：

　　如果没有启动，请运行服务器上的“开始” 菜单上的 “程序”中的“Microsoft SQL Server ”下的“服务管理器”，即可见到上图所示的窗口，选择“开始/继续”启动MSSQL Server Service。如果选中“当启动OS时自动启动服务”选项，则在启动计算机时，系统自动启动MSSQLServer Service。

:::tip 注意
如果安装了多个SQL实例，请在进行服务器选择时，一定选择好服务器名和实例；建议，不要安装多个SQL实例；

服务器,录入或选择SQL数据库所在计算机名称或IP;

服务选择SQL Server;
:::
- 启动服务器上的管家婆服务器支持者

　　从“开始——程序——管家婆辉煌”中选择“套接字服务器”并运行，也可在在管家婆服务器安装目录下运行“scktsrvr.exe”，运行后在右下角有图标。

:::tip 注意

211端口不能被占用或被其它程序封闭。

安装杀毒软件或XP系统时，留意其对211端口是否关闭，如果关闭了请一定释放此端口。
:::

- 运行管家婆辉煌版服务器 程序
　当服务器安装完成后，从“开始——程序”选择管家婆辉煌系列服务器并运行。

- 进行管家婆服务器数据库参数设置

在D所示界面点设置，选择数据库参数设置，进入如下图示：


用户名：指SQL用户，默认为sa；

密码：指安装SQL的用户名sa对应密码；

服务器名：指SQL数据库所在计算机的名称或IP；

　　注 意：“用户名”为SQL的用户名，默认是“sa”，“服务器名”为SQL2000系统所在机器的名称。SQL安装成功以后，“sa”默认为超级用户名，密码为超级用户的密码，用户可在服务端SQL系统中去改变密码。
注意：如果客户端无法登录服务器提示“sa”失败之类时，注意此处的设置，并且，注意服务器名是否正确，IP是否正确；有时，把服务器名在IP或计算机名称间进行交换，也能够解决登录问题。

- 如果是网络版，服务器计算机端还必须插入软件狗；当然必须安装好狗的驱动程序。

2. 客户端计算机要处理的内容
  1. 启动管家婆客户端程序

　　在做好上边两步后，就可以启动管家婆辉煌版了。从“开始——程序——管家婆辉煌”选择“单机版”并运行，出现如下界面：

　　服务器名称或IP：即管家婆服务器程序所在计算机名称或IP地址；

　　如果你是局域网内使用，则服务器名称或IP就是局域网中安装辉煌版服务器的那个计算机的名称或其内部IP；

　　如果你是单机使用，则服务器名称或IP就是本机名称；

  2. 为了维护你的合法权限，请进行注册

　　软件安装后，不进行注册的话，只能使用30天，30天后依然不注册的话，就不能正常使用了。

　　注册时，你需要向任我行公司提供：单位全名（11个汉字以内）、联系人、电话、狗号、正版用户卡号。

　　注册成功后，你就可以正常使用了。
  
  3. 如果是单机或门店版的话，客户端计算机还必须插入软件狗，当然还必须安装好狗的驱动程序。
　
## 管家婆辉煌版升级
管家婆辉煌系列的升级主要有几中，一种是原来基于DBF数据库的辉煌版7.2的升级，一种是基于SQL　SERVER数据库的辉煌版8.X、辉煌2005系列、辉煌2008系列与辉煌366系列 以及辉煌Ⅱ系列之间的升级。

辉煌版7.2升级到辉煌366系列

１、先将辉煌７２数据进行备份；

２、将辉煌７２数据年结存；

３、安装好辉煌366系列后，进入“系统维护－超级用户－升级辉煌版(7.x)数据”，出现下图：

点击“选择”按钮，选择辉煌版7.X数据路径，然后点“确定”即开始升级。

※注意　升级前，辉煌版7.X须首先做年结存，升级到辉煌366系列后，只保留年结存后的信息，“银行账户”、“费用支出”、“固定资产”等无法升级，需自行添加。

◆辉煌版8.X、辉煌2005系列升级到辉煌366系列

辉煌851或辉煌2005升级到辉煌366系列,只能升级基本信息；并且，辉煌851以下版本，必须先升级到辉煌851才能升级到该产品.

下面以辉煌832升级到辉煌366系列为例加以说明。

如辉煌版8.32升级到辉煌366系列， 首先必须先将辉煌832数据升级到辉煌851,然后安装辉煌366系列的服务器端和客户端，安装好后，进入管家婆辉煌366系列创建一个新的账套， 然后进入"系统维护-系统管理-升级辉煌2005(包含851)基本信息",851账套或者2005账套中基本信息导入新账套.

:::warning 特别说明
如果是低于辉煌851的版本，则必须要先升级到辉煌851，然后 才能将其基本信息导入辉煌366系列。366系列内,只能从低端产品往高端升级,不允许从高端往低端升级。
:::

◆　辉煌2008系列升级到辉煌366系列

　　　管家婆辉煌2008系列与管家婆辉煌366系列可以实现同版本间的无缝升级，列如辉煌2008可以无缝升级到辉煌366。方法为，安装客户商及服务器端程序后，进入系统，根据提示直接升级数据库即可。

◆　辉煌366系列升级到辉煌Ⅱ系列

　　　管家婆辉煌2366系列与管家婆辉煌Ⅱ系列 ，可以实现同版本间的无缝升级，列如：辉煌366可以无缝升级到辉煌Ⅱ。方法为，安装客户商及服务器端程序后，进入系统，根据提示直接升级数据库即可。

## 软件注册
软件注册

　　为了保障您的合法权限，购买任我行的产品后，您需要在30天内进行软件注册。注册方法如下。

　　在30天内，只要未进行注册，运行程序就会自动弹出如下窗口提示您。

　　选择继续，还可以进入程序进行业务处理；超过30天，则不能再继续了，您必须点注册进行注册。注册窗口如下：

　　

　　您必须将公司名称、公司电话、地区、加密狗号 、正版用户卡号、手机号、EMAIL一并在http://www.365doo.com进行注册，然后通过你注册的手机号获得注册码。注册成功后，就可以正常使用本软件了。

　　正版用户卡号参见产品包装盒中正版用户卡。

　

你只需要将公司名称、公司电话、联系人、地区、随机码和正版用户卡号正确录入，然后点注册按钮就行。注册成功后，就可以正常使用本软件了。

:::tip 注意

1、正版用户卡号参见产品包装盒中正版用户卡。

2、如果你选择的注册地与加密狗适销地区不符，将不能注册成功。所以，请购买贵公司注册地适销产品。

3、注册时，必须保证互联网通畅；
:::
　

　
## 数据备份
数据备份

　　注意：数据备份是一种非常重要的工作,我们应该养成经常备份的习惯,并即时检查备份文件,将备份文件转移到安全地方。

■ 直接备份

数据备份是备份从期初到备份时为止的所有数据，为了保证数据安全，建议用户最好每天都备份一次。数据备份有三种方法，一种是直接在管家婆里进行备份，在管家婆辉煌版“系统维护”的下拉菜单中点击“数据备份”，进入以下对话框：



备份方式有服务器备份和本地备份，他们共用一个文件名，只是存放位置不同。

1、选择服务器备份，则在服务器端backup目录下生成一个备份文件；

2、选择本地备份，则如下图示，需要输入服务器名，服务器端backup文件夹的共享名，本地备份路径。



:::tip 注意
需要进行本地备份，就必须将服务器backup文件夹共享出来，否则不能进行本地数据备份。对于单机，是不能使用本地备份的。

本地备份必须在局域网内才能使用。

服务器名：即局域网内备份文件所在计算机名称;

共享名：即安装辉煌系列服务器目录下backup共享名称;

本地备份路径：即备份时保存于本地的那个文件的位置;

服务器上的备份文件都是采用未压缩的方式进行备份，目的是避免压缩产生的数据丢失,本地备份是压缩过的。
:::

■ 自动备份

采用自动备份，首先要在“系统维护--系统配置”设置自动备份天数。系统自动备份的数据是自动存放在管家婆辉煌版服务器端安装目录下的backup目录里，文件名是“数据库名+当前日期”，如“ac20100724”。

■ 在数据库里进行备份

数据备份还有一种方法，就是直接在数据库SQL SERVER里备份，操作步骤如下：（以SQL Server 2000为例）

单击“开始—-程序—-Microsoft SQL Server---企业管理器”程序，进入“SQL Server Enterprise Manager”程序窗口。

在“控制台根/Microsoft SQL Servers”窗口中，单击“Microsoft SQL Servers”前面的“+”号以打开树。这时你会看到以你本计算机名的数据库组 ，单击“数据库”前面的“＋”号，将会看到各数据库的名称。如下图所示：



如　要备份数据库“hh366v70”的数据，用鼠标右击“hh366v70”数据库，选择所有任务下的“备份数据库”，弹出SQL备份“SQL Server 备份-hh366v70”窗口。



在上图中，点击“添加”按钮，将弹出下图“选择备份目的”窗口，在下图中，选择备份路径：：



文件名是指你备份的路径 ，默认路径是，C:\MSSQL7\BACKUP\是系统默认的路径，点击后面的“…”弹出备份设备定位窗口，你可另外选择路径并指定文件名。

然后点击“确定”，回到“SQL Server 备份-hh366v70”窗口。点击“确定”按钮开始备份。

　
## 数据恢复
数据恢复

　注意：恢复数据将完全覆盖下在使用账套中所有数据，因此应慎重。

■ 直接恢复

同样数据恢复也有两种方法，一种是直接在管家婆里进行数据恢复，要注意采用这种方法系统恢复数据的路径是管家婆服务器安装目录下的backup目录，如D:\graspns\backup。在管家婆“系统维护”的下拉菜单中点击“数据恢复”，进入以下对话框：



选择从服务器恢复，则弹出服务器中备份数据列表，我们从中进行选择，双击一个账套，则与之对应的备份文件名就出现在输入框中，或者手动录入备份文件名，如此，点击“服务器恢复”就行。

注意：如果是我们从其它账套拷贝而来的文件，则将其放到安装目录下的backup文件夹，然后在文件名录入框录入那个备份文件的名称，然后服务器恢复就行。

选择从本地恢复，则出现如下窗体。我们需要输入服务器名，服务器端backup文件夹共享名，以及本地备份文件所在位置。然后点击“本地恢复”就行。



对于单独一台计算机是不能使用本地恢复的，本地恢复必须在局域网内使用。

服务器名：即局域网内备份文件所在计算机名称;

共享名：即安装辉煌系列程序的目录下backup共享名称;

本地恢复文件：即备份时保存于本地的那个文件的名称;

■ 在数据库SQL　SERVER里进行恢复

同备份数据一样，首先单击“开始—-程序—-Microsoft SQL Server ---企业管理器”程序，进入“SQL Server Enterprise Manager”程序窗口。选择数据库后，点击鼠标右键，选择“所有任务---还原数据库”打开“还原数据库”窗口。




在上图中，点击选项栏，并点击从设备选择项，点击“选择设备”按钮，在窗口中选择需要恢复的数据，点击确定后，回到上图菜单中点确定按钮，数据即开始恢复。


## 辉煌在线充值
购买了辉煌在线产品的用户，除进行软件狗的注册外，还需要进行充值卡的充值，才能正常使用。

如果你不即时充值,你可以免费使用五天,五天后必须进行充值才能使用。充值时，在充值界面录入充值卡号、密码和随机码，只有三者都正确，才能充值成功。充值成功后，你的软件使用截止日期会得到有效修正，在截止日期前你都可以正常使用。

充值卡请到经销商处进行购买。 卡号和密码，刮开充值卡上涂层后获得。

:::tip 注意

1. 充值时，互联网络必须通畅；
2. 只能软件狗注册成功后才能进行充值；
3. 充值完成后，请务必在充值界面查询“截止日期”，以进行正确核对。否则，不要随意丢弃充值卡，以免带来不必要的麻烦。
:::