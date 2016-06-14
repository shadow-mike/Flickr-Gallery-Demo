import "./style";

import React from "react";
import LayoutBar from "../layout-bar";
import PictureList from "../picture-list";

const GalleryContainer = React.createClass({
	getInitialState() {
		return {
			// isRow : true,
			// isGrid : false,
			layoutWay : 'row'
		};
	},
	handleClickEvent(layoutWay) {
		this.setState({
			layoutWay : layoutWay
		});
	},
	render() {
		return (
			<div className="gallery-container">
				<LayoutBar layoutWay={this.state.layoutWay} onClickEvent={this.handleClickEvent} />
				<PictureList layoutWay={this.state.layoutWay} photos={this.props.data}/>
			</div>
		);
	}
});

export default GalleryContainer;