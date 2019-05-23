/**
 * GLOBAL CSS
 * @author Cliff Crerar
 * Created at     : 2019-05-23 00:05:19
 * Last modified  : 2019-05-23 00:59:38
 */

function StyledMain() {

	return (
		<div>
			<Fonts />
			<style global jsx>{`
		
			:root{
				box-sizing: content-box;
			}
			html,
			body{
				margin: 0;
				padding: 0;	
				min-width: 100vw;
				height: auto;
			}
			html *{
				font-family: Lobster !important;
			}
		`}</style>
		</div>

	)
}

function Fonts() {
	return (
		<style global jsx>
			{`
			
			@font-face {
				font-family: 'Lobster';
				src: url('static/fonts/Lobster/Lobster-Regular.eot');
				src: url('static/fonts/Lobster/Lobster-Regular.eot?#iefix') format('embedded-opentype'),
						url('static/fonts/Lobster/Lobster-Regular.woff2') format('woff2'),
						url('static/fonts/Lobster/Lobster-Regular.woff') format('woff'),
						url('static/fonts/Lobster/Lobster-Regular.ttf') format('truetype');
						/*url('./Lobster-Regular.svg#./Lobster-Regular') format('svg');*/
				font-weight: normal;
				font-style: normal;
		}
		
			`}
		</style>
	)
};

export default StyledMain;