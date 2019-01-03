![No longer maintained](https://img.shields.io/badge/Maintenance-OFF-red.svg)
### [DEPRECATED] This repository is no longer maintained
> While this project is fully functional, the dependencies are no longer up to date. You are still welcome to explore, learn, and use the code provided here.
>
> Modus is dedicated to supporting the community with innovative ideas, best-practice patterns, and inspiring open source solutions. Check out the latest [Modus Labs](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated) projects.

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated)

---
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
