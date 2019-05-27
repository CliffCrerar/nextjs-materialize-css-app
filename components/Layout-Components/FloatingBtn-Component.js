/**
 * FLOATING BUTTON
 *
 * @summary Floating button appears on all pages
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-26 21:33:11
 * Last modified  : 2019-05-26 21:33:36
 */

import {Component} from 'react'

class FloatingButtonComponent extends Component {
	constructor () {
		super()
	}

	componentDidMount() {

		var elems = document.querySelectorAll( '.fixed-action-btn' );
		console.log( 'elems: ', elems );
		//var instances = M.FloatingActionButton.init( elems, options );
		//console.log( 'instances: ', instances );

	}
	render() {
		return (
			<div className="fixed-action-btn" >
				<a className="btn-floating btn-large red">
					<i className="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
					<li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
					<li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
					<li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
				</ul>
			</div>
		)
	}
}

export default FloatingButtonComponent;