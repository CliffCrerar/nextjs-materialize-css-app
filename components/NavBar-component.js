/**
 * Navbar
 *
 * @summary Navigation main component export
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-25 05:00:36
 */

import Link from 'next/link'
import {DataNavBar} from 'global/data'
import css from 'styled-jsx/css'
//console.log( 'DataNavBar: ', DataNavBar );

//console.log( 'data: ', data );

const EnumLinks = ( props ) => {
	//console.log( props );
	// console.log( 'Link: ', Link );

	let Links = props.links.map( ( link, i ) => {
		//console.log( 'link,i: ', link, i );
		return (

			<Link key={`link-${i}`} href={link.href}>
				<li >
					<a title={link.title}>{link.caption}</a>
				</li>
			</Link>
		);
	} );
	//console.log( 'Links: ', Links );
	return (
		<div className="nav-wrapper">
			<a href="#" className="brand-logo ml-5">{DataNavBar.Brand}</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				{Links}
			</ul>
		</div>
	)
}

const styles = {
	navBar: {background: "var(--mcsscolor)"}
};



const NavBar = ( props ) => {
	//console.log( 'props NAV: ', props );
	return (
		<nav className="navBar" style={styles.navBar}>
			<div className="navbar-links">
				<EnumLinks links={props.navLinks} />
			</div>
		</nav>
	)
}

export default NavBar;