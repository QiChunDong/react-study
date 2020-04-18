// 列表页
import React, { Component } from 'react'
import '../assets/css/Dialog.css';

class Dialog extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
    this.state = {
      show: false
    }
    this.callBack = null
  }

  // 打开弹框
  open (fn) {
    this.callBack = fn
    this.setState({
      show: true
    })
  }

   // 关闭弹框
  close () {
    this.setState({
      show: false
    })
  }

  // 按钮点击 0是取消 1是确认
  fnClick (index) {
    this.callBack && this.callBack(index)
    this.close()
  }

  render() {
    return (
      <div style={{display: this.state.show?'block':'none'}}>
        <div className="my-dialog-shadow"></div>
        <div className="panel panel-default my-dialog">
          <div className="panel-heading">
            <div className="panel-title">
              {this.props.title}
            </div>
          </div>
          <div className="panel-body">
            {this.props.msg}
          </div>
          <div className="panel-footer">
            <div className="btn-group">
              {this.props.buttons.map((button,index)=>(
                <button type="button" className="btn btn-default btn-sm" key={index} onClick={this.fnClick.bind(this, index)}>{button.title}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
