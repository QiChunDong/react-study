// 列表页
import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

// 引入样式文件
import '../assets/css/Panel.css'

// 引入api 发送请求
import api from '../api/index'
import {ADD_ITEM} from '../action/index'
import { connect } from 'react-redux';

class Panel extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
  }

  async addItem () {
    // 先拿到表单数据
    let name = this.refs.name.value
    let price = this.refs.price.value
    let count = this.refs.count.value

    // 发送请求
    let {error, data} = await api.get(`add/${name}/${price}/${count}`)

    if (!error) {
      // 更新列表
      this.props.addItem(data)
      // 跳转到列表页
      // replace和push的区别在于是否在history中记录
      //this.props.history.replace('/')
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <div className="my-panel-shadow"></div>
        <div className="panel panel-default my-panel">
          <div className="panel-heading">
            <div className="panel-title">
              标题
              <Link to="/" className="pull-right glyphicon glyphicon-remove">
                取消
              </Link>
            </div>
          </div>
          <div className="panel-body">
            <form
              className="form form-horizontal"
              action="index.html"
              method="post"
            >
              <div className="form-group">
                <label className="col-sm-2 control-label">名称</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="请输入商品名称"
                    ref="name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">价格</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="请输入商品价格"
                    ref="price"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">库存</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="count"
                    placeholder="请输入库存数量"
                    ref="count"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-offset-2">
                  <button
                    type="button"
                    className="btn btn-primary form-control"
                    onClick={this.addItem.bind(this)}
                  >
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(function (state, props) {
  return state
}, {
  addItem (item) {
    return {
      type: ADD_ITEM,
      item
    }
  }
  // withRouter高阶函数的作用是将本页面纳入路由纳管
  // this会加上router相关的内容 如本例使用的 history
})(withRouter(Panel))
