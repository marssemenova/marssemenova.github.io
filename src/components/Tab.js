import React from 'react';
import {style} from "typestyle";

class Tab extends React.Component {
    render() {
        const colours = style({
            $nest: {
                "&:hover": {
                    background: "linear-gradient(to right, rgba(" + this.props.r + ", " + this.props.g + ", " + this.props.b + ", 1) 0%, rgba(" + this.props.r + ", " + this.props.g + ", " + this.props.b + ", 1) 65%, rgba(" + this.props.r + ", " + this.props.g + ", " + this.props.b + ", 0) 100%)",
                    textShadow: "1px 1px 1px #4c5657"
                }
            }
        });

        return <li><a className={colours} href={"#" + this.props.page}>{this.props.page}</a></li>;
    }
}

export default Tab;