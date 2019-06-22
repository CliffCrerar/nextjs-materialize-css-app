/* BOILER COMPONENT */
import {aboutData} from 'static/data';
//import ReactMarkdown from 'react-markdown';
import aboutPart1 from './about0.md';
import AboutPart2 from './about1';
import aboutPart3 from './about2.md';
import aboutPartNext from './about-nextjs.md';
import aboutReact from './about-react.md';
import aboutMaterialize from './about-materialize-css.md';
import aboutBootstrap from './about-bootstrap.md';
import aboutMarkdown from './about-markdown.md';
import {MnextMarkdown} from 'static/js/services';

const About = () => (

	<React.Fragment>
		<style>{`
			ul{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			li ul{
				display: block;
				flex-direction: row;
				align-items: center
			}
		`}</style>

		<MnextMarkdown source={aboutPart1} />

		<AboutPart2 />

		<MnextMarkdown source={aboutPart3} />

		<MnextMarkdown source={aboutPartNext} />

		<MnextMarkdown source={aboutReact} />

		<MnextMarkdown source={aboutMaterialize} />

		<div classNAme="clearfix">
			<img src="static/img/bootstrap.png" alt="bootstrap-image" className="float-right" />
			<p>
				<MnextMarkdown source={aboutBootstrap} />
			</p>
		</div>

		<MnextMarkdown source={aboutMarkdown} />

	</React.Fragment>
)

export default About;