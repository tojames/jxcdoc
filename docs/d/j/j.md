![](/images/jxc/f.svg)
# 标量值函数 <Badge text="JDP"> </Badge>
`数据库-->可编程性-->函数-->标量值函数`
## 创建标量值函数

比如要将付款单里面的付款账户明细表之付款类型增加到报表

第一步 在数据库为付款类型创建标量值函数

```sql
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION  [dbo].[BuyAccoutPaytype](@f_ref varchar(100))
returns varchar(8000)
as
begin
declare @str varchar(8000)
set @str=''

	select @str=@str+','+Paytype from tblPayAccountDet 
    where tblPayAccountDet.f_ref=@f_ref
	
	  if(len(@str)>0)
			begin
				set @str=right(@str,len(@str)-1)
			end
return(@str)
End
```
第二步 JDP平台将此标量值函数值添加到相关报表

字段名
```sql:no-line-numbers
(select dbo.BuyAccoutDetail(id,) from tblPay a where a.id=tblPay.id)
```
