/**
 * CSS FONT IMPORTS and FONT ICONS
 *
 * @summary Bundle all font imports into one place and make available globally
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:17:43
 * Last modified  : 2019-06-04 22:48:00
 */

const StyleFonts = () => (
	<React.Fragment>
		<style jsx global>{`
		@import 'static/fonts/Kodchasan/stylesheet.css';
		@import 'static/fonts/Montserrat/stylesheet.css';
		@import 'static/lib/material-icons/material-icons.css';
		@import url('https://fonts.googleapis.com/css?family=Jura&display=swap');
	`}</style>
	</React.Fragment>
);

export default StyleFonts;
