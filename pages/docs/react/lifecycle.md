---
title: 生命周期
full: true
---

在 React 中只有 class 组件才有生命周期。React 生命周期分为挂载阶段（Mount）、更新阶段（Update）、卸载阶段（Unmount）和渲染错误阶段（Error）。

![QQ图片20220704003631.png](https://rszpojkwiwkfgjmcsfwx.supabase.in/storage/v1/object/public/bucket/eZ49hKzDEc4G3UOBcCoeQ.png)

## 挂载阶段 Mount

### constructor

> 使用场景：组件初始化工作，例如：初始化组件的 state

construct 只会执行一次，调用后返回一个组件实例。
在初始化阶段执行，可直接对 `this.state` 赋值。在其他生命周期函数中只能通过 `this.setState` 来修改 `state`。

### getDerivedStateFromProps

> 使用场景：从 props 更新 state

getDerivedStateFromProps 是一个静态方法，所以在其内部使用 this 访问到的不是组件实例，接收 props 和 state 两个参数。

### render

> 使用场景：返回值作为页面渲染的视图

render 是 class 组件中唯一必须实现的方法。如果 shouldComponentUpdate 返回 false，则不会执行 render。

### componentDidMount

> 使用场景：依赖 DOM 的初始化，发送网络请求

componentDidMount 在组件挂载之后执行，只会执行一次。

## 更新阶段 Update

### getDerivedStateFromProps

同挂载阶段的 getDerivedStateFromProps

### shouldComponentUpdate

> 使用场景：更新性能优化

默认情况下，当组件的 props 和 state 变化时，都会导致组件更新。在 shouldComponentUpdate 函数中返回 false，则不会执行 render 方法更新组件。

### render

同挂载阶段的 render。

### getSnapshotBeforeUpdate

> 使用场景：更新前需要前一次 DOM 的信息，例如：滚动的位置。

getSnapshotBeforeUpdate 在 render 执行后，在 DOM 更新前执行

### componentDidUpdate

> 使用场景：对 DOM 进行操作，发送网络请求。

组件更新后立即调用 componentDidUpdate。

## 卸载阶段 Unmount

### componentWillUnmount

> 使用场景：清理操作，例如清除定时器，取消网络请求。

在组件卸载与销毁之前调用。

## 渲染错误阶段 Error

### getDerivedStateFromError

> 使用场景：渲染发生错误时，改变 state。

getDerivedStateFromError 在渲染发生错误之后在页面更新之前执行。

### componentDidCatch

> 使用场景：用于记录渲染错误信息。

componentDidCatch 在页面更新之后执行，因此不能改变 state。
