exports.config = {
	chromeDriver: './node_modules/chromedriver/bin/chromedriver',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	allScriptsTimeout: 30000,
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function() {}
	},
	params: {
		baseUrl: 'http://moduscreate.com/about'
	},
	multiCapabilities:[{
		logName: 'Chrome - Repeatable Tests',
		browserName: 'chrome',
		name: 'chrome-repeat',
		count: 1,
		shardTestFiles: true,
		maxInstances: 1,
		specs: []
	}, {
		logName: 'Firefox - Repeatable Tests',
		browserName: 'firefox',
		name: 'ff-repeat',
		count: 1,
		shardTestFiles: true,
		maxInstances: 2,
		specs: []
	}],
	suites: {
		repeatable: 'example/example.spec.js'
	},
	framework: 'jasmine',

	onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
      	displayStacktrace: false
      }));
   }
};