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
                <div>
                    开始的开始
                </div>
                <div>
                    我们都是孩子
                </div>
            </div>
        )
    }
}

export default comp
