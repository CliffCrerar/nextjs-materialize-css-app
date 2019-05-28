/**
 * THEME CONTROLLER
 * @summary This is the component that controls the theming for the app
 * @author Cliff Crerar
 * Created at     : 2019-05-28 05:29:56
 * Last modified  : 2019-05-28 07:55:50
 */
import { Component } from 'react';


class StyleTheme extends Component {
	constructor (props) {
		super(props)
		this.state = {
			['dark-primary-color']: '#1976D2',
			['default-primary-color']: '#2196F3',
			['light-primary-color']: '#BBDEFB',
			['text-primary-color']: '#FFFFFF',
			['accent-color']: '#FF5252',
			['primary-text-color']: '#212121',
			['secondary-text-color']: '#212121',
			['divider-color']: '#BDBDBD'
		}
	}

	nameList = Object.entries(this.props.schema).map(e => e[0]);

	render() {
		console.log('nameList: ', this.nameList);
		return (
			<style jsx global>{`
			:root{
				--dark-primary:${this.state['dark-primary-color']};
				--default-primary:${this.state['default-primary-color']};
				--light-primary:${this.state['light-primary-color']};
				--text-primary:${this.state['text-primary-color']};
				--accent:${this.state['accent-primary']};
				--primary-text:${this.state['primary-text-color']};
				--secondary-text:${this.state['secondary-text-color']};
				--divider-color:${this.state['divider-color']};
			}
			`}</style>
		)
	}
}

//console.log(new StyleTheme());

export default StyleTheme;