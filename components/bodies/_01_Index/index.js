/**
 * Page component index
 * @summary Component index
 * @author Cliff Crerar
 * Created at     : 2019-05-30 22:34:29
 * Last modified  : 2019-05-30 22:58:32
 */

import Landing from './_Landing';

const HomePageIndex = ( {pageContent} ) => {
	const {landing} = pageContent;
	return (
		<React.Fragment>
			<Landing content={landing} />
		</React.Fragment>
	)
}

export default HomePageIndex;