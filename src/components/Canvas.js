import React from "react";

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bg: this.changeBg()};
    }

    changeBg() {
        let bg = "", r = 0, n = 0;

        for (let x = 0; x < 100; x++) {
            for (let i = 0; i < 100; i++) {
                r = Math.floor(Math.random() * 25) + 1;
                n = Math.floor(Math.random() * 2);
                if (r === 1) {
                    bg+="<span style=\"color: #53a6b8\">" + n + "</span>";
                } else if (r === 2) {
                    bg+="<span style=\"color: #7cc156\">" + n + "</span>";
                } else if (r === 3) {
                    bg+="<span style=\"color: #fcd43f\">" + n + "</span>";
                } else if (r === 4) {
                    bg+="<span style=\"color: #fea23d\">" + n + "</span>";
                } else if (r === 5) {
                    bg+="<span style=\"color: #e24c6f\">" + n + "</span>";
                } else {
                    bg+=n;
                }
            }
            bg += "<br/>";
        }
        return bg;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ bg: this.changeBg() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log(this.state.bg);
    }

    render() {
        return (<div id="canvas" className="canvas">
            <div dangerouslySetInnerHTML={{__html: this.state.bg}}></div>
            <div className="fadeOut"/>
        </div>);
    }
}

export default Canvas;