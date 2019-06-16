/**
 * Dev page only
 *
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 23:05:13
 * Last modified  : 2019-06-15 15:22:08
 */
import {Component} from "react";
import WithLayout from 'Layout'
import ColorBlocks from 'components/Boiler-Components/Features/ColorBlocks';
import {theme, themeNames} from 'static/lib/theme'
import cookieservice from '../static/js/services/cookies-service';
class PageComponent extends Component {
	constructor ( props ) {
		super( props );
		this.selectedTheme = cookieservice.getTheme() || 'blue-deeporange';
		this.styleVars = Object.entries( theme[ this.selectedTheme ] );
	}

	componentDidMount() {
		console.log( "Colors mounted" );
	}

	themeName( name ) {
		// console.log( "name: ", name );
		const splitName = name.split( /-/ );
		return (
			<span>
				<span className="text-default-primary">{splitName[ 0 ]}</span>
				<span className="text-primary">-</span>
				<span className="text-accent">{splitName[ 1 ]}</span>
			</span>
		);
	}
	/* COLOR BLOCKS */

	/* COLOR BLOCKS */
	render() {
		const ContainerElement = props => <div>{props.content}</div>;
		return (
			<main className="container">
				<h1 className="text-default-primary text-center mt-5 mb-3 headingShadow">
					Features
				</h1>
				<ContainerElement content={ColorBlocks( this.styleVars, this.themeName, this.props.currentTheme, this.props.theme )} />
			</main>
		);
	}
}
PageComponent.defaultProps = {
	theme: theme,
	themeNames: themeNames,
	currentTheme: cookieservice.getTheme() || 'blue-deeporange'
}
export default WithLayout( PageComponent );

/* --dark-primary:${this.state[ 'dark-primary-color' ]};              DARK PRIMARY      */
/* --default-primary:${this.state[ 'default-primary-color' ]};  LIGHT PRIMARY   */
/* --light-primary:${this.state[ 'light-primary-color' ]};        PRIMARY               */
/* --text-primary:${this.state[ 'text-primary-color' ]};                TEXT ICONS          */
/* --accent:${this.state[ 'accent-color' ]};                                        ACCENT                  */
/* --primary-text:${this.state[ 'primary-text-color' ]};                PRIMARY TEXT        */
/* --secondary-text:${this.state[ 'secondary-text-color' ]};      SECONDARY TEXT    */
/* --divider-color:${this.state[ 'divider-color' ]};                        DIVIDER                 */
