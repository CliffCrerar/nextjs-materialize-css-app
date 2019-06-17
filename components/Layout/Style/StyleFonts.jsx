/**
 * CSS FONT IMPORTS and FONT ICONS
 *
 * @summary Bundle all font imports into one place and make available globally
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:17:43
 * Last modified  : 2019-06-04 22:48:00
 */

const StyleFonts = () => {
	var
		headingsFont = 'Kodchasan',
		contentFont = 'Montserrat';

	return (
		<React.Fragment>
			<style jsx global>{`
				@import 'static/fonts/Kodchasan/stylesheet.css';
				@import 'static/fonts/Roboto/stylesheet.css';
				@import 'static/fonts/Lobster/stylesheet.css';
				@import 'static/fonts/Montserrat/stylesheet.css';
				@import 'static/lib/material-icons/material-icons.css';
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
				
			`}</style>
		</React.Fragment>
	)
};

export default StyleFonts;
