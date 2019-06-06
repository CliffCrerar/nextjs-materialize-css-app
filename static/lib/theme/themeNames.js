/**
 * THEME NAMES
 *
 * @summary Produces a list of names from the themeschema file
 * @author Cliff Crerar
 *
 * Created at     : 2019-05-29 21:26:16 
 * Last modified  : 2019-05-29 23:29:35
 */
const fs = require('fs');
const file = fs.existsSync(require('path').join(__dirname, './themes.json')) ?
    require(require('path').join(__dirname, './themes.json')) :
    false;

module.exports = () => {
    if (file) return;
    //console.log( typeof JSON.stringify( Object.entries( file ).map( e => e[ 0 ] ) ) );
    return fs.writeFileSync('./themeNames.json', JSON.stringify(Object.entries(file).map(e => e[0])));
}