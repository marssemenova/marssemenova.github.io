import React from 'react';
import {style} from "typestyle";

class Tab extends React.Component {
    render() {
        const colours = style({
            padding: "10px 20px",
            textDecoration: "none",
            display: "block",
            color: "white",
            fontSize: "16px",
            border: "var(--" + this.props.colour + ") 2px solid",
            margin: "15px",
            borderRadius: "50px",

            $nest: {
                "&:hover": {
                    background: "var(--" + this.props.colour + ")",
                    textShadow: "1px 1px 1px #4c5657"
                }
            }
        });

        return <li><a className={colours} href={"#" + this.props.page}>{this.props.page}</a></li>;
    }
}

export default Tab;