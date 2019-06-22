import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    } 

    renderActions() {
        return (
            <React.Fragment>
                <Link to="/" className="ui button">Cancel</Link>
                <button className="ui button negative">Delete</button>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }
    
    render() {
        return (
                <Modal 
                    header="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    stopPropogation={(e) => e.stopPropagation()}
                />
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamDelete);