/**
 * GLOBAL CSS
 * @author Cliff Crerar
 * Created at     : 2019-05-23 00:05:19
 * Last modified  : 2019-05-28 05:23:54
 */

//import 'static/fonts/Kodchasan/stylesheet.css'

function StyledMain() {
	return (
		<style global jsx>{`

		html{
			font-family: Montserrat !important;
			font-weight: normal;
		}
		html,body{
			min-height: var(--vph);
		}
		h1,h2,h3,h4,h5,h6{
			font-family: Kodchasan !important;
			font-weight: normal;
			margin: 0;
		}

		@mixin headingShadow{
			text-shadow: 10px -15px 20px rgba(0,0,0,0.4),8px -12px 15px rgba(0,0,0,0.6),5px -8px 10px rgba(0,0,0,0.8),2px -3px 0px black,1px -2px 0px black;
			font-weight: 600;
		}
		.container h1{
			font-size: 6.5rem;
			/*color:var(--mcsscolor);*/
		}

		.container h3{
			/*color:var(--mcsscolor);*/
		}
		`}</style>
	)
}

export default StyledMain;