/**
 * FLOATING BUTTON ACTION
 *
 * @summary Definition of the floating button action component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:29:22
 * Last modified  : 2019-06-03 00:19:04
 */

import { Component } from 'react';
import { SetThemeSelection } from './SetSelection';
import { themeservice } from 'static/js/services';
//import changeTheme from 'static/js/changeTheme';
import 'static/scss/floating-button.scss';

class FloatingButtonAction extends Component {
	constructor(props) {
		super(props);
		console.log('props: ', props);
		this.state = {
			selectedTheme: this.props.themeNames[0],
			themes: this.props.themes,
			themeNames: this.props.themeNames,
		};
	}

	updateThemeSelected = evFromClick => {
		return this.setState({ selectedTheme: this.state.themeNames[evFromClick.target.dataset.anchor] });
	};

	activateComponentJS() {
		var floatingBtn = document.querySelectorAll('.fixed-action-btn');
		var floatSubBtn = document.querySelectorAll('.tooltipped');

		M.FloatingActionButton.init(floatingBtn, {});
		M.Tooltip.init(floatSubBtn, {});
	}

	activateTooltips() {
		var elems = document.getElementsByClassName(classNames);
	}

	componentDidUpdate(/*prevProps, prevState*/) {
		//console.log('prevState: ', prevState);
		//console.log('prevProps: ', prevProps);
		return themeservice.update(this.state.selectedTheme);
	}

	componentDidMount() {
		console.log('Floating button mounted');
		this.activateComponentJS();
	}
	render() {
		console.log('Floating button action');
		return (
			<div className="fixed-action-btn">
				<a
					className="btn-floating btn-large waves-effect waves-light btn btn-floating tooltipped"
					data-tooltip={'Select a different page theme'}
					data-position="left"
				>
					<i className="large material-icons">format_paint</i>
				</a>
				<SetThemeSelection
					themes={this.state.themes}
					themeNames={this.state.themeNames}
					selectedTheme={this.state.selectedTheme}
					updateThemeSelected={this.updateThemeSelected}
				/>
			</div>
		);
	}
}

FloatingButtonAction.getInitialProps = function() {
	const data = {
		tooltip: 'Change page theme',
	};
	return data;
};

export default FloatingButtonAction;
