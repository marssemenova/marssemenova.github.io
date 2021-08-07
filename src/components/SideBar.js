import React from 'react';
import Tab from "./Tab";

class SideBar extends React.Component {
    render() {
        return <div className="sideBar">
            <ul>
                <Tab colour="blue" page="profile"/>
                <Tab colour="green" page="knowledge" />
                <Tab colour="yellow" page="experience" />
                <Tab colour="orange" page="achievements" />
                <Tab colour="pink" page="projects" />
            </ul>
        </div>;
    }
}

export default SideBar;