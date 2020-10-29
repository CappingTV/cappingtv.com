import React from 'react';

interface Props {

}

function Navbar(props: Props) {
    return (
        <div className="navbar">
            <span className="logo">logo</span>

            <ul>
                <li className="nav-link">1</li>
                <li className="nav-link">2</li>
                <li className="nav-link">3</li>
                <li className="nav-link">4</li>
            </ul>
        </div>
    );
}

export default Navbar;

