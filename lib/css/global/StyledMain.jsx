/**
 * GLOBAL CSS
 * @author Cliff Crerar
 * Created at     : 2019-05-23 00:05:19
 * Last modified  : 2019-05-23 00:59:38
 */

function StyledMain() {
	return (
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
		`}</style>
	)
}

export default StyledMain;