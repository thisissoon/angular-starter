"use strict";

var modRewrite = require("connect-modrewrite");

module.exports = function (grunt) {

    var base = grunt.option("baseDir") || "",
        protractorConf = grunt.option("ci") ?
                        "tests/e2e/protractor.saucelabs.conf.js" :
                        "tests/e2e/protractor.conf.js" ;

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        config: {
            outputDir: "dist/",
            applicationFiles: grunt.file.readJSON("scripts.json").application,
            vendorFiles: grunt.file.readJSON("scripts.json").vendor
        },

        connect: {
            options: {
                hostname: "0.0.0.0",
                port: 8000,
                base: base
            },
            server: {
                options: {
                    livereload: true,
                    middleware: function ( connect, options, middlewares ) {
                        var rules = (base === "dist") ?
                            [ "^/[^\.]*$ /index.html" ] :
                            [ "^/app/[^\.]*$ /app/index.html" ];
                        middlewares.unshift( modRewrite( rules ) );
                        return middlewares;
                    }
                }
            },
            servertest: {
                options: {
                    keepalive: false,
                    livereload: false,
                    base: "dist",
                    middleware: function ( connect, options, middlewares ) {
                        var rules = [ "^/[^\.]*$ /index.html" ];
                        middlewares.unshift( modRewrite( rules ) );
                        return middlewares;
                    }
                }
            }
        },

        watch: {
            options: {
                nospawn: false,
                livereload: true
            },
            css: {
                files: [
                    "app/index.html",

                    "app/less/*.less",
                    "app/less/**/*.less",
                    "app/less/**/**/*.less",

                    "app/partials/*.html",
                    "app/partials/**/*.html",
                    "app/partials/**/**/*.html",

                    "modules/*.html",
                    "modules/**/*.html",
                    "modules/**/**/*.html"
                ],
                tasks: ["less:development"]
            },
            javascript: {
                files: [
                    "app/js/*.js",
                    "app/js/**/*.js",
                    "app/js/**/**/*.js",

                    "tests/unit/*.js",
                    "tests/unit/**/*.js",
                    "tests/unit/**/**/*.js"
                ],
                tasks: ["test:development"]
            }
        },

        less: {
            options: {
                paths: ["app/less/"],
                cleancss: false,
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                    "<%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            development: {
                files: { "app/css/all.css": "app/less/main.less" },
                options: {
                    sourceMap: true,
                    sourceMapFilename: "app/css/all.css.map",
                    sourceMapURL: "all.css.map",
                    outputSourceFiles: true
                }
            },
            production: {
                files: { "<%= config.outputDir %>css/all.min.css": "app/less/main.less" },
                options: {
                    cleancss: true
                }
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            dist: {
                src: ["<%= config.applicationFiles %>"]
            }
        },

        jasmine: {
            options: {
                specs: ["tests/unit/**/*.js"],
                keepRunner: true,
            },
            development: {
                src: ["<%= config.applicationFiles %>"],
                options: {
                    vendor: ["<%= config.vendorFiles %>"],
                    helpers:["app/components/angular-mocks/angular-mocks.js"],
                    template: require("grunt-template-jasmine-istanbul"),
                    templateOptions: {
                        coverage: "coverage/coverage.json",
                        report: [
                            {
                                type: "lcov",
                                options: {
                                    dir: "coverage"
                                }
                            },
                            {
                                type: "text-summary"
                            }
                        ]
                    }
                }
            },
            production: {
                src: ["<%= config.outputDir %>js/app.min.js", "app/components/angular-mocks/angular-mocks.js"]
            }
        },

        protractor: {
            options: {
                keepAlive: false,
                noColor: false
            },
            dist: {
                options: {
                    configFile: protractorConf
                }
            }
        },

        protractor_webdriver: {
            dist: {
                options: {
                    command: "webdriver-manager update && webdriver-manager start",
                }
            }
        },

        concat: {
            options: {
                sourceMap: true,
                separator: ";",
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                    "<%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            production: {
                src: [
                    "<%= config.vendorFiles %>",
                    "<%= config.applicationFiles %>"
                ],
                dest: "<%= config.outputDir %>js/app.js"
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                enclose: { window: "window" },
                banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                    "<%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            production: {
                files: {
                    "<%= config.outputDir %>js/app.min.js":
                    [
                        "<%= config.vendorFiles %>",
                        "<%= config.applicationFiles %>"
                    ]
                }
            }
        },

        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: "app/img",
                    src: ["**/*", "!test/**"],
                    dest: "<%= config.outputDir %>img/"
                }]
            },
            partials: {
                files: [{
                    expand: true,
                    cwd: "app/partials",
                    src: ["*.html"],
                    dest: "<%= config.outputDir %>partials/"
                }]
            },
            e2e: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        "app/components/angular-mocks/angular-mocks.js",
                        "tests/e2e/app.js"
                    ],
                    dest: "<%= config.outputDir %>e2e/"
                }]
            }
        },

        clean: {
            beforeBuild: {
                src: ["<%= config.outputDir %>", "docs"]
            },
            e2e: {
                src: ["<%= config.outputDir %>"]
            }
        },

        processhtml: {
            options: {
                strip: true
            },
            production: {
                files: {
                    "<%= config.outputDir %>index.html": ["app/index.html"]
                }
            },
            e2e: {
                files: {
                    "<%= config.outputDir %>index.html": ["app/index.html"]
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
    grunt.loadNpmTasks("grunt-contrib-yuidoc");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-protractor-runner");
    grunt.loadNpmTasks("grunt-protractor-webdriver");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask("build", [
        "clean:beforeBuild",
        "less:production",
        "uglify",
        "copyBuild",
        "processhtml:production"
    ]);

    grunt.registerTask("release", [
        "bump-only",
        "build",
        "bump-commit"
    ]);

    grunt.registerTask("copyBuild", [
        "copy:images",
        "copy:partials"
    ]);

    grunt.registerTask("server", [
        "less:development",
        "connect:server",
        "watch:css"
    ]);

    grunt.registerTask("serverjs", [
        "less:development",
        "connect:server",
        "watch:javascript"
    ]);

    grunt.registerTask("serverall", [
        "less:development",
        "connect:server",
        "watch"
    ]);

    grunt.registerTask("test", [
        "clean:beforeBuild",
        "jshint",
        "uglify",
        "jasmine:production"
    ]);

    grunt.registerTask("test:development", [
        "jshint",
        "jasmine:development"
    ]);

    grunt.registerTask("e2e", [
        "uglify",
        "less:production",
        "copy",
        "processhtml:e2e",
        "connect:servertest",
        "protractor_webdriver",
        "protractor:dist",
        "clean:e2e"
    ]);

    grunt.registerTask("default", ["build"]);

};
