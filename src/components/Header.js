import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './api/GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="left menu">
                <Link to="/" className="item">
                    Streamer
                </Link>
            </div>
            <div className="right menu">
                <Link to="/" className="item">
                    All Stream
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;
