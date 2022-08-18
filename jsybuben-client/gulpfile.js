const { dest, src, series } = require('gulp');
const browsarify = require('browserify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();
const { createProxyMiddleware } = require('http-proxy-middleware');


function browsarifyTask() {
    return browsarify(
            '../jsybuben-core/lib/api.js',
            {
                outfile: "jsybuben.js",
                standalone: "jsybuben"
            })
            .bundle()
            .pipe(source('jsybuben.js'))
            .pipe(dest('./dist/lib/jsybuben'));
}

function copyTask(cb) {
    src('src/index.html').pipe(dest('dist'));
    src('src/dojoConfig.js').pipe(dest('dist'));
    src('src/app/**/*').pipe(dest('dist/lib/app'));
    src('node_modules/dojo/**/*').pipe(dest('dist/lib/dojo'));
    src('node_modules/dijit/**/*').pipe(dest('dist/lib/dijit'));
    src('node_modules/leaflet/dist/**/*').pipe(dest('dist/lib/leaflet'));
    cb();
}

function runTask(cb) {
    browserSync.init({
        server: {
            baseDir: "./dist/",
            index: "index.html",
        },
        middleware: createProxyMiddleware('/api', {
            target: 'http://rest:8888',
            pathRewrite: {
                '^/api': '/'
            }
        }),
        open: false
    });
    cb();
}
  
exports.default = series(
    browsarifyTask,
    copyTask,
    runTask
);