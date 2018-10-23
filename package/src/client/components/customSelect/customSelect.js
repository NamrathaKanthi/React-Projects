import React, { Component } from 'react';
import './customSelect.scss';

var option = React.createElement.bind(null, 'option');
class CustomSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    getInitialState() {
        return {
            color: null,
            colors: []
        }
    };
    handleChange(color) {
        this.setState({ color: color })
    };

    render() {
        return (
            <div className='ci-holder'>
                <select
                    label={this.props.label}
                    onChange={this.handleChange}
                    value={this.state.color}

                    option={(
                        { key: 'red', value: 'red' },
                        { value: 'green' },
                        { value: 'blue' },
                        { value: 'black' },
                        { value: 'orange' },
                        { value: 'greenish' })}
                >
                </select>
            </div>
        )
    }
}

export default CustomSelect;