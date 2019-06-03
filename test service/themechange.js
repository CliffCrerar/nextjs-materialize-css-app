class Subject {
	constructor() {
		this.callbacks = [];
	}

	subscribe(fn) {
		this.callbacks.push(fn);
	}

	publish(data) {
		this.callbacks.forEach(fn => fn(data));
	}

	unsubscribe() {
		this.callbacks = [];
	}
}

const theme = new Subject();

function updateTheme(newTheme) {
	theme.publish(newTheme);
}

modules.export = { theme, updateTheme };

// const changeTheme = new Observable(function subscribe(subscriber) {
// 	try {
// 		subscriber.next('yes');
// 		subscriber.complete();
// 	} catch (err) {
// 		subscriber.error(err);
// 	}
// });

// changeTheme.subscribe(data => {
// 	console.log(data);
// });

// const themechange = new Observable(function publish(newtheme) {
// console.log(newtheme);
// }, subscribe);

// function subscribe(subscriber) {
// subscriber.next('newthemegoeshere');
// subscriber.complete();
// }

// /*themechange.prototype.publish =*/ function publish(newtheme) {
// return console.log(newtheme);
// }

// themechange.publish('this-is-new-theme');

//themechange.subscribe(newTheme => console.log(newTheme));
