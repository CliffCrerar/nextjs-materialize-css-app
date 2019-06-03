/* BOILER COMPONENT */

import css from "styled-jsx/css";

const styles = css`
	.bs4-logo {
		transform: scale(1);
	}
	.bs4-logo-text {
		position: absolute;
		top: -10px;
		font-weight: bold;
		color: var(--bs4Purple);
	}
`;

function HelloWorldComponent() {
	return (
		<div className="container mt-3">
			<h1 className="text-center w-100 text-default-primary">
				Hello Next App
			</h1>
			<div className="d-flex flex-row justify-content-between mt-2">
				<style jsx>{styles}</style>

				<div>
					<a href="https://nextjs.org/">
						<img
							className="img-fluid"
							src="static/img/next_s.png"
							alt="Next.js logo"
						/>
					</a>
				</div>

				<div>
					<a href="https://getbootstrap.com/docs/4.3/utilities/borders/">
						<div className="d-flex flex-column align-items-center">
							<img
								className="img-fluid bs4-logo"
								src="static/img/bootstrap.png"
								alt="Next.js logo"
							/>
						</div>
					</a>
				</div>
			</div>

			<h5 className="text-center">
				Next.js with bootstrap 4 utility classes
			</h5>
		</div>
	);
}

export default HelloWorldComponent;
