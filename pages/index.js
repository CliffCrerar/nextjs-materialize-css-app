/**
 * APP INDEX
 * @summary This is the application index file
 * @author Cliff Crerar
 * Created at     : 2019-05-22 00:41:34
 * Last modified  : 2019-06-05 00:32:44
 */
import App from "App";
//import HomePageIndex from "components/bodies/_01_Index";
import {HelloWorldComponent} from "components/Boiler-Components";

const pageContent = {
	landing: {
		title: "Interactive Resume"
	}
};

const PageComponent = () => {
	console.log( "Index" );
	return (

		<main className="position-relative">
			<style jsx>{`
			
			main{
				min-height: var(--vph)
			}
				.custom-position-1{
					position: absolute;
					top: 40%;
					transform: translateY(-50%);
				}
			`}</style>
			<div className="custom-position-1">
				<HelloWorldComponent />
				{/* <HomePageIndex pageContent={pageContent} /> */}
			</div>
		</main>

	);
};

export default App( PageComponent );
