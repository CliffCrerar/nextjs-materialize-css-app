/**
 * Navbar
 * @summary Navigation main component export
 * @author Cliff Crerar
 * Created at     : 2019-05-22 01:18:10
 * Last modified  : 2019-06-15 15:16:01
 */

import Link from "next/link";
import {brand, links} from 'static/data';

// Navbar
const BavBarBrand = ( props ) => (
	// {console.log( props )}
	< div className="nav-wrapper pl-5" >
		<img className="img-fluid mt-1" src="static/img/cc-logo-flat.png" />
		<a href="#" className="brand-logo ml-2">
			<span className="ml-1 mr-2 font-weight-bolder">
				{brand.brand.mainText}
			</span>
			<span className="text-accent font-weight-bold">
				{brand.brand.accentText}
			</span>
		</a>
		<ul id="nav-mobile" className="right hide-on-med-and-down mr-5">
			{props.children}
		</ul>
	</div >
);
// Link template
const NavLink = ( {link} ) => (
	<li>
		<Link href={link.href} as={link.as}>
			<a title={link.title}>{link.caption}</a>
		</Link>
	</li> )

// main
function NavBar( props ) {
	const styles = {
		navBar: {background: "var(--dark-primary)"}
	};
	return (
		<React.Fragment>
			<div id="nav-spacer" />
			<nav
				id="nav-Bar"
				className="navBar fixed-top"
				style={styles.navBar}>
				<div className="navbar-links">
					<BavBarBrand brand={brand}>
						<NavLink link={props.links[0]} />


						<NavLink link={props.links[1]} />
						<NavLink link={props.links[2]} />
						<NavLink link={props.links[3]} />
						<NavLink link={props.links[4]} />
					</BavBarBrand>
				</div>
			</nav>
		</React.Fragment> );
};

NavBar.defaultProps = {
	brand: brand,
	links: links
}

export default NavBar;
