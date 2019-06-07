import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="right menu">
                <Link to="/" className="item">
                    Streamer
                </Link>
            </div>
            <div className="right menu">
                <GoogleAuth />
                <Link to="/" className="item">
                    All Stream
                </Link>
            </div>
        </div>
    )
}

export default Header;
