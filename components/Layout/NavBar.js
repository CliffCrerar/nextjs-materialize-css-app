/**
 * Navbar
 * @summary Navigation main component export
 * @author Cliff Crerar
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-05-31 21:05:11
 */

import Link from "next/link";

const navHeight = () => {
	return document.getElementById( "nav-Bar" ).clientHeight;
};

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
		<div className="nav-wrapper pl-5">
			<img className="img-fluid mt-1" src="static/img/cc-logo-flat.png" />
			<a href="#" className="brand-logo ml-2">
				<span className="ml-1 mr-2 font-weight-bolder">
					{brand.mainText}
				</span>
				<span className="text-accent font-weight-bold">
					{brand.accentText}
				</span>
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down mr-5">
				{Links}
			</ul>
		</div>
	);
};
const styles = {
	navBar: {background: "var(--dark-primary)"}
};

function NavBar( props ) {
	//console.log( 'props: ', props );
	//console.log( "NAVBAR:", this );
	//const navHeight =
	//console.log("navHeight: ", navHeight);
	//console.log( 'props NAV: ', props );
	return (
		<React.Fragment>
			<div id="nav-spacer" />
			<nav
				id="nav-Bar"
				className="navBar fixed-top"
				style={styles.navBar}
			>
				<div className="navbar-links">
					<EnumLinks links={props.navLinks} brand={props.brand} />
				</div>
			</nav>
			{/* {props.setNavSpacer()} */}
		</React.Fragment>
	);
};

export default NavBar;
