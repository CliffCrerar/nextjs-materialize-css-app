/* BOILER COMPONENT */

import {css} from 'styled-jsx/css';
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
function HelloWorld() {
	return (
		<div className="container mt-5">
			<h1 className="text-center w-100 text-default-primary headingShadow">
				Material <span className="text-accent">Next</span>
			</h1>
			<div className="d-flex flex-row justify-content-evenly mt-2 align-items-center">
				<style jsx>{styles}</style>

				<div className="w-25 p-2">
					<a href="https://nextjs.org/">
						<img
							className="img-fluid"
							src="static/img/next_s.png"
							alt="Next.js logo"
						/>
					</a>
				</div>

				<div className="w-25 p-2">
					<a href="https://getbootstrap.com/docs/4.3/utilities/borders/">
						<div className="d-flex flex-column align-items-center">
							<img
								className="img-fluid bs4-logo"
								src="static/img/bootstrap.png"
								alt="Bootstrap logo"
							/>
						</div>
					</a>
				</div>

				<div className="w-25 p-2">
					<a href="https://getbootstrap.com/docs/4.3/utilities/borders/">
						<div className="d-flex flex-column align-items-center">
							<img
								className="img-fluid bs4-logo"
								src="static/img/react.svg"
								alt="React logo"
							/>
						</div>
					</a>
				</div>

				<div className="w-25 p-2">
					<a href="https://getbootstrap.com/docs/4.3/utilities/borders/">
						<div className="d-flex flex-column align-items-center">
							<img
								className="img-fluid bs4-logo"
								src="static/img/materialize.svg"
								alt="materialize logo"
							/>
						</div>
					</a>
				</div>

			</div>

			<h4 className="text-center mt-3 mb-3">
				Next.js <span className="text-divider">|</span> Bootstrap 4 utility <span className="text-divider">|</span> React <span className="text-divider">|</span> Materialize CSS
			</h4>
			<hr />
			<h5 className="mt-3  text-center">
				<i className="text-secondary">The best of front end, all in one</i>
			</h5>
		</div>
	);
}

export default HelloWorld;
