// 列表页
import React, { Component } from 'react';

// 召唤子组件们
import Table from '../comp/Table'
import Panel from '../comp/Panel'

class Add extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <Table></Table>
        <Panel></Panel>
      </div>
    )
  }
}

export default Add
