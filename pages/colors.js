/**
 * Dev page only
 *
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 23:05:13
 * Last modified  : 2019-05-31 01:00:52
 */
import {Component} from 'react'
import App from 'App'
class PageComponent extends Component {

	constructor () {
		super()
		this.styleVars = [ '--dark-primary', '--default-primary', '--light-primary', '--text-primary', '--accent', '--primary-text', '--secondary-text', '--divider-color' ]
	}

	componentDidMount() {
		console.log( 'Colors mounted' )
		const gridElements = document.getElementsByClassName( 'color-grid-itm' );
		for ( let i = 0; i < gridElements.length; i++ ) {
			console.log( gridElements[ 0 ] );
			const thisElStyle = window.getComputedStyle( gridElements[ i ] );
			console.log( 'thisElStyle: ', thisElStyle );
		}


		console.log();
	}
	colorBlocks = ( arr ) => {
		const colorBlocks =
			arr.map( ( sVar, i ) => (
				<div
					key={'cb-' + i}
					className="color-grid-itm"
					style={{background: `var(${sVar})`}}>test</div>
			) );
		return (
			<React.Fragment>
				<style jsx>{`
					.color-grid{
						display: grid;
						grid-template-rows: repeat( 2, 150px );
						grid-template-columns: repeat( 4, 150px );
					}
			`}</style>
				<div className="color-grid">
					{colorBlocks}
				</div>
			</React.Fragment>
		)
	}

	render() {
		const ContainerElement = ( props ) => <div>{props.content}</div>
		return (
			<main>
				<h1>Colors</h1>
				<ContainerElement content={this.colorBlocks( this.styleVars )} />
			</main>
		)
	}
}

export default App( PageComponent );

/* --dark-primary:${this.state[ 'dark-primary-color' ]}; 			  DARK PRIMARY  	*/
/* --default-primary:${this.state[ 'default-primary-color' ]};  LIGHT PRIMARY  	*/
/* --light-primary:${this.state[ 'light-primary-color' ]}; 		  PRIMARY 				*/
/* --text-primary:${this.state[ 'text-primary-color' ]}; 				TEXT ICONS 			*/
/* --accent:${this.state[ 'accent-color' ]}; 									 	ACCENT 					*/
/* --primary-text:${this.state[ 'primary-text-color' ]}; 			 	PRIMARY TEXT 		*/
/* --secondary-text:${this.state[ 'secondary-text-color' ]}; 	  SECONDARY TEXT 	*/
/* --divider-color:${this.state[ 'divider-color' ]}; 					 	DIVIDER 				*/