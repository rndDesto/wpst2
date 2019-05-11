import SCSS from './scss/index.scss';
import CSS from './css/gayague.css';
import GRID from './css/bootstrap-grid.css';
import 'jquery';
import './contohJquery';
import * as getNameExport from './contohExport';
import warnaBody from './fungsiJquery';
const getNameRequire = require('./contohRequire');


const pakeExport = getNameExport.getFullName("Widdesto");
const pakeRequire = getNameRequire.getFullName("Widdesto");

warnaBody("green");

console.log("Log dari Export = " +pakeExport);
console.log("Log dari Require = " +pakeRequire);

