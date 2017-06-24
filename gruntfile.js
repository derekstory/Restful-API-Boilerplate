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
				tasks: ['concurrent:browserify']
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
			application: {
				src: ['views/**/*.js', 'views/**/*.handlebars'],
				dest: 'build/application.js',
				options: {
					transform: ['hbsfy']
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

		// Compress JS into a .min.js file for production
		uglify: {
			my_target: {
				files: {
					'public/js/application.min.js': 'build/application.js'
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

		// Run some task simultaniously
		concurrent: {
			dev: {
				tasks: ['nodemon:dev', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			},
			browserify: {
				tasks: ['browserify:application'],
			}
		}

	});

	// Build the Production (needs work) by "grunt build:prod"
	grunt.registerTask('build:prod', ['sass', 'concurrent:browserify', 'uglify', 'imagemin', 'delete_sync']);

	// Start server and development by command "grunt server"
	grunt.registerTask('build:dev', ['sass', 'concurrent:browserify', 'imagemin', 'delete_sync']);
	grunt.registerTask('server', ['build:dev', 'concurrent:dev']);

};
