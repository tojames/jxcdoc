# 委托代销
本软件中的委托代销，是指视同买断方式的委托代销，即受托方自己决定商品的售价，受托方的利润来自于进销差价。而不同于受托方收取手续费的委托代销。如果是收取手续费的代销，可以通过凭证进行核算。

委托代销的结算按商品结算，根据受托方开出商品代销清单进行结算，而不按委托发货单进行结算，这样可以把握客户手中的商品数量，也真正体现了客户销售时确认销售的代销本质。

　● 委托发货

使用委托发货单处理。操作：业务处理－委托代销－委托发货单

在表头区录入收货单位、经办人、部门、发货仓库等信息，在表体区录入委托发货的商品名称、数量及单价等信息。

“选单”功能帮助用户选择有关的销售订单。单据过账后不生成会计凭证。

委托发货单月末结转成本时，所有委托发货单合并成一张凭证。会计分录如下：

借：委托代销商品

贷：库存商品

● 委托代销商品退货的处理

由于某些原因，代销客户将商品退还回，可使用委托退货单来处理此类业务。用户可直接在单据中填制业务信息，也可通过执行“选单”功能，调取委托发货单的信息。

操作：“业务处理－委托代销－委托退货单”

生成会计凭证如下：

借：库存商品

贷：委托代销商品

● 委托代销商品的结算

委托结算即根据代理商发来结算清单，确认销售。委托代销结算时，是按商品数量结算，用户可直接填制，也可通过执行“选单”功能，调取委托发货单的信息。

操作：“业务处理－委托 代销－委托结算单”

委托结算单过账后，生成会计凭证如下：

借：银行存款/现金/应收账款

贷：主营业务收入

* 委托结算单月末结转成本，所有委托结算单的成本结转合并生成一张会计凭证。

会计分录如下：

借：主营业务成本

贷：委托代销商品

● 委托结算调整单

委托代销商品调价的价格不是指调整后的价格，而是指调整的变化额，也就是差额，如果为负就录入负数。委托代销结算时，可直接填制 单据，也可通过执行“选单”功能，调取委托发货单的信息。

如：将10件商品由先前的100元/件调整为120元/件，则录入的单价为20元。

将10件商品由100元/件调整为80元/件，则录入的单价为-20，金额为-200元。

即：委托调价单上的单价=调整后的单价-调整之前的单价

1、业务数据的变化为：`委托代销商品的商品款查询数据发生变化，将来结算单价发生变化。`

2、账务数据不发生变化。委托调价单不生成会计凭证。

● 委托成本调价单

委托成本调价单用于对存放在委托代销商处的存货成本进行调整
