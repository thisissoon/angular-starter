angular.module('config', [])

.constant('bower', {name:'angular-start',description:'The start of all angularjs projects. A base template for a typical angularjs application.',version:'0.1.1',homepage:'https://github.com/thisissoon/angular-start',license:'MIT',private:false,dependencies:{angular:'~1.3.5','angular-route':'~1.3.5',bootstrap:'~3.3.1'},devDependencies:{'angular-mocks':'~1.3.5'}})

.constant('pkg', {name:'angular-start',private:false,version:'0.1.1',description:'The start of all angularjs projects. A base template for a typical angularjs application.',repository:'https://github.com/thisissoon/angular-start',license:'MIT',dependencies:{bower:'~1.3.12',grunt:'~0.4.5'},devDependencies:{'connect-livereload':'~0.5.0','connect-modrewrite':'~0.7.9',coveralls:'~2.11.2','grunt-bump':'~0.3.0','grunt-contrib-clean':'~0.6.0','grunt-contrib-concat':'~0.5.0','grunt-contrib-connect':'~0.9.0','grunt-contrib-copy':'~0.7.0','grunt-contrib-jasmine':'~0.8.1','grunt-contrib-jshint':'~0.10.0','grunt-contrib-less':'~0.12.0','grunt-contrib-uglify':'~0.6.0','grunt-contrib-watch':'~0.6.1','grunt-contrib-yuidoc':'~0.5.2','grunt-ng-constant':'~1.1.0','grunt-processhtml':'~0.3.3','grunt-protractor-runner':'~1.1.4','grunt-protractor-webdriver':'~0.1.9','grunt-template-jasmine-istanbul':'~0.3.1',protractor:'~1.4.0','yuidoc-bootstrap-theme':'~1.0.4'},scripts:{postinstall:'bower install'}})

.constant('env', {BASE_URL:'/app/'})

;