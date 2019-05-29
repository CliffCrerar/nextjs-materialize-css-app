import StyleMain from './StyleMain';
import StyleVariables from './StyleVariables';
import StyleFonts from './StyleFonts';
import StyleTheme from './StyleTheme';

function StyleGlobal( props ) {
	return (
		<React.Fragment>
			<StyleFonts />
			<StyleTheme schema={props.theme} />
			<StyleVariables />
			<StyleMain />
		</React.Fragment>
	)
}

export default StyleGlobal;