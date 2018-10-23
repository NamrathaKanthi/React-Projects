import React, { Component } from 'react';
import './customButton.scss';


class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || "",
        }
        this.keyindex = 0;
    }
    buttonType = [
        {
            'actions': 'primary'
        },
        {
            'actions': 'secondary'
        }
    ]
    getBlockComponent(obj) {
        this.keyindex++;
        switch (obj.actions) {
            case 'primary':
                return <input
                    key={this.keyindex}
                    disabled={this.props.disabled}
                    type={this.props.type}
                    value={this.state.value}
                    label={this.props.label}
                    className='customPrimaryButton'
                />
            case 'secondary':
                return <input
                    key={this.keyindex}
                    disabled={this.props.disabled}
                    type={this.props.type}
                    value={this.state.value}
                    label={this.props.label}
                    className='customSecondaryButton'
                />
            default:
                return <div className='no_block_type' />
        }
    }
    render() {
        return (
            <div className='ci-holder'>
                {this.buttonType.map((button) => this.getBlockComponent(button))}
            </div>
        )
    }
}

export default CustomButton;