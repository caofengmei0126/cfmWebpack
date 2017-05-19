import React from 'react';
/**
 * 1.为按钮绑定点击事件 给表单绑定提交事件
 * 2.把收集到的姓名和内容封装成一个对象，传递给MessageBox，从而修改状态。
 * 3.状态改变后会自动刷新 MessageList
 */
// ES5 ES6 重大区别 es5所有事件处理函数 this=当前组件的实例
// ES6 事件处理函数指向 null
export default  class MessageForm extends React.Component{
  constructor(){
    super();
  }
  handleSubmit(event){
    event.preventDefault();//阻止表单默认提交
    let name = this.name.value;
    let content = this.content.value;
    this.props.addMessage({name,content});
    this.name.value = '';
    this.content.value = '';
  }
  // react亲生 render方法里this都指向当前组件的实例
  // 我们后生的 函数里this = undefined
  render(){//render里面的this指向当前组件
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="name" className="control-label col-md-1">姓名</label>
          <div className="col-md-11">
            <input ref={ref=>{this.name=ref}} required="required" id="name" type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="control-label col-md-1">内容</label>
          <div className="col-md-11">
            <textarea  cols="30" rows="10" className="form-control" id="content" required="required" ref={ref=>this.content=ref}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-1 col-md-11">
            <button className="btn btn-primary">提交</button>
          </div>
        </div>
      </form>
    )
  }
}
