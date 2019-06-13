import StyleMain from "./StyleMain";
import StyleVariables from "./StyleVariables";
import StyleFonts from "./StyleFonts";
import StyleTheme from "./StyleTheme";
import StyleCustomHelpers from './StyleCustomHelpers';

function StyleGlobal( props ) {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme />
			<StyleVariables />
			<StyleMain />
			<StyleCustomHelpers />
		</React.Fragment>
	);
}

export default StyleGlobal;
