class Subject {
	constructor () {
		this.callbacks = [];
	}

	subscribe( fn ) {
		this.callbacks.push( fn );
	}

	publish( data ) {
		this.callbacks.forEach( fn => fn( data ) );
	}

	unsubscribe() {
		this.callbacks = [];
	}
}

const themeservice = new Subject();

themeservice.update = function ( newTheme ) {
	themeservice.publish( newTheme );
};

module.exports = themeservice;
