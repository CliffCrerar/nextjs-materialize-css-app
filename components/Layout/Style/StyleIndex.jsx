import StyleFonts from "./StyleFonts";
import StyleTheme from "./StyleTheme";

import 'static/lib/scss/materialize-color-pallete.scss';
import 'static/lib/scss/mnext-helper-classes.scss';
import 'static/lib/scss/mnext-style-addition.scss';
import 'static/lib/scss/mnext-typography.scss';
import 'static/lib/scss/mnext-variables.scss';

function StyleGlobal( props ) {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme />
		</React.Fragment>
	);
}

export default StyleGlobal;
