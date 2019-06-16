import StyleFonts from "./StyleFonts";
import StyleTheme from "./StyleTheme";

import 'static/lib/scss/materialize-color-palette.scss';
import 'static/lib/scss/mnext-helper-classes.scss';
import 'static/lib/scss/mnext-style-addition.scss';
import 'static/lib/scss/mnext-typography.scss';
import 'static/lib/scss/mnext-variables.scss';
import 'static/lib/scss/mnext-theme-mutator.scss';

function StyleGlobal( props ) {
	console.log( 'props: ', props );
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme themeFromCookies={props.themeFromCookies} />
		</React.Fragment>
	);
}

export default StyleGlobal;
