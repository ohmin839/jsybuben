const { dest, src, series } = require('gulp');
const browsarify = require('browserify');
const source = require('vinyl-source-stream');


function browsarifyTask(cb) {
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

function copyLibTask(cb) {
    src('src/*').pipe(dest('dist'));
    src('node_modules/dojo/**/*').pipe(dest('dist/lib/dojo'));
    src('node_modules/leaflet/dist/**/*').pipe(dest('dist/lib/leaflet'));
}
  
exports.default = series(
    browsarifyTask,
    copyLibTask
);