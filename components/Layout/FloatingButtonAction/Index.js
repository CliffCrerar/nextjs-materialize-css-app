/**
 * FLOATING BUTTON ACTION
 *
 * @summary Definition of the floating button action component
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:29:22
 * Last modified  : 2019-06-04 02:58:50
 */

import {Component} from 'react';
import {SetThemeSelection} from './SetSelection';
import {themeservice} from 'static/js/services';
//import changeTheme from 'static/js/changeTheme';
import 'static/scss/floating-button.scss';

class FloatingButtonAction extends Component {
	constructor ( props ) {
		super( props );
		//console.log( 'props: ', props );
		this.state = {
			selectedTheme: this.props.themeNames[ 0 ],
			themes: this.props.themes,
			themeNames: this.props.themeNames,
		};
		setTimeout( () => {
			//this.useCookiesWarn();
		}, 5000 );
	}

	updateThemeSelected = evFromClick => {
		return this.setState( {selectedTheme: this.state.themeNames[ evFromClick.target.dataset.anchor ]} );
	};

	activateComponentJS() {
		var floatingBtn = document.querySelectorAll( '.fixed-action-btn' );


		M.FloatingActionButton.init( floatingBtn, {} );

	}

	activateCookiesWarn() {
		var tapTarget = document.querySelectorAll( '.tap-target' );
		M.TapTarget.init( tapTarget/*, options */ );
	}

	useCookiesWarn() {
		const tapTarget = document.getElementsByClassName( 'tap-target' );

		const instance = M.TapTarget.getInstance( tapTarget );

		instance.next();
	}

	activateTooltips() {
		var floatSubBtn = document.querySelectorAll( '.tooltipped' );
		M.Tooltip.init( floatSubBtn, {} );
	}

	componentDidUpdate(/*prevProps, prevState*/ ) {
		//console.log('prevState: ', prevState);
		//console.log('prevProps: ', prevProps);
		return themeservice.update( this.state.selectedTheme );
	}

	componentDidMount() {
		console.log( 'Floating button mounted' );
		this.activateComponentJS();
		this.activateTooltips()
		this.activateCookiesWarn()
	}
	render() {
		console.log( 'Floating button action' );

		return (
			<div className="fixed-action-btn">
				<a
					id="floating-btn"
					className="btn btn-floating btn-large waves-effect waves-light tooltipped"
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
				{/* <!-- Tap Target Structure --> */}
				<div className="tap-target" data-target="floating-btn">
					<div className="tap-target-content">
						<h5>Title</h5>
						<p>A bunch of text</p>
					</div>
				</div>

			</div>
		);
	}
}

FloatingButtonAction.getInitialProps = function () {
	const data = {
		tooltip: 'Change page theme',
	};
	return data;
};

export default FloatingButtonAction;
