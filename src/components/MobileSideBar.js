import React from 'react';
import SideBar from "./SideBar";

class MobileSideBar extends React.Component {
    componentDidMount() {
        document.querySelector(':root').style.setProperty('--bar', '50px');
        document.querySelector(':root').style.setProperty('--mobileComp', '10%');
    }

    componentWillUnmount() {
        document.querySelector(':root').style.setProperty('--bar', '180px');
        document.querySelector(':root').style.setProperty('--mobileComp', '0%');
    }

    render() {
        return <SideBar mobile={true}/>;
    }
}

export default MobileSideBar;