var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src([
            //Libraries
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/satellizer/dist/satellizer.min.js',
            './node_modules/async/dist/async.min.js',
            //'./bower_components/angular-cookie/angular-cookie.min.js',
            //'./bower_components/angular-cookies/angular-cookies.min.js',
            //'./bower_components/ng-token-auth/dist/ng-token-auth.js',
            './node_modules/bootbox/bootbox.min.js',
            './bower_components/angular-auto-validate/dist/jcs-auto-validate.min.js',
            './node_modules/ngprogress-lite/ngprogress-lite.min.js',
            './bower_components/ladda/js/spin.js',
            './bower_components/ladda/js/ladda.js',
            './bower_components/angular-ladda/dist/angular-ladda.min.js',

            //Cores
            './app/core/app.module.js',
            './app/core/constants.js',
            './app/core/app.core.js',
            //'./app/core/exceptionhandler.js',
            './app/core/app.config.js',
            './app/core/app.route.js',
            './app/core/authinterceptor.js',
            './app/core/app.helpers.js',
            './app/nav/*.js',
            './app/nav/*/*.js',

            //Common Module
            './app/common/*.js',
            './app/common/*/*.js',

            //Auth Module
            './app/login/*.js',

            //Dashboard Module
            './app/dashboard/*.js',

            //Brand Module
            './app/brand/*.js',
            './app/brand/*/*.js',

            //Deal Module
            './app/deals/*.js',
            './app/deals/*/*.js',

            //User Module
            './app/user/*/*.js',
            './app/user/*.js',
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});