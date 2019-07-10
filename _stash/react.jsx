/**
 * CONTACT
 *
 * @summary Contact page
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-22 22:00:43
 * Last modified  : 2019-06-15 15:22:33
 */
import WithLayout from 'Layout'
import { ReactComp } from "components/Boiler-Components";
const PageComponent = () => (<main className="container position-relative mt-5" >
	<h1 className="w-100 text-center text-default-primary headingShadow" > React </h1> <ReactComp />
</main>
);
export default WithLayout(PageComponent);