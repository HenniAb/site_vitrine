/**
 * A 404 page if a route is false
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom"

class NotFound extends Component{
    render(){
        return (
            <div>
            <h1>404</h1>
            <p>Page not found. Go to <Link to="/" >
                Main Page
            </Link></p>
        </div>);
    }
}

export default NotFound
