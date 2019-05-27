/**
 * CSS FONT IMPORTS
 *
 * @summary Bundle all font imports into one place and make available globally
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-28 01:17:43
 * Last modified  : 2019-05-28 01:20:30
 */

const StyleFonts = () => (
	<style global jsx>{`
	@import 'static/fonts/Kodchasan/stylesheet.css';
	@import 'static/fonts/Montserrat/stylesheet.css';
	`}</style>
)

export default StyleFonts;