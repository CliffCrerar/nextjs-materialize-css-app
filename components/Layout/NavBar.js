/**
 * Navbar
 *
 * @summary Navigation main component export
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-28 01:01:34
 */

import Link from 'next/link'

const EnumLinks = ( {brand, links} ) => {

	const Links = links.map( ( link, i ) => {
		return (
			<li key={`link-${i}`}>
				<Link href={link.href} passHref>
					<a title={link.title}>{link.caption}</a>
				</Link>
			</li>
		);
	} );

	return (
		<div className="nav-wrapper">
			<a href="#" className="brand-logo ml-5">{brand}</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				{Links}
			</ul>
		</div>
	)
}
console.log( 'EnumLinks: ', EnumLinks );
const styles = {
	navBar: {background: "var(--mcsscolor)"}
};
const NavBar = ( props ) => {
	//console.log( 'props NAV: ', props );
	return (
		<nav className="navBar" style={styles.navBar}>
			<div className="navbar-links">
				<EnumLinks links={props.navLinks} brand={props.brand} />
			</div>
		</nav>
	)
}

export default NavBar;