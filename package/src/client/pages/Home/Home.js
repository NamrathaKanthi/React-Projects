import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomForm from '../../components/customeForm/customForm';

import './Home.scss';
import Summary from '../Header/Summary';


class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <div className='home-page'>
                <div>
                    home
                    <div className="inputHolder width">
                        <CustomForm 
                            onChange={(changeObject, data)=>{
                                this.props.dispatch({ type: 'UPDATE_FORM_DATA', payload: data});
                            }}
                            formObjects={this.props.data}
                        ></CustomForm>
                    </div>
                </div>
                <Summary/>
            </div>
        )
    }
}

const mapStore = ((store) => { return { "data": store.formObjects } });
export default connect(mapStore)(Home);