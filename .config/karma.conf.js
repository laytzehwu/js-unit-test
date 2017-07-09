module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'https://code.jquery.com/jquery-3.2.1.slim.min.js',
			{pattern: '../static/js/**/*.js', included: true},
			{pattern: '../spec/**/*.js', included: true}
		],
		exclude: [],
		reporters: ['progress'],
		port: 9876,
		color: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DISABLE,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	});
};