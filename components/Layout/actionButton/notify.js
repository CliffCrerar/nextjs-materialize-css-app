/**
 * Add site notifications
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2019-06-02 23:57:30
 * Last modified  : 2019-06-15 15:14:48
 */

import {Component} from 'react';

class Notification extends Component {
	constructor ( props ) {
		super( props );
		this.state = {
			state: null,
		};
	}
	render() {
		return (
			<div class="tap-target" data-target="menu">
				<div class="tap-target-content">
					<h5>Title</h5>
					<p>A bunch of text</p>
				</div>
			</div>
		);
	}
}
