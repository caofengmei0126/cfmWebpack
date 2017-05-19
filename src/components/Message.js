import React from 'react';
import moment from 'moment';
export default class Message extends React.Component {
  render() {
    let {message} = this.props;
    return (
      //()=>this.props.delMessage(message.id)
      <li className="list-group-item">{message.name}:{message.content} <button className="btn btn-danger btn-xs" onClick={this.props.delMessage.bind(this,message.id)}>删除</button>//如果数据存到数据库，则应该是message._id
        <span
        className="pull-right">{moment(message.createAt).fromNow()}</span></li>
    )
  }
}
