/**
 * Navbar
 *
 * @summary Navigation main component export
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-22 20:35:17
 */

import Link from 'next/link'


const navStyle = {
	margin: 5
}

const EnumLinks = ( props ) => {
	//console.log( props );
	// console.log( 'Link: ', Link );

	let Links = props.links.map( ( link, i ) => {
		//console.log( 'link,i: ', link, i );
		return (
			<Link key={`link-${i}`} href={link.href}>
				<a style={navStyle} title={link.title}>{link.caption}</a>
			</Link> );
	} );
	//console.log( 'Links: ', Links );
	return (
		<div>
			{Links}
		</div>
	)
}

const NavBar = ( props ) => {
	//console.log( 'props NAV: ', props );
	return (
		<nav>
			<div className="navbar-links">
				<EnumLinks links={props.navLinks} />
			</div>
		</nav>
	)
}

export default NavBar;