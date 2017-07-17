module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'https://code.jquery.com/jquery-3.2.1.slim.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js',
			{pattern: '../static/js/**/*.js', included: true},
			{pattern: '../spec/**/*.spec.js', included: true}
		],
		exclude: [
			'../static/backup/**/*.js',
			'../spec/backup/**/*.js'
		],
		reporters: ['progress'],
		port: 9876,
		color: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	});
};