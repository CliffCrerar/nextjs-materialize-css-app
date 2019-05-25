/* BOILER COMPONENT */

import css from 'styled-jsx/css'

const styles = css`
	.bs4-logo{
		transform: scale(1)
	}
	.bs4-logo-text{
		position: absolute;
		top: -10px;
		font-weight: bold;
		color:var(--bs4Purple);
	}
`

function HelloWorldComponent() {
	return (
		<div>

			<div className="d-flex flex-row justify-content-between">
				<style jsx>{styles}</style>

				<div>
					<a href="https://nextjs.org/">
						<img className="img-fluid" src="static/img/next_s.png" alt="Next.js logo" />
					</a>
				</div>

				<div>
					<a href="https://getbootstrap.com/docs/4.3/utilities/borders/">
						<div className="d-flex flex-column align-items-center">
							<div>
								<img className="img-fluid bs4-logo" src="static/img/bootstrap.png" alt="Next.js logo" />
							</div>
							<div>
								<h4 className="bs4-logo-text text-center position-relative">Utilities</h4>
							</div>
						</div>
					</a>
				</div>
			</div>

			<h5 className="text-center">Next.js with bootstrap 4 utility classes</h5>

		</div>
	)
};

export default HelloWorldComponent;