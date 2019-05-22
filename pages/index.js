/**
 * APP INDEX
 *
 * @summary This is the application index file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-23 00:46:18
 */

import App from 'App';
// @ts-ignore
import {PageHead} from 'components';
const Page = () =>
	(
		<div>
			<PageHead PageTitle="Landing" />
			<h1>Index</h1>
		</div>
	)

export default App( Page );