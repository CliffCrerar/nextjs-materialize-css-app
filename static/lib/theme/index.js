/**
 * THEME INDEX
 * @summary The theme index of the app module
 * @author Cliff Crerar
 * Created at     : 2019-05-26 03:59:26
 * Last modified  : 2019-05-29 23:32:26
 */
const buildTheme = require( './buildtheme' );
const themeNames = require( './themeNames' );
const themeSchema = require( './themes' );

module.exports = {buildTheme, themeSchema, themeNames};