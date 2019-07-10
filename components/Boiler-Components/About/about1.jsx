import react from '../../../_stash/react';

/**
 * About part 2
 * 
 * Created at     : 2019-06-18 03:17:09 
 * Last modified  : 2019-06-18 03:34:02
 */


export default props => (
	<React.Fragment>
		{( () => {
			const
				classes = [
					'text-default-primary',
					'text-dark-primary',
					'text-accent',
					'text-light-primary'
				],
				list = ['Rapid', 'Modern', 'Simplistic', 'Creative']
			return (
				<ul className="d-flex flex-row flex-wrap justify-content-around">
					{list.map( ( li, i ) => <li key={'abt-li-' + i}><h3 className={classes[i]}>{li}</h3></li> )}
				</ul> )
		} )()}
	</React.Fragment>
)

