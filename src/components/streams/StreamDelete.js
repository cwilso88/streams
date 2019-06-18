import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button">Cancel</button>
            <button className="ui button negative">Delete</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal 
                header="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => history.push('/')}
                stopPropogation={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default StreamDelete;