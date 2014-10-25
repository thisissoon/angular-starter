"use strict";

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        config: {
            outputDir: "dist/",
            applicationFiles: grunt.file.readJSON("scripts.json").application,
            vendorFiles: grunt.file.readJSON("scripts.json").vendor
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
                    livereload: false
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
                    "tests/unit/*.js",
                    "tests/unit/**/*.js",
                    "tests/unit/**/**/*.js"
                ],
                tasks: ["jshint", "jasmine:development"],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        },

        less: {
            options: {
                paths: ["app/less/"],
                cleancss: false
            },
            development: {
                files: { "app/css/all.css": "app/less/main.less" }
            },
            stage: {
                files: { "<%= config.outputDir %>/css/all.css": "app/less/main.less" }
            },
            production: {
                files: { "<%= config.outputDir %>/css/all.min.css": "app/less/main.less" },
                options: {
                    cleancss: true
                }
            }
        },

        jshint: {
            dist: {
                src: ["<%= config.applicationFiles %>"]
            },
            options: {
                "indent": 4,
                "strict": false,
                "browser": true,
                "devel": true,
                "asi": true,
                "curly": true,
                "noarg": true,
                "quotmark": "double",
                "undef": true,
                "unused": true,
                "globalstrict": true,
                "globals": {
                      "angular": true
                }
            }
        },

        jasmine: {
            options: {
                specs: ["tests/unit/**/*.js"],
                keepRunner: true
            },
            development: {
                src: ["<%= config.applicationFiles %>"],
                options: {
                    vendor: ["<%= config.vendorFiles %>"]
                }
            },
            stage: {
                src: ["<%= config.outputDir %>/js/app.js"]
            },
            production: {
                src: ["<%= config.outputDir %>/js/app.min.js"]
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
            },
            dist: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "tests/e2e/protractor.conf.js", // Target-specific config file
                }
            }
        },

        protractor_webdriver: {
            dist: {}
        },

        concat: {
            options: {
                separator: ";"
            },
            dist: {
                src: ["<%= config.vendorFiles %>", "<%= config.applicationFiles %>"],
                dest: "<%= config.outputDir %>/js/app.js"
            }
        },

        uglify: {
            options: {
                mangle: true,
                compress: {
                    drop_console: true
                },
                enclose: {}
            },
            dist: {
                files: {
                    "<%= config.outputDir %>/js/app.min.js": ["<%= config.outputDir %>/js/app.js"]
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
                src: ["<%= config.outputDir %>", "docs"]
            },
            afterBuild: {
                src: ["<%= config.outputDir %>/js/app.js"]
            }
        },

        processhtml: {
            options: {
                data: {
                    message: "processing 'index.html' file"
                }
            },
            stage: {
                files: {
                    "<%= config.outputDir %>/index.html": ["app/index.html"]
                }
            },
            production: {
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

    grunt.registerTask("build:production", [
        "clean:beforeBuild",
        "jshint",
        "minify",
        "jasmine:production",
        "less:production",
        "copy",
        "processhtml:production",
        "yuidoc",
        "clean:afterBuild"
    ]);

    grunt.registerTask("build:stage", [
        "clean:beforeBuild",
        "jshint",
        "concat",
        "jasmine:stage",
        "less:stage",
        "copy",
        "processhtml:stage",
        "yuidoc"
    ]);

    grunt.registerTask("minify", [
        "concat",
        "uglify"
    ]);

    grunt.registerTask("server", [
        "less:development",
        "connect:server",
        "watch:css"
    ]);

    grunt.registerTask("serverjs", [
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

    grunt.registerTask("default", ["build:production"]);
    grunt.registerTask("release", ["build:production"]);

};
