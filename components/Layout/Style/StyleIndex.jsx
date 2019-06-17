import StyleFonts from "./StyleFonts";
import StyleTheme from "./StyleTheme";

import 'static/style/lib/materialize-color-palette.scss';
import 'static/style/lib/mnext-helper-classes.scss';
import 'static/style/lib/mnext-style-addition.scss';
import 'static/style/lib/mnext-typography.scss';
import 'static/style/lib/mnext-variables.scss';
import 'static/style/lib/mnext-theme-mutator.scss';

function StyleGlobal( props ) {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme />
		</React.Fragment>
	);
}

export default StyleGlobal;
