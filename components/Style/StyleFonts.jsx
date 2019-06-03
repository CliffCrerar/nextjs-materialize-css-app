/**
 * CSS FONT IMPORTS and FONT ICONS
 *
 * @summary Bundle all font imports into one place and make available globally
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:17:43
 * Last modified  : 2019-05-28 01:35:44
 */

const StyleFonts = () => (
	<style global jsx>{`
		@import 'static/fonts/Kodchasan/stylesheet.css';
		@import 'static/fonts/Montserrat/stylesheet.css';
		@import 'static/lib/material-icons/material-icons.css';
	`}</style>
);

export default StyleFonts;
