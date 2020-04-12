import React from 'react'

class comp extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            title: '大一新生'
        }
    }

    componentDidUpdate (old_props, old_state) {
        // 首先 更改了路由参数不会重新渲染页面
        // 其次 不能直接用state来暂存props里的参数 然后在此钩子里进行差异比对
        // 原因是会造成冗余的钩子触发
        // 所以此处应该用旧的props和新的props来比对路由参数的变化
        // 因为此处可能会有异步请求，较为消耗资源 所以不允许冗余触发

        // 路由参数可以通过props里的match或者location进行获取 常用的是match
        let newId = this.props.match.params.id
        let oldId = old_props.match.params.id
        console.log(newId, oldId)
        // 然后进行对比 有差异再更新state
        if (newId != oldId) {
            this.setState({
                title: newId === '1' ? '大一新生' : '大四老油条'
            })
        }
    }

    render() {
        return (
            <div>
                组件： {this.state.title}
                <div>
                    最后的最后
                </div>
                <div>
                    渴望变成天使
                </div>
            </div>

        )
    }
}

export default comp
