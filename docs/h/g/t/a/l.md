# 账套维护
### 备份
为了保证软件数据的安全，用户需要定期对数据进行备份。

【操作】文件—账套维护—备份

（1）用户可自定义备份方式及自动备份的天数，备份文件存放在软件安装目录下的BACKUP文件夹中。

（2）数据备份

数据备份是指将当前账套的数据备份下来，存放在服务端软件安装目录下的BACKUP文件夹中。

操作说明：在“数据备份文件名”中输入备份文件的文件名，点击【确定】按钮。备份成功后，系统将在服务端安装目录下的BACKUP下生成一备份文件。用户可以对此文件进行压缩或拷贝，或恢复。
### 账套修复

账套修复和升级补丁

◆ 账套修复

当软件进行升级后，有可能原账套连接的数据库版本不正确，通过账套修复，可进行数据库的升级，以便能正常使用原账套。
### 升级补丁

账套修复和升级补丁

◆ 升级补丁

有时由于系统版本升级或修复软件的bug，需要根据提供的补丁，对账套进行升级。该模块提供在本地升级补丁的功能。
具体操作如下：

1. 操作“文件—账套维护-升级补丁”，进入升级补丁界面。

2. 点击【浏览】按钮，选择要升级的脚本文件，文件扩展名为Sql：

3. 点击【确定】按钮，根据系统提示进行升级确认，确认后系统会进行升级操作，成功后提示“执行完毕”，表示已成功进行升级。
### 系统重建
::: danger 系统重建的作用是批量清除不需要的数据。它将所有单据和明细账清除，保留了基础资料和期初数据。通过系统重建，用户可以清除所有数据。清除数据前
:::
用户也许会担心，如果我只希望通过系统重建修改期初数据，不希望清除单据，那该怎么办？软件已经考虑到了这个问题，可以采用下面这个办法来解决。
- 操作如下：
  1. 系统重建先备份数据
  1. 进入“业务报表－流水账－时间段流水账”。选中所有单据，点【复制】按钮，将所有单据复制下来，保存到草稿库中。（在第4步操作中，不选择“清除草稿库”。注意：估价入库单 、调价单、进货费用分配单等不能复制为草稿）
  1. 仔细确认“重建信息”的相关提示，按要求操作。
  1. 选择重建选项：包括是否清除期初 数据、是否清除草稿（不选中此项）、是否保留已审核订单等。（如果选择清除，则系统不保留相关的数据。）选择完毕，点击【确定】按钮。
  1. 系统重建成功后， 清除未保留数据，回到期初未开张状态，调整数据。
  1.  期初开账 。
  1. 在“业务报表－草稿查询”中，将草稿过账，这样，系统重建前的单据就恢复到系统中了。如有必要，可以先将草稿进行一些修改，再过账。过账时，可以选择多张单据批量过账。
