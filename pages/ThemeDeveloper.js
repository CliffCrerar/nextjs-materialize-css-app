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
			setHeight: 0
		}
		this.StylesMain = {
			height: this.state.setHeight + ' !important'
		}
	}

	sideSelection = [
		'Colors', 'Theming', 'Typography', 'Badges', 'Buttons', 'Breadcrumbs', 'Cards', 'Collections', 'Floating', 'Action', 'Button', 'Footer', 'Icons', 'Navbar', 'Pagination', 'Preloadser', 'Collapsible', 'FeatureDiscovery', 'Media', 'Modals', 'Parallax', 'Pushpin', 'Scrollspy', 'Sidenav', 'Tabs', 'Toasts', 'Tooltips', 'Waves'
	]

	/*
	'Badges','Buttons','Breadcrumbs','Cards','Collections','Floating' 'Action' 'Button','Footer','Icons','Navbar','Pagination','Preloadser','Collapsible','FeatureDiscovery','Media','Modals','Parallax','Pushpin','Scrollspy','Sidenav','Tabs','Toasts','Tooltips','Waves'
	*/


	// getNavHeight = () => {
	// 	var topNav = document.getElementById( 'nav-Bar' );
	// 	return topNav.clientHeight;
	// }

	// componentDidMount() {
	// 	//this.setState( {navHeight:, windowHeight: window.innerHeight} );
	// 	this.setState( {setHeight: ( window.innerHeight - this.getNavHeight() ).toString() + 'px'} );
	// }
	render() {
		return (
			<main className="h-100">
				<style jsx>{`
						.comptheme-container{
							position: relative;
						}
						.theme-dev{
							position: relative !important;
							min-height: var(--vph) !important;
						}
						.side-nav{
							margin: 0;
							border-radius: 0;
						}
						.horizontal-line{
							color: var(--divider-color);
						}
					`}</style>
				<div className="theme-dev d-flex">
					<div className="card-panel p-0 side-nav w-25">

						<div className="collection pt-0 mt-0">
							<li className="collection-header"><h4 className="text-center mb-3">Element Index</h4></li>
							<a href="#!" className="collection-item">Alvin</a>
							<a href="#!" className="collection-item active">Alvin</a>
							<a href="#!" className="collection-item">Alvin</a>
							<a href="#!" className="collection-item">Alvin</a>
						</div>
						{/* <hr className="horizontal-line"></hr> */}
					</div>
					<div className="comptheme-main w-75">
						<h3 className="w-100 text-right pt-3 text-right pr-4">Component theming</h3>
					</div>
				</div>

			</main>


		)
	}
};

export default App( PageComponent );