/**
 * Dev page only
 *
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 23:05:13
 * Last modified  : 2019-06-05 00:21:16
 */
import {Component} from "react";
import App from "App";
import ColorBlocks from 'components/Boiler-Components/Features/ColorBlocks';
class PageComponent extends Component {

	constructor ( props ) {
		super( props );
		this.selectedTheme = this.props.currentTheme;
		this.styleVars = Object.entries( props.theme[ this.props.currentTheme ] );
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
					Color Themes
				</h1>
				<ContainerElement content={ColorBlocks( this.styleVars, this.themeName, this.props.currentTheme, this.props.theme )} />
			</main>
		);
	}
}


export default App( PageComponent );

/* --dark-primary:${this.state[ 'dark-primary-color' ]};              DARK PRIMARY      */
/* --default-primary:${this.state[ 'default-primary-color' ]};  LIGHT PRIMARY   */
/* --light-primary:${this.state[ 'light-primary-color' ]};        PRIMARY               */
/* --text-primary:${this.state[ 'text-primary-color' ]};                TEXT ICONS          */
/* --accent:${this.state[ 'accent-color' ]};                                        ACCENT                  */
/* --primary-text:${this.state[ 'primary-text-color' ]};                PRIMARY TEXT        */
/* --secondary-text:${this.state[ 'secondary-text-color' ]};      SECONDARY TEXT    */
/* --divider-color:${this.state[ 'divider-color' ]};                        DIVIDER                 */
