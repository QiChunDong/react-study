// 列表页
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from '../comp/Table'
import Dialog from '../comp/Dialog'

// 引入action
import api from '../api/index'
import { DEL_ITEM } from '../action/index'

class List extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
  }

  handleDel (ID) {
    let dialog = this.refs.dialog_del
    dialog.open(async index => {
      if (index === 1) {
        let {error} = await api.get(`del/${ID}`)

        // 把redux里的也减删掉
        if (!error) this.props.delItem(ID)
      }
      dialog.close()
    })
  }

  render() {
    return (
      <div>
        <Dialog title="删除" msg="是否要删除这条记录" buttons={[
          {title: '取消'},
          {title: '确认'}
        ]} ref="dialog_del"></Dialog>
        <Table delFn={this.handleDel.bind(this)}></Table>
      </div>
    )
  }
}

export default connect(function (state, props) {
  return state.good
}, {
  delItem (ID) {
    return {
      type: DEL_ITEM,
      ID
    }
  }
})(List)
