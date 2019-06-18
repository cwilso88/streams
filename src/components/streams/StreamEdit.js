import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount(id) {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Looking for the stream...</div>
        }
        return (
            <div>
                {this.props.stream.title}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamEdit);