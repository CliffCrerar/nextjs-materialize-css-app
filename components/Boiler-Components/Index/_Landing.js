/**
 * Where user lands
 * @author Cliff Crerar
 * Created at     : 2019-05-30 22:23:22
 * Last modified  : 2019-05-30 23:00:04
 */

const Landing = ({ content }) => {
	return (
		<>
			<style jsx>
				{`
					.index-landing {
						min-height: var(--vph);
						width: var(--vpw);
					}
				`}
			</style>
			<section className="index-landing position-relative">
				<div className="container">
					<h1 className="w-100 text-center pt-4 text-dark-primary">{content.title}</h1>
				</div>
			</section>
		</>
	);
};

export default Landing;
