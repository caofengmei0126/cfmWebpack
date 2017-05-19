import React from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

export  default class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }
  componentWillMount(){
 this.props.store.get((messages)=>this.setState({messages}))
  };
  addMessage(message){
    this.props.store.add(message,(messages)=>{this.setState({messages})});
    /*let messages = this.state.messages;//先获得老数组
    //赋ID
    message.id = messages.length>0?messages[messages.length-1].id+1:1;
    message.createAt = new Date();
    //现在状态对象里的数组其实已经修改了，便是未刷新视图
    messages.push(message);
    //调用setState可以重新调用render方法
    this.setState({messages});*/
  }
  delMessage(id){
    this.props.store.del(id,(messages)=>{this.setState({messages})});
    /*let messages = this.state.messages;
    messages = messages.filter((message)=>message.id != id);
    this.setState({messages});*/
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎留言</h3>
        </div>
        <div className="panel-body">
          <MessageList delMessage={this.delMessage.bind(this)} messages={this.state.messages}/>
        </div>
        <div className="panel-footer">
          <MessageForm addMessage={this.addMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}
