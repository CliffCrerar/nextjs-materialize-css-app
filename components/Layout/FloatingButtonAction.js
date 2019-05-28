/**
 * FLOATING BUTTON ACTION
 *
 * @summary Definition of the floating button action component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:29:22 
 * Last modified  : 2019-05-28 02:16:10
 */

import {Component} from 'react';
import {RunMatJS} from 'static/js';


class FloatingButtonAction extends Component {
	constructor ( props ) {
		super( props )

	}

	componentDidMount() {
		console.log( 'Floating button mounted' );
		RunMatJS( function () {
			console.log( 'Test run function' );
		} )
	}

	render() {
		console.log( 'Floating button action' );

		return (
			<div className="fixed-action-btn">
				<a className="btn-floating btn-large red">
					<i className="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li>
						<a className="btn-floating red">
							<i className="material-icons">insert_chart</i>
						</a>
					</li>
					<li>
						<a className="btn-floating yellow darken-1">
							<i className="material-icons">format_quote</i>
						</a>
					</li>
					<li>
						<a className="btn-floating green">
							<i className="material-icons">publish</i>
						</a>
					</li>
					<li>
						<a className="btn-floating blue">
							<i className="material-icons">attach_file</i>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default FloatingButtonAction;