/**
 * SET SELECTION
 *
 * @summary Component that defines floating button selection defined by data it receives
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-31 20:41:48
 * Last modified  : 2019-06-01 04:12:59
 */
import convertColor from 'color-convert';

const FloatingButtonStyle = ({ name, color1, color2, spread }) => {
	var linGrad = `linear-gradient(
		${spread[2].angle}deg, 
		rgba(${color1},1) ${spread[0]}%, 
		rgba(${color2},1) ${spread[1]}%);
		`;
	console.log('linGrad: ', linGrad);
	return (
		<style jsx="true">{`
			.${name} {
				background: ${linGrad};
			}
		`}</style>
	);
};

const FloatingButtonSelectStyle = ({ selectedTheme }) => (
	<style jsx="true">{`
		.theme-btn.${selectedTheme} {
			border: 5px solid red;
		}
	`}</style>
);

function SetThemeSelection({ themeNames, themes, selectedTheme }) {
	console.log('themes: ', themes);
	console.log('themeNames: ', themeNames);
	//var selectedTheme = themeNames[0];
	//var useState = require('react');

	function onThemeAnchorClick(ev) {
		//setName(themeName[0]);
		//ev.persist();

		console.log(ev.target.dataset);
		console.log(ev.target.title);
		selectedTheme = ev.target.title;
	}
	const spread = [45, 55, { angle: 135 }]; // determines how theme buttons display
	const SelectionOptions = themeNames.map((name, idx) => {
		const color1 = convertColor.hex.rgb(themes[name]['default-primary-color'].replace(/#/, '')).toString();
		const color2 = convertColor.hex.rgb(themes[name]['accent-color'].replace(/#/, '')).toString();

		console.log('name: ', name);
		console.log('color2: ', color2);
		console.log('color1: ', color1);

		return (
			<li key={'themeSelector-' + idx}>
				<FloatingButtonStyle
					key={'themeOpt ' + idx}
					name={name}
					color1={color1}
					color2={color2}
					spread={spread}
					themeName={selectedTheme}
				/>
				<a data-anchor={idx} title={name} className={['btn-floating', 'theme-btn', name].join(' ')} />
			</li>
		);
	});
	return (
		<ul onClick={onThemeAnchorClick}>
			<FloatingButtonSelectStyle selectedTheme={selectedTheme} />
			{SelectionOptions}
		</ul>
	);
}

export { SetThemeSelection };
