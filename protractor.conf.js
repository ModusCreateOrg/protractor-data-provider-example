exports.config = {
	chromeDriver: './node_modules/chromedriver/bin/chromedriver',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	allScriptsTimeout: 30000,
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function() {}
	},
	capabilities: {
		browserName: 'chrome'
	},
	specs: [],
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