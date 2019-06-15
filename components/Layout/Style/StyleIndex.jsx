// import StyleTypography from "./z_StyleTypography";
//import StyleVariables from "./z_StyleVariables";
import StyleFonts from "./StyleFonts";
import StyleTheme from "./StyleTheme";
import StyleCustomHelpers from './StyleCustomHelpers';

function StyleGlobal( props ) {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme />
			{/*<StyleVariables />*/}
			{/*<StyleTypography />*/}
			<StyleCustomHelpers />
		</React.Fragment>
	);
}

export default StyleGlobal;
