/* REACT PAGE COMPONENT */

import css from 'styled-jsx/css';

const styles = {
	width: '40%'
}

const ReactComponent = () => {
	return (
		<div className="d-flex justify-content-around align-items-center position-relative">
			<img style={styles} src="static/img/react.png"></img>
			<div>
				<h5>Next.js is made for <strong>React</strong> and makes react easy.</h5>
				<hr />
				<a href="https://reactjs.org/">react.org</a>
			</div>
		</div>
	)
}

export default ReactComponent;