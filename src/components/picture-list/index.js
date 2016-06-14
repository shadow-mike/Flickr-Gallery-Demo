import "./style";
import "../../../vendor/lightcase.css"

import React from "react";
import lightcase from "lightcase";
import lazyload from "jquery-lazyload";

import Picture from "../Picture";

const PictureList = React.createClass({

	componentDidMount() {
		
		$("img.lazy").lazyload({
			effect : "fadeIn",
			threshold : 100
		});
		$("a[data-rel^=lightcase]").lightcase();
	},
	render() {

		let obj = this.props.photos.map((photo) => {
			let src_m = photo.url_s;// 参数extra=url_s，拿到的json数据中，图片名后缀是_m
			let src_b = photo.url_s.replace('_m','_b');
			return <Picture href={src_b} path={src_m} key={photo.id}/>
		});

		let layoutWay = "layout-"+this.props.layoutWay;

		return (
			<div className="picture-list">
				<ul className={layoutWay}>
					{obj}
				</ul>
			</div>
		);
	}
});

export default PictureList;