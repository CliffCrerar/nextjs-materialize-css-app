/**
 * TEST PAGE
 *
 * @summary This is a testing page used during development, used for experimenting
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-17 21:28:17
 * Last modified  : 2019-06-18 02:37:30
 */
import WithLayout from 'Layout'
import css from 'styled-jsx/css';
import {MnextMarkdown} from 'static/js/services'
import thisReadme from 'config/README.md';

const style = css`
	.test-page-container{
		height: var(--vph);
	}
	.testClass{
		color: red;
	}
`

const MdTest = () => {
	return (
		<React.Fragment>
			<style jsx>{style}</style>
			<div className="container test-page-container mt-5">
				<MnextMarkdown source={thisReadme} />
			</div>
		</React.Fragment>
	)
}

export default WithLayout( MdTest );