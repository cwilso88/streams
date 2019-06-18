import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
       return (
           <div>
               <h2>Create A Stream</h2>
               <StreamForm onSubmit={this.onSubmit} />
           </div>
       )
    }
}


export default connect(
    null, 
    { createStream }
)(StreamCreate);

