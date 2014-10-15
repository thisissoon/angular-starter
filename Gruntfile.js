"use strict";

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        config: {
            outputDir: "dist/",

            applicationFiles: [
                "app/js/sn-example-app/app.js",
                "app/js/*.js",
                "app/js/**/*.js",
                "app/js/**/**/*.js"
            ],

            vendorFiles: [
                "app/components/angular/angular.js",
                "app/components/angular-mocks/angular-mocks.js",
                "app/components/angular-route/angular-route.js",
            ]
        },

        connect: {
            server: {
                options: {
                    hostname: "0.0.0.0",
                    port: 8000,
                    livereload: true,
                    open: "http://localhost:8000/app/"
                }
            },
            servertest: {
                options: {
                    keepalive: false,
                    hostname: "0.0.0.0",
                    port: 8000,
                    livereload: false,
                    open: "http://localhost:8000/app/"
                }
            }
        },

        watch: {
            css: {
                files: [
                    "app/index.html",
                    "app/less/*.less",
                    "app/less/**/*.less",
                    "app/less/**/**/*.less",
                    "app/modules/*.html",
                    "app/modules/**/*.html",
                    "app/modules/**/**/*.html",
                    "app/partials/*.html",
                    "app/partials/**/*.html",
                    "app/partials/**/**/*.html"
                ],
                tasks: ["less:development"],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
            javascript: {
                files: [
                    "app/js/*.js",
                    "app/js/**/*.js",
                    "app/js/**/**/*.js",
                    "test/unit/**/*.js",
                    "test/unit/**/**/*.js",
                    "test/unit/**/**/**/*.js"
                ],
                tasks: ["jshint", "jasmine"],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ["app/less/"],
                    cleancss: false
                },
                files: {
                    "app/css/all.css": "app/less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["app/less/"],
                    cleancss: true
                },
                files: {
                    "<%= config.outputDir %>/css/all.min.css": "app/less/main.less"
                }
            }
        },

        jshint: {
            dist: {
                src: ["<%= config.applicationFiles %>"]
            },
            options: {
                strict: false,
                browser: true,
                devel: true,
                asi: true,
                curly: true,
                noarg: true,
                quotmark: "double",
                undef: true,
                unused: true,
                globalstrict: true,
                globals: {
                    "angular": true
                }
            }
        },

        jasmine: {
            dist: {
                src: ["<%= config.applicationFiles %>"],
                options: {
                    specs: ["tests/unit/**/*.js"],
                    keepRunner: true,
                    vendor: "<%= config.vendorFiles %>"
                }
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            dist: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "tests/e2e/e2e.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        },

        protractor_webdriver: {
            dist: {
                options: {

                }
            }
        },

        concat: {
            options: {
                separator: ";",
            },
            dist: {
                src: ["<%= config.vendorFiles %>", "<%= config.applicationFiles %>"],
                dest: "<%= config.outputDir %>/js/app.js",
            }
        },

        uglify: {
            dist: {
                files: {
                    "<%= config.outputDir %>/js/app.min.js": ["<%= config.vendorFiles %>", "<%= config.applicationFiles %>"]
                }
            }
        },

        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: "app/img",
                    src: ["**/*"],
                    dest: "<%= config.outputDir %>/img/"
                }]
            },
            javascript: {
                files: [{
                    expand: true,
                    cwd: "app/components",
                    src: ["**/*"],
                    dest: "<%= config.outputDir %>/components/"
                },
                {
                    expand: true,
                    cwd: "app/js",
                    src: ["**/*"],
                    dest: "<%= config.outputDir %>/js/"
                }]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: "app/css",
                    src: ["*.css"],
                    dest: "<%= config.outputDir %>/css/"
                }]
            },
            partials: {
                files: [{
                    expand: true,
                    cwd: "app/partials",
                    src: ["*.html"],
                    dest: "<%= config.outputDir %>/partials/"
                }]
            }
        },

        clean: {
            beforeBuild: {
                src: ["<%= config.outputDir %>"]
            }
        },

        processhtml: {
            options: {
                data: {
                    message: "processing 'index.html' file"
                }
            },
            development: {
                files: {
                    "<%= config.outputDir %>/index.html": ["app/index.html"]
                }
            },
            dist: {
                files: {
                    "<%= config.outputDir %>/index.html": ["app/index.html"]
                }
            }
        },

        yuidoc: {
            compile: {
                name: "<%= pkg.name %>",
                description: "<%= pkg.description %>",
                version: "<%= pkg.version %>",
                url: "<%= pkg.homepage %>",
                options: {
                    paths: "app/js/",
                    themedir: "node_modules/yuidoc-bootstrap-theme",
                    helpers: ["node_modules/yuidoc-bootstrap-theme/helpers/helpers.js"],
                    outdir: "docs/"
                }
            }
        }


    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks("grunt-processhtml");

    grunt.registerTask("build", [
        "jshint",
        "jasmine",
        "e2e",
        "clean:beforeBuild",
        "yuidoc",
        "less:production",
        "uglify",
        "copy:images",
        "copy:partials",
        "processhtml:dist"
    ]);

    grunt.registerTask("stage", [
        "jshint",
        "jasmine",
        "e2e",
        "clean:beforeBuild",
        "yuidoc",
        "less:development",
        "copy",
        "processhtml:development"
    ]);

    grunt.registerTask("server", [
        "less:development",
        "connect:server",
        "watch:css"
    ]);

    grunt.registerTask("serverall", [
        "less:development",
        "connect:server",
        "watch"
    ]);

    grunt.registerTask("test", [
        "jshint",
        "jasmine"
    ]);

    grunt.registerTask("e2e", [
        "connect:servertest",
        "protractor_webdriver",
        "protractor"
    ]);

    grunt.registerTask("default", ["stage"]);
    grunt.registerTask("release", ["build"]);

};
