/* Materialize PAGE COMPONENT */

//import css from 'components/Boiler-Components/node_modules/styled-jsx/css';

const styles = {
	width: '40%'
}

const Materialize = () => {
	return (
		<div className="d-flex justify-content-around align-items-center position-relative">
			<img style={styles} src="static/img/materialize.png" />
			<div>
				<h5 className="text-justify">Materialize is a simple CSS style library that makes creating ultra custom components material components using good old native HTML as JSX.</h5>
				<hr />
				<a href="https://materializecss.com/">materializecss.com</a>
			</div>
		</div>
	)
}

export default Materialize;