import React from 'react';

class SideBar extends React.Component {
    render() {
        return <div className="sideBar">
            <ul>
                <li><a className="blue" href="#home">home</a></li>
                <li><a className="green" href="#knowledge">knowledge</a></li>
                <li><a className="yellow" href="#experience">experience</a></li>
                <li><a className="orange" href="#achievements">achievements</a></li>
                <li><a className="pink" href="#projects">projects</a></li>
            </ul>
        </div>;
    }
}

export default SideBar;