/**
 * CSS FONT IMPORTS and FONT ICONS
 *
 * @summary Bundle all font imports into one place and make available globally
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:17:43
 * Last modified  : 2019-06-04 22:48:00
 */

import css from 'styled-jsx/css';

const fonts = css`
	@import 'static/fonts/Kodchasan/stylesheet.css';
	@import 'static/fonts/Roboto/stylesheet.css';
	@import 'static/fonts/Lobster/stylesheet.css';
	@import 'static/fonts/Montserrat/stylesheet.css';
	@import 'static/fonts/Fira-Mono/stylesheet.css';
	@import 'static/lib/material-icons/material-icons.css';
	@import url('https://fonts.googleapis.com/css?family=Jura&display=swap');
`

const StyleFonts = () => {
	var
		headingsFont = 'Kodchasan',
		contentFont = 'Montserrat',
		codeFont = 'Fira-Mono'

	//static/fonts/Kodchasan

	return (
		<React.Fragment>
			<style jsx global>{`
				@import url('static/fonts/Kodchasan/stylesheet.css');
				@import url('static/fonts/Roboto/stylesheet.css');
				@import url('static/fonts/Lobster/stylesheet.css');
				@import url('static/fonts/Montserrat/stylesheet.css');
				@import url('static/fonts/Fira-Mono/stylesheet.css');
				@import url('static/lib/material-icons/material-icons.css');
				@import url('https://fonts.googleapis.com/css?family=Jura&display=swap');

				html{
					font-family: ${contentFont} !important;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-family: ${headingsFont} !important;
				}

				code{
					font-family: ${codeFont} !important;
				}

				p, a, div 
				
			`}</style>
		</React.Fragment>
	)
};

export default StyleFonts;
