const PageComponent = () => (
	<div>
		<style jsx>{`
			.test{font-family: fira code;}
			span{font-family: fira code;font-size: 6em;}
			.thisData{transform: translateY(20%);}
			.classes-flex {display:flex;flex-direction: column;justify-content: center;align-items: center;}
			.mainobj{ }
			.read{ }
			.www{font-size: 10em;}
			.s1{color: #F44336;}
			.s2{color: #4CAF50;}
			.s3{color: #3F51B5;}
			.dot{color: #00d307;}
			.dot2, .dot4{color: #ff0000;}
			.mind{color:#2196F3;}
			.exec{color: #9f00a8;}
			.p1{color:#f4e516;}
		`}</style>
		<div className="thisData h-100 w-100">
			{/* <code> */}
			<div className="classes-flex flex-column w-70 h-100 align-content-center">
				<div>
					<span className="mind">MIND</span>
					<span className="dot dot1">.</span>
					<span className="read">read</span>
					<span className="dot dot2">.</span>
				</div>
				<div>
					<span className="www">(</span>
					<span className="www s1">{`<`}</span>
					<span className="www s2">{`WWW`}</span>
					<span className="www s3">{`/>`}</span>
					<span className="www">)</span>
				</div>
				<div>
					<span className="dot dot3">.</span>
					<span className="then">then</span>
					<span className="parens p1">()</span>
					<span className="dot dot4">.</span>
					<span className="exec">EXEC</span>
					<span className="parens">();</span>
				</div>
			</div>
			{/* </code> */}
		</div>
	</div>
)
export default PageComponent;