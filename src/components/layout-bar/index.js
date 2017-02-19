import "./style";

import React from "react";

const LayoutBar = React.createClass({

    handleClick(e) {
        if(e.target === this.refs.buttonRow) {
            this.props.onClickEvent("row");
        } else if(e.target === this.refs.buttonGrid) {
            this.props.onClickEvent("grid");
        }
    },

    render() {
        let row = "button button-row", grid = "button button-grid"; // 解析后其中一个标签上会多出一个空的class
        if(this.props.layoutWay === "row") {
            row += " selected";
        } else if(this.props.layoutWay === "grid") {
            grid += " selected";
        }

        return (
            <div className="layout-bar" >
                <ul>
                    <li>
                        <div className={row} onClick={this.handleClick} ref="buttonRow" />
                    </li>
                    <li>
                        <div className={grid} >
                            <div className="transparent" onClick={this.handleClick} ref="buttonGrid" />
                            <div className="tl" />
                            <div className="tr" />
                            <div className="bl" />
                            <div className="br" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

});

export default LayoutBar;