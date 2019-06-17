/**
 * TEST PAGE
 *
 * @summary This is a testing page used during development, used for experimenting
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-17 21:28:17
 * Last modified  : 2019-06-17 22:08:30
 */
import WithLayout from 'Layout'
import ReactMarkdown from 'react-markdown/with-html';
import css from 'styled-jsx/css';
import configMD from '../config/README.md';

const content = `
# THIS IS MARKDOWN

testtext {: testclass}

<div>Test HTML</div>
`

const style = css`
	.test-page-container{
		height: var(--vph);
	}
	.testclass{
		color: red;
	}
`

const MdTest = () => {
	return (
		<React.Fragment>
			<style jsx>{style}</style>
			<div className="container test-page-container">
				{/*<ReactMarkdown source={content} escapeHtml={false} />*/}
				<ReactMarkdown className="mt-5" source={configMD} escapeHtml={false} />
				configMD
			</div>
		</React.Fragment>
	)
}

export default WithLayout( MdTest );