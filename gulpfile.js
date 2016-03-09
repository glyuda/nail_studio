(function() {
    'use strict';
//our modules
    var gulp = require('gulp');
    var sass = require('gulp-sass');

//all paths we use
    var paths = {
        src: {
            css: 'source/sass/**/*.scss',
            img: 'source/images/**/*.*',
            js: 'source/js/**/*.js'

        },
        dest: {
            css: 'public/css',
            images: 'public/images',
            js: 'public/js'
        }
    };
//all tasks we can do
    gulp.task('startWork', function() {
    //all watchers
        gulp.watch(paths.src.css, function() {
            gulp.run('cssCreate');
        });

        gulp.watch(paths.src.js, function() {
            gulp.run('jsMove')
        });

        gulp.watch(paths.src.img, function() {
            gulp.run('imgMove')
        });

    })

    gulp.task('cssCreate', function() {
        gulp.src(paths.src.css)
            .pipe(sass())
            .pipe(gulp.dest(paths.dest.css))
            //.pipe(plugins.livereload());
    });

    gulp.task('jsMove', function() {
        gulp.src(paths.src.js)
            .pipe(gulp.dest(paths.dest.js))
    });

    gulp.task('imgMove', function() {
        gulp.src(paths.src.img)
            .pipe(gulp.dest(paths.dest.images))
    })
})();
