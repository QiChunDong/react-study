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
                    歌谣的歌谣
                </div>
                <div>
                    藏着童话的影子
                </div>
            </div>

        )
    }
}

export default comp
