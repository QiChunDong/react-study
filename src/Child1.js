import React from 'react'

class Child1 extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            value: 1
        }
    }

    add () {
        this.setState({
            value: this.state.value + 6
        })
    }

    ck () {
        this.props.father.add(10)
    }

    render() {
        return (
            <div>
                {this.props.val} : {this.state.value}
                <hr/><hr/><hr/><hr/><hr/>
                <br/>
                <input onClick={this.ck.bind(this)} value="给父亲加血" type="button"/>
            </div>

        )
    }
}

export default Child1
