import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">ShareIt</Link>
                </h1>
            </div>
        );
    }
});