/**
 * FLOATING BUTTON ACTION
 *
 * @summary Definition of the floating button action component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:29:22
 * Last modified  : 2019-06-01 03:35:15
 */

import { Component } from 'react';
import { SetThemeSelection } from './SetSelection';
import 'static/scss/floating-button.scss';

class FloatingButtonAction extends Component {
	constructor(props) {
		super(props);
		console.log('props: ', props);
		// this.state = {
		// 	themeNames: this.props.themeNames,
		// 	theme: this.props.themes,
		// 	selectedBtnIndex: 0,
		// }
		//this.ThemeSelection = SetThemeSelection(this.props.themeNames, this.props.themes);
	}

	// onThemeBtnClickCallBack = ( ev ) => {
	// 	console.log( 'this: ', this );
	// 	//console.log( console.log( 'self: ', thisSelf ) );
	// 	console.log( 'themeBtnClick:', ev.currentTarget.title );
	// 	this.setState( {selectedBtnIndex: ev.currentTarget.title} )
	// 	//setStateTo( {selectedBtnIndex: ev.currentTarget.title} )
	// }

	activateComponentJS() {
		var elems = document.querySelectorAll('.fixed-action-btn');
		M.FloatingActionButton.init(elems, {});
	}

	activateTooltips() {
		var elems = document.getElementsByClassName(classNames);
	}

	componentDidMount() {
		console.log('Floating button mounted');
		this.activateComponentJS();
	}
	render() {
		console.log('Floating button action');
		return (
			<div className="fixed-action-btn">
				<a className="btn-floating btn-large">
					<i className="large material-icons">format_paint</i>
				</a>
				<SetThemeSelection
					themes={this.props.themes}
					themeNames={this.props.themeNames}
					selectedTheme={this.props.themeNames[0]}
				/>
			</div>
		);
	}
}

export default FloatingButtonAction;
