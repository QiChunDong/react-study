// 列表页
import React, { Component } from 'react-dom';

class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(...args) {
    super(...args);
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

export default Table
