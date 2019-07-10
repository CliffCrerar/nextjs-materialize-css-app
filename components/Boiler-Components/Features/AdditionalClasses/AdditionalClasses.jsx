

import ReactMarkdown from 'react-markdown';
import AdditionalClassesFile from './AdditionalClasses.md';
const AdditionalClasses = () => (
	<React.Fragment>
		<section className="mnext-section">
			<ReactMarkdown source={AdditionalClassesFile} escapeHtml={false} />
		</section>
	</React.Fragment>
)
export default AdditionalClasses;