/**
 * Navbar
 *
 * @summary Navigation main component export
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-27 01:04:50
 */

import Link from 'next/link'
import {DataNavBar} from 'global/data'

const EnumLinks = ( props ) => {
	const {Brand, links} = DataNavBar;
	const Links = links.map( ( link, i ) => {
		return (
			<Link key={`link-${i}`} href={link.href} passHref>
				<li >
					<a title={link.title}>{link.caption}</a>
				</li>
			</Link>
		);
	} );
	return (
		<div className="nav-wrapper">
			<a href="#" className="brand-logo ml-5">{Brand}</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				{Links}
			</ul>
		</div>
	)
}

const styles = {
	navBar: {background: "var(--mcsscolor)"}
};

//console.log( process.NODE_ENV );

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