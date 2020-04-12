import React from 'react'

class comp extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            id: 0
        }
    }

    componentDidUpdate (old_props, old_state) {
        console.log('update')
    }

    render() {
        return (
            <div>
                组件： {this.state.id}
                <div>
                    孩子的孩子
                </div>
                <div>
                    将要飞往哪去
                </div>
            </div>

        )
    }
}

export default comp
