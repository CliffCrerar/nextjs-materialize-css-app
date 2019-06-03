/**
 * Dev page only
 *
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 23:05:13
 * Last modified  : 2019-05-31 01:00:52
 */
import { Component } from 'react';
import App from 'App';
class PageComponent extends Component {
	constructor(props) {
		super(props);
		this.selectedTheme = 'blue-deeporange';
		this.styleVars = Object.entries(props.theme[this.selectedTheme]);
	}

	componentDidMount() {
		console.log('Colors mounted');
	}
	colorBlocks = arr => {
		const colorBlocks = arr.map((sVar, i) => {
			console.log('sVar: ', sVar);
			const thisStyleVar = sVar[0].replace(/-color/, '');
			const textMutate = ['default-primary', 'dark-primary', 'primary-text', 'secondary-text'];
			const classesColorDesc = textMutate.includes(thisStyleVar) ? 'text-light' : '';
			const classesColorCode = [classesColorDesc, 'font-weight-bolder'].join(' ');
			return (
				<div
					key={'cb-' + i}
					className="color-grid-itm d-flex flex-column p-2"
					style={{ background: `var(--${thisStyleVar})` }}
				>
					<div className={classesColorDesc}>{thisStyleVar}</div>
					<div className={classesColorCode}>{sVar[1]}</div>
				</div>
			);
		});
		return (
			<React.Fragment>
				<style jsx>{`
					.color-grid {
						display: grid;
						grid-template-rows: repeat(2, 150px);
						grid-template-columns: repeat(4, 250px);
					}
				`}</style>
				<div className="color-grid">{colorBlocks}</div>
			</React.Fragment>
		);
	};

	render() {
		const ContainerElement = props => <div>{props.content}</div>;
		return (
			<main>
				<h1 className="text-default-primary">Colors</h1>
				<h3 className="text-accent">{this.selectedTheme}</h3>
				<ContainerElement content={this.colorBlocks(this.styleVars)} />
			</main>
		);
	}
}

export default App(PageComponent);

/* --dark-primary:${this.state[ 'dark-primary-color' ]}; 			  DARK PRIMARY  	*/
/* --default-primary:${this.state[ 'default-primary-color' ]};  LIGHT PRIMARY  	*/
/* --light-primary:${this.state[ 'light-primary-color' ]}; 		  PRIMARY 				*/
/* --text-primary:${this.state[ 'text-primary-color' ]}; 				TEXT ICONS 			*/
/* --accent:${this.state[ 'accent-color' ]}; 									 	ACCENT 					*/
/* --primary-text:${this.state[ 'primary-text-color' ]}; 			 	PRIMARY TEXT 		*/
/* --secondary-text:${this.state[ 'secondary-text-color' ]}; 	  SECONDARY TEXT 	*/
/* --divider-color:${this.state[ 'divider-color' ]}; 					 	DIVIDER 				*/
