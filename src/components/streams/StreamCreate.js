import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput({ input }) {
        return (
            <div className="field">
                <label></label>
                <input {...input} />
            </div>   
        )
    }
    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);

