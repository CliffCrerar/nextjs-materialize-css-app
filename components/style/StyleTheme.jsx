/**
 * THEME CONTROLLER
 * @summary This is the component that controls the theming for the app
 * @author Cliff Crerar
 * Created at     : 2019-05-28 05:29:56
 * Last modified  : 2019-05-28 06:00:40
 */
import {Component} from 'react';
import themeSchema from 'static/lib/theme/themes.json';
console.log( 'themeSchema: ', themeSchema );

class StyleTheme extends Component {
	constructor () {
		super( props )
		this.state = {
			[ 'dark-primary-color' ]: '#1976D2',
			[ 'default-primary-color' ]: '#2196F3',
			[ 'light-primary-color' ]: '#BBDEFB',
			[ 'text-primary-color' ]: '#FFFFFF',
			[ 'accent-color' ]: '#FF5252',
			[ 'primary-text-color' ]: '#212121',
			[ 'secondary-text-color' ]: '#212121',
			[ 'divider-color' ]: '#BDBDBD'
		}
	}

	render() {
		return (
			<style jsx global>{`
			:root{
				--dark-primary:${this.state[ 'dark-primary-color' ]};
				--default-primary:${this.state[ 'default-primary-color' ]};
				--light-primary:${this.state[ 'light-primary-color' ]};
				--text-primary:${this.state[ 'text-primary-color' ]};
				--accent:${this.state[ 'accent-primary' ]};
				--primary-text:${this.state[ 'primary-text-color' ]};
				--secondary-text:${this.state[ 'secondary-text-color' ]};
				--divider-color:${this.state[ 'divider-color' ]};
			}
			`}</style>
		)
	}
}

export default StyleTheme;