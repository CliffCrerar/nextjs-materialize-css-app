/**
 * SPINNER TEST
 *
 * @summary Loading spinner test page for page compilation
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-26 02:17:29
 * Last modified  : 2019-05-26 02:20:36
 */

import React from 'react';

class PageComponent extends React.Component {
	constructor () {
		super();
		this.state = {someKey: 'someValue'};
	}

	render() {
		return <p>{this.state.someKey}</p>;
	}

	componentDidMount() {
		this.setState( {someKey: 'otherValue'} );
	}
}

export default PageComponent;
