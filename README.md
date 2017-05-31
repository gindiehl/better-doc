# Better Doctor

This web application connects patients to doctors in their cities.

### Requires

Web browser with ES6 compatibility ie: Chrome, Safari
Ruby 2.3.1
Node Package Manager (npm)
Bower

### Setup/Installation for MacOS

1) Clone this repository to your desktop with the following terminal command:

```
$ git clone https://github.com/jinjin8/better-doc
```

2) Navigate to the cloned repository:

```
$ cd desktop/better-doc
```

3) Create a .gitignore file & an .env file in the top level of your project directory

```
$ better-doc/touch .gitignore
$ better-doc/touch .env
```

4) Create an account & request a free key from Better Doctors API

```
visit https://betterdoctor.com/developers/
```

5) Store key at the top of your .env file

```
exports.apiKey = 'your unique key goes here';
```

6) Add the .env file along with these other files to your .gitignore file

```
node_modules/
.DS_Store
bower_components/
build/
tmp/
.env
```  

7) Install node package manager:

```
$ npm install
```

8) Install Bower:

```
$ bower install
```

9) Run gulp:

```
$ gulp build
```

10) Start the server:

```
$ gulp serve
```

11) Navigate to the application in your browser:

```
localhost:3000
```

## Built With

* HTML
* CSS, Sass, Bootstrap
* JavaScript, jQuery
* Node
* Gulp
* Bower
* ES6
* Better Doctor API

## Known Bugs

* None

## Support and contact details

_jincamou@gmail.com_

## License

Copyright © 2017 jin camou
