import StyleMain from './StyleMain';
import StyleVariables from './StyleVariables';
import StyleFonts from './StyleFonts';

function StyleGlobal() {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleVariables />
			<StyleMain />
		</React.Fragment>
	)
}

export default StyleGlobal;