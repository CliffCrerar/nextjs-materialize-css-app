/**
 * Navbar
 *
 * @summary Navigation main component export
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-31 02:29:52
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
			<div className="ml-5 d-flex flex-row">
				<style jsx>{`
					img{
						height: 40px !important;
						
					}
				`}</style>
				<div>
					{/* <img className="img-fluid" src="static/img/cc-logo-2.png" /> */}
				</div>
				<div>
					<a href="#" className="brand-logo">{brand}</a>
				</div>
			</div>
			<ul id="nav-mobile" className="right hide-on-med-and-down mr-5">
				{Links}
			</ul>
		</div>
	)
}
const styles = {
	navBar: {background: "var(--dark-primary)"}
};
const NavBar = ( props ) => {
	//console.log( 'props NAV: ', props );
	return (
		<React.Fragment>

			<nav id="nav-Bar" className="navBar" style={styles.navBar}>
				<div className="navbar-links">
					<EnumLinks links={props.navLinks} brand={props.brand} />
				</div>
			</nav>
		</React.Fragment>
	)
}

export default NavBar;