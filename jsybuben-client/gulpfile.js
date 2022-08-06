const { series, src, dest } = require('gulp');
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
    cb();
}
  
exports.default = series(
    browsarifyTask,
    copyLibTask
);