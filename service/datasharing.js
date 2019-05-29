/**
 * DATA SHAREING
 * @summary For shared component generated data
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-29 20:01:36
 * Last modified  : 2019-05-29 20:45:27
 */


class SharedData {
	constructor ( props ) {
		this.sData = {}

		this.set = this.set.bind( this )
		this.get = this.get.bind( this )
		this.getThemeList = this.getThemeList.bind( this );
	}
	get( name ) {
		return this.sData[ name ];
	};
	set( name, data ) {
		sData[ name ] = data;
		return this.sData;
	};
	getThemeList( name ) {
		return new Promise( ( resolved, rejected ) => {
			var data = this.get( name );
			resolved( data );
		} )
	}
}

export default SharedData;