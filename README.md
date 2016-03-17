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
webdriver-manager start
```

## Run tests
To run the tests and see how it works:
```
protractor protractor.conf.js --suite repeatable
```
