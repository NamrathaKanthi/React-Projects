import React, { Component } from 'react';
import { connect } from 'react-redux';


class Summary extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.data.formObjects, null, 2)}</pre>
            </div>
        )
    }
}
const mapStore = ((store) => { return { "data": store } });
export default connect(mapStore)(Summary);