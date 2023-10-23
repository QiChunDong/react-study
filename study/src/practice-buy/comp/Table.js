// 列表页
import React, { Component } from 'react'
import {connect} from 'react-redux'

// action
import api from '../api/index';
import {INIT_ITEM} from '../action/index'

class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
  }

  async componentDidMount () {
    // 先查数据
    let {data} = await api.get('list')
    //更新列表
    this.props.initTable(data)
  }

  fnDel (ID) {
    this.props.delFn && this.props.delFn(ID)
  }

  render() {
    return (
        <table className="table">
          <thead>
            <tr>
              <th>名称</th>
              <th>价格</th>
              <th>库存</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item=>(
              <tr key={item.ID}>
                <td>{item.NAME}</td>
                <td>￥{item.PRICE}</td>
                <td>{item.COUNT}</td>
                <td>
                  <a href="#" className="glyphicon glyphicon-trash" onClick={this.fnDel.bind(this, item.ID)}>删除</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
  }
}

export default connect(function (state, props) {
  return state.good
}, {
  initTable (items) {
    return {
      type: INIT_ITEM,
      items
    }
  }
})(Table)
