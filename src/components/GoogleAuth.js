import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '137584578036-g8bptm6j005j1e5kpi0tuho6vu1vrq15.apps.googleusercontent.com'
            })
        });
    }
    render() {
        return (
            <div>
               Google Auth 
            </div>
        )
    }
}

export default GoogleAuth;
