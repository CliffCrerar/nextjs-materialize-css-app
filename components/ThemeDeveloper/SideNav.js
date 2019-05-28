/**
 * SIDENAV
 * @summary Page side navigation
 * @author Cliff Crerar
 * Created at     : 2019-05-28 03:18:22
 * Last modified  : 2019-05-28 05:00:04
 */
import {Component} from 'react'
//import css from '@zeit/next-sass'

const Styles = () => (
	<style jsx>{`
			.theme-developer-side-nav{

			}
		`}</style>
)


class SideNav extends Component {
	constructor ( props ) {
		super( props )
	}



	render() {
		return (
			<React.Fragment>
				<Styles navHeight="" />
				<div className="theme-developer-side-nav bg-dark w-25">
					sidenav
				</div>

			</React.Fragment>
		)
	}
}

export default SideNav;