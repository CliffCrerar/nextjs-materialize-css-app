/**
 * SET SELECTION
 *
 * @summary Component that defines floating button selection defined by data it receives
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-31 20:41:48
 * Last modified  : 2019-06-15 15:14:54
 */
import convertColor from 'color-convert';
import css from 'styled-jsx/css'

const FloatingButtonStyle = ( {name, color1, color2, spread} ) => {
	var linGrad = `linear-gradient(
		${spread[ 2 ].angle}deg,
		rgba(${color1},1) ${spread[ 0 ]}%,
		rgba(${color2},1) ${spread[ 1 ]}%);
		`;
	return (
		<style jsx="true">{`
			.${name} {
				background: ${linGrad};
			}
		`}</style>
	);
};

const FloatingButtonSelectStyle = ( {selectedTheme} ) => (
	<React.Fragment>
		<style jsx="true">{`
			.theme-btn.${selectedTheme} {
				border: 5px solid var(--primary-text);
				bax-shadow: 10px 10px 12px var(--primary-text);
			}
		`}</style>
	</React.Fragment>
);

const convertToProper = ( itm, delimiter ) => {
	//  console.log('itm: ', itm);
	//let $ = delimiter;
	//let Array = itm.split($);
	//console.log('Array: ', Array);
	//console.log('delimiter: ', delimiter);

	//console.log('properCase: ', properCase);
	return itm.toString(); //properCase;
};

function SetThemeSelection( {themeNames, themes, selectedTheme, updateThemeSelected} ) {
	function onThemeAnchorClick( ev ) {
		ev.persist();
		return updateThemeSelected( ev );
	}
	const anchorClassName = [ 'btn-floating', 'theme-btn', 'waves-effect', 'tooltipped' ];
	const toolTipPos = 'left';
	const spread = [ 45, 55, {angle: 135} ]; // determines how theme buttons display
	const SelectionOptions = themeNames.map( ( name, idx ) => {
		const themeName = convertToProper( name );
		const color1 = convertColor.hex.rgb( themes[ name ][ 'default-primary-color' ].replace( /#/, '' ) ).toString();
		const color2 = convertColor.hex.rgb( themes[ name ][ 'accent-color' ].replace( /#/, '' ) ).toString();
		return (
			<li key={'themeSelector-' + idx} className="">
				<FloatingButtonStyle
					key={'themeOpt ' + idx}
					name={name}
					color1={color1}
					color2={color2}
					spread={spread}
					themeName={selectedTheme}
				/>
				<a
					data-anchor={idx}
					data-position={toolTipPos}
					data-tooltip={themeName}
					className={[ name ].concat( anchorClassName ).join( ' ' )}
				/>
			</li>
		);
	} );
	return (
		<ul onClick={onThemeAnchorClick} style={{display: 'block'}}>
			<FloatingButtonSelectStyle selectedTheme={selectedTheme} />
			{SelectionOptions}
		</ul>
	);
}

export {SetThemeSelection};
