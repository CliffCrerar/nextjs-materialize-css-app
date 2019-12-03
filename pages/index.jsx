/**
 * APP INDEX
 * @summary This is the application index file
 * @author Cliff Crerar
 * Created at     : 2019-05-22 00:41:34
 * Last modified  : 2019-06-17 22:09:39
 */
import WithLayout from 'Layout'
import {HelloWorld} from "components/Boiler-Components";
const PageComponent = ( props ) =>
{
	console.log( 'props: ', props );
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
