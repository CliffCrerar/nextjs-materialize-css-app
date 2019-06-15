/**
 * About this project
 * @summary A page about this project what it is how it was created and what is expected
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-30 22:08:41
 * Last modified  : 2019-06-05 00:22:03
 */
import WithLayout from 'Layout'
import {aboutData} from 'static/data';
const PageComponent = props => (
	<main className="container" > { /* <div>{JSON.stringify( Router )}</div> */}
		<h1 className="w-100 text-center text-default-primary mt-5 mb-3 headingShadow">{aboutData.title} </h1>
		<hr />
		<h5 className="mt-2 mb-3 text-left mt-2">{aboutData.par1}</h5>
		<div>{( () => {
			const classes = [ 'text-default-primary', 'text-dark-primary', 'text-accent', 'text-light-primary' ]
			return (
				<ul className="d-flex flex-row flex-wrap justify-content-around">
					{
						aboutData.list.map( ( li, i ) => <li key={'abt-li-' + i}><h3 className={classes[ i ]}>{li}</h3></li> )
					}
				</ul> )
		} )()}</div>
		<p className="text-justify mb-2 mt-3">{aboutData.par2}</p>
		<p className="text-justify mb-2 mt-3">{aboutData.par3}</p>
		<p className="text-justify mb-2 mt-3">{aboutData.par4}</p>
		<p className="text-justify mb-2 mt-3">{aboutData.par5}</p>
	</main>
)
export default WithLayout( PageComponent );