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
                <h2>Edit A Stream</h2>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={{ title: this.props.stream.title, description: this.props.stream.description}}
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