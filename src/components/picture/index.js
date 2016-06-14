import "./style";

import React from "react";

const Picture = React.createClass({
	render() {
		return (<li><a href={this.props.href} data-rel="lightcase"><img className="lazy" width="100%" height="100%" data-original={this.props.path} /></a></li>);
	}
});

export default Picture;