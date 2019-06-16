
import ReactMarkdown from 'react-markdown';
import markDownFile from './Typography.md';
const Typography = () => (
	<React.Fragment>
		<section className="mnext-section">
			<ReactMarkdown input={markDownFile} />
		</section>
	</React.Fragment>
)
export default Typography;