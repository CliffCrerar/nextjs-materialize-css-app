/**
 * APP INDEX
 * @summary This is the application index file
 * @author Cliff Crerar
 * Created at     : 2019-05-22 00:41:34
 * Last modified  : 2019-06-05 00:32:44
 */
import WithLayout from 'Layout'
//import HomePageIndex from "components/bodies/_01_Index";
import {HelloWorld} from "components/Boiler-Components";

const PageComponent = ( props ) => {
	console.log( "Index" );

	return (
		<main className="container position-relative mt-3">
			<style jsx>{`
				main {
					min-height: var(--vph);
				}
				.custom-position-1 {
					position: absolute;
					top: 40%;
					transform: translateY(-50%);
				}
	        `}
			</style>
			<div className="custom-position-1">
				<HelloWorld title={props.pageTitle} />
				{/* <HomePageIndex pageContent={pageContent} /> */}
			</div>
		</main>
	);
};

export default WithLayout( PageComponent );
