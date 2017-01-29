/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */

System.config({
// map tells the System loader where to look for things
map: {
    // our app is within the app folder
    app: 'app',

    // angular bundles
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    // other libraries
    'rxjs':'node_modules/rxjs'
},
// packages tells the System loader how to load when no filename and/or no extension
packages: {
    app: {
        main: './main.js',
        defaultExtension: 'js'
    },
    rxjs: {
        defaultExtension: 'js'
    }
}
});
