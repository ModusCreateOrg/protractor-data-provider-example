# protractor-data-provider-example
Example project for blog post on using Protractor and Jasmine Data Provider to iterate over the same test spec with different test data.

Check out the tutorial that goes along with this repo!


## Setup
After cloning, do an npm install from the root directory
```
npm install
```

To start the selenium server, open a new terminal window and type:
```
webdriver-manager update
webdriver-manager start
```

## Run tests
To run the tests and see how it works:
```
protractor protractor.conf.js --suite repeatable
```
## Using Functions in Data Objects
Since it's just JavaScript, JDP can take in functions as well as string and boolean values.

This means that a data object in `exampleData.module.js` could go from looking like this:
```
"Andrew Owen" : handle: "modusAndrew"
```
to this:
```
"Andrew Owen" : handle: function() {
	return "modusAndrew";
}
```

Then, just make sure in your spec file, to replace any instance of `data.handle` with `data.handle()`.

Checkout the branch `data-with-functions` to see a working example.
