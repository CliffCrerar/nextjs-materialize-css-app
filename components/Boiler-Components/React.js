/* REACT PAGE COMPONENT */

//import css from 'components/Boiler-Components/node_modules/styled-jsx/css';

const styles = {
	width: "40%"
};

const ReactComp = () => {
	return (
		<div>

			<style jsx>{`
			.custom-width{
				width: 30%;
			}
		`}</style>
			<div className="d-flex justify-content-around align-items-center position-relative">
				<img className="p-3" style={styles} src="static/img/react.svg" />
				<div>
					<h5>
						A JavaScript library for building user interfaces
				</h5>
					<hr />
					<a href="https://reactjs.org/">react.org</a>
				</div>
			</div>
			<hr />
			<div className="mt-3 d-flex flex-xl-row justify-content-around">
				<div className="custom-width">
					<h5 className="text-secondary">Declarative</h5>
					<p className="text-justify">
						React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
					</p>
					<p className="text-justify">
						Declarative views make your code more predictable and easier to debug.
					</p>
				</div>
				<div className="custom-width">
					<h5 className="text-secondary">Component-Based</h5>
					<p className="text-justify">
						Build encapsulated components that manage their own state, then compose them to make complex UIs.
					</p>
					<p className="text-justify">
						Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
					</p>
				</div>
				<div className="custom-width">
					<h5 className="text-secondary">Learn Once, Write Anywhere</h5>
					<p className="text-justify">
						We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
					</p>
					<p className="text-justify">
						React can also render on the server using Node and power mobile apps using React Native.
					</p>

				</div>
			</div>
		</div>
	);
};

export default ReactComp;
