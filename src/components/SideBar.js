import React from 'react';
import Tab from "./Tab";

class SideBar extends React.Component {
    render() {
        return <div className="sideBar">
            <ul>
                <Tab r={83} g={166} b={184} page="profile"/>
                <Tab r={124} g={193} b={86} page="knowledge" />
                <Tab r={252} g={212} b={63} page="experience" />
                <Tab r={254} g={162} b={61} page="achievements" />
                <Tab r={226} g={76} b={111} page="projects" />
            </ul>
        </div>;
    }
}

export default SideBar;