/**
 * THEME CONTROLLER
 * @summary This is the component that controls the theming for the app
 * @author Cliff Crerar
 * Created at     : 2019-05-28 05:29:56
 * Last modified  : 2019-05-28 05:37:56
 */
import {Component} from 'react';
import themeSchema from 'static/lib/theme/themes.json';
console.log( 'themeSchema: ', themeSchema );

class StyleTheme extends Component {
	constructor () {
		super( props )

	}

	render() {
		return (
			<style jsx global>{`
			`}</style>
		)
	}
}