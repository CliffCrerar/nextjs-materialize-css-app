
/**
 * Tag Style
 * @author Cliff Crerar
 * Created at     : 2019-05-23 00:58:34
 * Last modified  : 2019-05-26 21:29:40
 */

function Links() {
	//console.log( process.env );
	return (
		<React.Fragment>
			<link key="favicon" rel="icon" href="static/favicon/favicon.ico" type="image/ico" />
			<link key="shortcut" rel="shortcut icon" href="static/favicon/favicon.ico" type="image/x-icon" />
			<link key="mat-icon" rel="stylesheet" href="static/lib/material-icons/material-icons.css" />
			<link key="vars-001" rel="stylesheet" href="static/css/stylevariables.css" />
			<link key="link4" rel="stylesheet" href="static/css/cssradutils.css" />
			<link key="link1" rel="stylesheet" href="static/lib/materialize-css/css/materialize.css" />
			<link key="link2" rel="stylesheet" href="static/fonts/Montserrat/stylesheet.css" />
			<link key="link3" rel="stylesheet" href="static/fonts/Kodchasan/stylesheet.css" />
		</React.Fragment>
	);
}
export default Links;