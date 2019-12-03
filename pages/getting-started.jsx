/**
 * License page
 * @summary MIT License
 * @author Cliff Crerar
 * Created at     : 2019-06-15 10:52:49
 * Last modified  : 2019-06-15 15:21:58
 */
import WithLayout from 'Layout';
import ReactMarkdown from 'react-markdown';
import readMe from 'Readme.md';
const PageComponent = ( ) => (
	<React.Fragment>
		<style jsx>{`
			p{
				font-size: 1.5em !important;
			}
		`}
		</style>
		<div>
			Another element
		</div>

		<div className="container mt-5">
			<ReactMarkdown source={readMe} />
		</div>
	</React.Fragment>
)

export default WithLayout( PageComponent )