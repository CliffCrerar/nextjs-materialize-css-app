
const Promise = require( 'promise' );

//var Observable = {};

// const Observable = {
// 	emit: null,
// 	error: null,
// 	subscribe: new Promise( ( res, rej ) => {
// 		this.emit = value => res( value );
// 		this.error = rej => console.log( 'SHITS FUCKED UP:', rej );
// 		console.log( this );
// 	} )
// 	//subscribe: this.promise.then
// }

// class Observable {
// 	constructor ( props ) {

// 		this.getRes( cb ) {

// 			return new Promise( ( resolve, reject ) => {
// 				let emit = value => res( value );
// 				let error = err => console.log( reject );
// 				cb( emit, error )
// 			} );
// 		};
// 	}

// 	subscribe;
// 	emit;
// 	error;


// 	testFunc() {
// 		console.log( 'getRes: ', getRes );
// 	};


// }

// var test = new Observable();

// console.log( test );

function Observer( param ) {

	let p = Promise.resolve( param );

	let t = p.then( val => {console.log( val )} )


}

Observer( 123 )

const Observer2 = {
	emit: function ( param ) {
		return Promise.resolve( param )
	},
	subscribe: function ( cb ) {
		console.log( this );
		//this.emit.then( function ( val ) {cb( val )} );
	}
}

Observer2.emit( 232 );

Observer2.subscribe( val => console.log( val ) )
