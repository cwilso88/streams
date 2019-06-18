import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Looking for the stream...</div>
        }
        return (
            <div>
                <h1>Edit A Stream</h1>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={{ title: 'edit me', description: 'Edit me too!'}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);