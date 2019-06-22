import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <div>Getting your stream...</div>
        }

        const { stream } = this.props;
        return (
            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams.ownProps.match.params.id }
}

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamShow);