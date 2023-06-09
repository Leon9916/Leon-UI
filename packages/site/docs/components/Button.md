# 按钮

按钮用于开始一个即时操作。

# 何时使用

一个操作区域尽量保证只有一个主按钮。
按钮的主次顺序为：主按钮>次按钮>文字按钮。

# 展示

### 按钮类型

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

<demo src="../demo/button/demo.vue"></demo>
<demo src="../demo/button/demo2.vue" title="幽灵按钮" desc="幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。"></demo>

### 属性

继承于[Antd-vue Button 组件 API](https://www.antdv.com/components/button-cn#API)

