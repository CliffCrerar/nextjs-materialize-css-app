/**
 * APP INDEX
 * @summary This is the application index file
 * @author Cliff Crerar
 * Created at     : 2019-05-22 00:41:34 
 * Last modified  : 2019-05-30 23:00:27
 */
import App from 'App'
import HomePageIndex from 'components/bodies/_01_Index'
// import {HelloWorldComponent} from 'components/Default'

const pageContent = {
	landing: {
		title: 'Interactive Resume'
	}
}

const PageComponent = () => {
	console.log( 'Index' );
	return (
		<main className="position-relative">

			{/* <HelloWorldComponent /> */}
			<HomePageIndex pageContent={pageContent} />
		</main>
	)
}

export default App( PageComponent );