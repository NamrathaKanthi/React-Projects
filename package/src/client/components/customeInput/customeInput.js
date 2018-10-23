import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './customeInput.scss';


class CustomeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLabel: !(!this.props.value || this.props.value.length === 0),
            value : this.props.value || ""
        }
    }
    onFocus(event) {
        this.setState({ isShowLabel: true, inFocus: true });
    }

    onBlur(event) {
        this.setState({ isShowLabel: !(event.target.value.length === 0), inFocus: false });
    }

    onChange(event) {
        this.setState({ value: event.target.value});
        (this.props.onChange) && (this.props.onChange(event.target.value));
    }

    render() {
        return (
            <div className='ci-holder'>
                <div className={'ci-label' + (this.state.isShowLabel ? ' showLabel' : '') + (this.state.inFocus ? ' changeColor' : '')}>{this.props.label? this.props.label : ""}</div>
                <input className="ci-input"
                    disabled={this.props.disabled}
                    type={this.props.type || "text"}
                    value={this.state.value}
                    onFocus={(event) => { this.onFocus(event) }}
                    onBlur={(event) => { this.onBlur(event) }}
                    onChange={(event) => { this.onChange(event) }}
                ></input>
            </div>
        )
    }
}

CustomeInput.propTypes = {
    disabled : PropTypes.bool,
    type : PropTypes.string
}
export default CustomeInput;