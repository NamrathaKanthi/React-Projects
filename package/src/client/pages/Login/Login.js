import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomeInput from '../../components/customeInput/customeInput';

import './Login.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: true
        }
        this.userName = '';
        this.password = '';
    }

    inputValueChanged(key, value) {
        this[key] = value;
        this.setButtonState();
    }
    setButtonState() {
        this.setState({
            isButtonDisabled: (this.userName.length === 0 || this.password.length === 0)
        });
    }

    onLoginButtonClick() {
        this.props.dispatch({ type: 'UPDATE_USER_INFO', payload: { "fullName": "Krishna Teja Kesineni" } });
        this.props.history.replace('/home');
    }
    render() {
        return (
            <div className='login-page'>
                <div className="login-container">
                    <div className="login-header">Sign in</div>
                    <div className="inputHolder">
                        <CustomeInput label="UserName" onChange={(value) => { this.inputValueChanged('userName', value) }}></CustomeInput>
                    </div>
                    <div className="inputHolder">
                        <CustomeInput label="Password" type="password" onChange={(value) => { this.inputValueChanged('password', value) }}></CustomeInput>
                    </div>
                    <div className="buttonHolder">
                        <button disabled={this.state.isButtonDisabled} className="button primary-button" onClick={() => this.onLoginButtonClick()}>Sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStore = ((store) => { return { "data": store.LogedInUserInfo } });
export default connect(mapStore)(Login);