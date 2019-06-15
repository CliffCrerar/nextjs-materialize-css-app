/* Materialize PAGE COMPONENT */

//import css from 'components/Boiler-Components/node_modules/styled-jsx/css';

const styles = {
	width: '100%'
};

const Materialize = () => {
	return (
		<div>
			<style jsx>{`
				.custom-width-1{
					width: 30%;
				}
			`}</style>
			<div className="d-flex justify-content-around align-items-center position-relative mt-5 mb-5">
				<img style={styles} src="static/img/materialize.svg" />
				<div>
					<h5 className="text-justify">
						Materialize is a simple CSS style library that makes
						creating ultra custom components material components using
						good old native HTML as JSX.
				</h5>
					<hr />
					<a href="https://materializecss.com/">materializecss.com</a>
				</div>
			</div>
			<hr />
			<div className="mt-3">
				<h3 className="text-accent">Material Design</h3>
				<p className="text-justify">
					Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.
				</p>
			</div>
			<div className="mt-3">
				<h4 className="text-secondary">Goals</h4>
				<img className="img-fluid" src="static/img/material-goals.png" />
				<div className="d-flex flex-row justify-content-between mt-3">
					<div className="custom-width-1">
						<h5 className="text-default-primary">Create</h5>
						<p className="text-justify">
							Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science.
						</p>
					</div>
					<div className="custom-width-1">
						<h5 className="text-secondary">Unify</h5>
						<p className="text-justify">
							Develop a single underlying system that unifies the user experience across platforms, devices, and input methods.
						</p>
					</div>
					<div className="custom-width-1">
						<h5 className="text-dark-primary">Customize</h5>
						<p className="text-justify">
							Expand Material’s visual language and provide a flexible foundation for innovation and brand expression.
						</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="text-center mb-5 mt-2">
				<p><i>For more on material design please visit</i></p>
				<a href="https://material.io/" target="_blank">Material.io</a>
			</div>
		</div >
	);
};

export default Materialize;
