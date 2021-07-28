import React, { Component } from 'react';

class ButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hit: false,
            stand: false,
            surrender:  false,
            split: false
        }
    }
    render() {
        return (
            <div>Buttons</div>
        )
    }
}

export default ButtonContainer