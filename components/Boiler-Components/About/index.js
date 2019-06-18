/* BOILER COMPONENT */
import {aboutData} from 'static/data';
//import ReactMarkdown from 'react-markdown';
import aboutPart1 from './about0.md';
import AboutPart2 from './about1';
import aboutPart3 from './about2.md';
import {MnextMarkdown} from 'static/js/services';

const About = () => (
	<React.Fragment>

		<MnextMarkdown source={aboutPart1} />

		<AboutPart2 />

		<MnextMarkdown source={aboutPart3} />

	</React.Fragment>
)

export default About;