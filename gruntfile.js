module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Run specific task for changes made to specific files
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['views/**/*.js', '**/*.handlebars'],
                tasks: ['concurrent:browserify', 'concat']
            },
            css: {
                files: ['resources/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['**/*.handlebars'],
            },
            images: {
                files: ['resources/**/*.{png,jpg,gif}'],
                tasks: ['imagemin', 'delete_sync']
            }
        },

        // Allow for require(template) usage.
        browserify: {
            vendor: {
                src: ['views/**/*.js', 'views/**/*.handlebars'],
                dest: 'build/vendor.js',
                options: {
                    transform: ['hbsfy']
                }
            },
            app: {
                /*
                files: {
                    'build/app.js': ['client/src/main.js']
                },
                */
                handlebars: {
                src: 'views/**/*.handlebars',
                dest: 'build/app.js'
                },
                options: {
                    transform: ['hbsfy'],
                }
            }
        },

        // SASS - compile into public/stylesheets
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/stylesheets/style.css': 'resources/sass/style.scss'
                }
            }
        },

        // Combine vendor/app builds into one file
        concat: {
            'build/application.js': ['build/vendor.js', 'build/app.js'],
        },

        // Compress JS into a .min.js file for production
        uglify: {
            my_target: {
                files: {
                    'build/application.min.js': 'build/application.js'
                }
            }
        },

        // Compress images and put in public folder
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'resources/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img/'
                }]
            }
        },

        // Delete images in public if they do not exist in resources
        delete_sync: {
            dist: {
                cwd: 'public/img/',
                src: ['**/*.{png,jpg,gif}'],
                syncWith: 'resources/img/'
            }
        },

        // Restart the server if changes to the node code
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    ignore: ['views/**/*.js', 'build/**/*.js']
                }
            }
        },

        // Start the DB
        shell: {
            mongo: {
                command: 'mongod',
                options: {
                    async: true
                }
            }
        },

        // Run some task simultaniously
        concurrent: {
            dev: {
                tasks: ['shell:mongo', 'nodemon:dev', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            },
            browserify: {
                tasks: ['browserify:app', 'browserify:vendor'],
            }
        }

    });

    // Build the Production (needs work)
    grunt.registerTask('build:prod', ['sass', 'concurrent:browserify', 'concat', 'uglify', 'imagemin', 'delete_sync']);

    // Start server and development by command "grunt server"
    grunt.registerTask('build:dev', ['sass', 'concurrent:browserify', 'concat', 'imagemin', 'delete_sync']);
    grunt.registerTask('server', ['build:dev', 'concurrent:dev']);

};
