
// Router.ready( () => {transitionPage = true} )
// Router.events.on( 'routeChangeStart', ( ev ) => transitionPage = true );
// Router.events.on( 'routeChangeComplete', ( ev ) => setTimeout( () => {
// 	transitionPage = false;
// }, 3000 ) );
// Router.events.on( 'routeChangeError', ( ev ) => routing( ev, 'routeChangeError' ) );

function PageLoader( props ) {
	const varClass = props.transitionPage ? "d-flex" : "scale-out";
	const fixedClass = "loader-container flex-row justify-content-center align-items-center scale-transition"
	const className = `${varClass} ${fixedClass}`
	return (
		<React.Fragment>
			<style jsx>{`
				.loader-container{
					position: fixed;
					z-index: 100;
					width: var(--vpw);
					height: var(--vph);
					background: white;
				}
				.loader-container img {
					display: inherit;
				}
			`}
			</style>
			<div className={className}>
				<img className="img-fluid" src="static/img/loading.gif" />
			</div>
		</React.Fragment>
	)
}

export default PageLoader;