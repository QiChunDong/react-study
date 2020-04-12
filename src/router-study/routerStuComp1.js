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
