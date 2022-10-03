# 系统日志

存货库龄分析表可以查看存货进入仓库后的存放天数，存放天数可以根据以下三种日期为基准进行计算。

操作：业务报表—库存报表—存货库龄分析表

查询条件：

1. 基准日期：存货库年龄的基准日期可以由用户选择上述三种日期的其中一种
::: tip 关于日期的解释
- 入库日期：`指入库类单据的过账日期`
- 出库日期：`指出库类单据的过账日期`
- 库存变动日期：`指该存货最后一次出库或入库的日期，如果该最后一次入库是11号，最后一次出库时12号，那么该存货的库存变动日期为12号`
:::
2. 存货：可选一类或全部；默认为全部
3. 仓库：只显示该仓库的存货库龄
4. 超龄天数：只显示库龄超过N天的存货（N由用户录入）