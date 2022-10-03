# 写作示例
# 内置组件

## Badge <Badge text="badge" />

- Props:
  - type
    - 类型： `'tip' | 'warning' | 'danger'`
    - 默认值： `'tip'`
  - text
    - 类型： `string`
    - 默认值： `''`
  - vertical
    - 类型： `'top' | 'middle' | 'bottom' | undefined`
    - 默认值： `undefined`

- 示例：

**输入**

```md
- 进销存文档 - <Badge type="tip" text="v2" vertical="top" />
- 进销存文档 - <Badge type="warning" text="v2" vertical="middle" />
- 进销存文档 - <Badge type="danger" text="v2" vertical="bottom" />
```

**输出**

- 进销存文档 - <Badge type="tip" text="v2" vertical="top" />
- 进销存文档 - <Badge type="warning" text="v2" vertical="middle" />
- 进销存文档 - <Badge type="danger" text="v2" vertical="bottom" />

## CodeGroup

- 详情：

  [CodeGroupItem](#codegroupitem) 组件的 Wrapper 。

## CodeGroupItem

- Props:
  - title
    - 类型： `string`
    - 是否必需： `true`
  - active
    - 类型： `boolean`
    - 默认值： `false`

- 详情：

  该组件必须放置在 [CodeGroup](#codegroup) 组件的内部。

  可以通过 `active` Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。

- 示例：

**输入**

````md
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
````

**输出**

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

::: warning
你必须在 `<CodeGroupItem>` 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析。

或者你可以选择使用 [自定义容器](#自定义容器) 。
:::

# Markdown

## 自定义容器

- 使用：

  ```md
  ::: <type> [title]
  [content]
  :::
  ```

  `type` 是必需的， `title` 和 `content` 是可选的。

  支持的 `type` 有：
    - `tip`
    - `warning`
    - `danger`
    - `details`
    - [CodeGroup](#codegroup) 和 [CodeGroupItem](#codegroupitem) 的别名：
      - `code-group`
      - `code-group-item`

- 示例 1 （默认标题）：

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

**输出**

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

- 示例 2 （自定义标题）：

**输入**

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```ts
console.log('你好，进销存文档！')
```
:::
````

**输出**

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```ts
console.log('你好，进销存文档！')
```
:::

- 示例 3 （Code Group 别名）：

**输入**

````md
:::: code-group
::: code-group-item FOO
```ts
const foo = 'foo'
```
:::
::: code-group-item BAR
```ts
const bar = 'bar'
```
:::
::::
````

**输出**

:::: code-group
::: code-group-item FOO
```ts
const foo = 'foo'
```
:::
::: code-group-item BAR
```ts
const bar = 'bar'
```
:::
::::


- 示例 3 （乱七八糟）


::: details 点击查看代码
```ts
...这句代码很牛逼
console.log('Hello，进销存文档！')
```
:::

### 开源代码如何推送

```bash
# 准备所有文件
git add --all

# 提交并标注
git commit -m "update xxx"

# 推送到主分支
git push -u -origin main
```
### 修改容器样式
路径

`\theme-default\lib\client\styles\custom-container.scss`

```scss
  &.tip,
  &.warning,
  &.danger {
    padding: 0.1rem 1.5rem;
    margin: 1rem 0;
    border-top: solid 1px;
    border-left: solid 1px;
    border-right: solid 1px;
    border-bottom: solid 1px;
    border-radius: 0.5rem;
  }
  ```
:::: code-group
::: code-group-item 橙色
::: tip
就是边上有框，这里是橙色的框。
:::
:::
::: code-group-item 黄色
::: warning
就是边上有框，这里是黄色的框。
:::
:::
::: code-group-item 红色
::: danger
就是边上有框，这里是红色的框。
:::
:::
::::

::: remark 就是马克
比如这个是标注，标注啥就是啥，左侧是橙色2px的边框，右下角是圆角，底色是tip，就是不知道超宽了问题大不大。
:::

``` toml
代码块测试
```