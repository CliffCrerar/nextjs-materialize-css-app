/**
 * THEME CONTROLLER
 * @summary This is the component that controls the theming for the app
 * @author Cliff Crerar
 * Created at     : 2019-05-28 05:29:56
 * Last modified  : 2019-05-28 07:55:50
 */
import {Component} from 'react';


class StyleTheme extends Component {
	constructor ( props ) {
		super( props )
		this.state = {
			[ 'dark-primary-color' ]: '#1976D2',
			[ 'default-primary-color' ]: '#2196F3',
			[ 'light-primary-color' ]: '#BBDEFB',
			[ 'text-primary-color' ]: '#FFFFFF',
			[ 'accent-color' ]: '#FF5252',
			[ 'primary-text-color' ]: '#212121',
			[ 'secondary-text-color' ]: '#212121',
			[ 'divider-color' ]: '#BDBDBD',
			darkNavText: false,
		}
	}

	nameList = Object.entries( this.props.schema ).map( e => e[ 0 ] );

	render() {
		console.log( 'nameList: ', this.nameList );
		return (
			<style jsx global>{`
			:root{
				--dark-primary:${this.state[ 'dark-primary-color' ]}; 			 /* DARK PRIMARY  	*/
				--default-primary:${this.state[ 'default-primary-color' ]};  /* LIGHT PRIMARY  	*/
				--light-primary:${this.state[ 'light-primary-color' ]}; 		 /* PRIMARY 				*/
				--text-primary:${this.state[ 'text-primary-color' ]}; 			 /* TEXT ICONS 			*/
				--accent:${this.state[ 'accent-color' ]}; 									 /* ACCENT 					*/
				--primary-text:${this.state[ 'primary-text-color' ]}; 			 /* PRIMARY TEXT 		*/
				--secondary-text:${this.state[ 'secondary-text-color' ]}; 	 /* SECONDARY TEXT 	*/
				--divider-color:${this.state[ 'divider-color' ]}; 					 /* DIVIDER 				*/
			}

			h1{
				color: var(--dark-primary);
			}

			h2{
				color: var(--secondary-text);
			}

			h3{
				color: var(--dark-primary);
			}

			h5,h6{
				color: var(--text-primary)
			}

			.nav-wrapper a {
			color: var(${this.state.darkNavText ? '--primary-text' : '--text-primary'});
			}
			`}</style>
		)
	}
}

//console.log(new StyleTheme());

export default StyleTheme;