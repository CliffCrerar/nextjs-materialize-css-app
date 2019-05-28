/**
 * THEME DEVELOPER PAGE
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2019-05-26 19:38:27
 * Last modified  : 2019-05-28 05:33:08
 */
import {Component} from 'react'
import App from 'App';
import {TD_SideNav} from 'components';

class PageComponent extends Component {
	constructor () {
		super()
		this.state = {
			navHeight: 0,
			windowHeight: 0,
		}
		this.StylesMain = {
			minHeight: this.state.windowHeight - this.state.navHeight
		}
	}

	componentDidMount() {
		this.setState( {navHeight: this.getNavHeight(), windowHeigt: window.innerHeight} );
	}

	getNavHeight = () => {
		var topNav = document.getElementById( 'nav-Bar' );
		return topNav.clientHeight;
	}

	render() {
		console.log( this.navHeight );
		return (
			<React.Fragment >

				<main style={this.StylesMain} className="d-flex flex-row justify-content-space-around	">
					{/* <TD_SideNav heightStyle={this.StylesMain} /> */}
					<div style={this.StylesMain} className="w-75 pr-5">
						<h3 className="w-100 text-right pt-3 text-right">Component theming</h3>
					</div>
				</main>

			</React.Fragment>
		)
	}
};

export default App( PageComponent );