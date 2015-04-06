'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'app',
		dist: 'dist',

		sass: {
			options: {
				includePaths: ['<%= app %>/bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'<%= app %>/css/raw.css': '<%= app %>/scss/app.scss'
				}
			}
		},



		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= app %>/js/**/*.js'
			]
		},

		clean: {
			dist: {
				src: ['<%= dist %>/*']
			},
		},
		// copy: {
		// 	dist: {
		// 		files: [{
		// 			expand: true,
		// 			cwd:'<%= app %>/',
		// 			src: ['fonts/**', '**/*.html', '!**/*.scss', '!bower_components/**'],
		// 			dest: '<%= dist %>/'
		// 		}]
		// 	},
		// },

		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= app %>/images/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: '<%= dist %>/images/'
				}]
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
				mangle: false
			}
		},

		// Autoprefixer
	    autoprefixer: {
	        options: {
	            browsers: ['last 2 versions']
	        },
	        // dist: {
         //        files: {
         //            'raw.css': 'app.css'
         //        }
         //    }
	        single_file: {
		      options: {
		        // Target-specific options go here.
		      },
		      src: '<%= app %>/css/raw.css',
		      dest: '<%= app %>/css/app.css'
		    },

	        // dist: {
	        //     files: [{
	        //         expand: true,
	        //         src: '<%= app %>/css/app.css',
	        //         dest: '<%= dist %>/css/prefix/app.css'
	        //     }]
	        // }
	    },

		useminPrepare: {
			html: ['<%= app %>/index.html'],
			options: {
				dest: '<%= dist %>'
			}
		},

		usemin: {
			html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
			css: ['<%= dist %>/css/**/*.css'],
			options: {
				dirs: ['<%= dist %>']
			}
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['sass']
			},
			sass: {
				files: '<%= app %>/scss/**/*.scss',
				tasks: ['sass']
			},
			livereload: {
				files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
				options: {
					livereload: true
				}
			},
			styles: {
                files: ['<%= app %>/css/raw.css'],
                tasks: ['autoprefixer']
            }
		},

		connect: {
			app: {
				options: {
					port: 9000,
					base: '<%= app %>/',
					open: true,
					livereload: true,
					hostname: '127.0.0.1'
				}
			},
			dist: {
				options: {
					port: 9000,
					base: '<%= dist %>/',
					open: true,
					keepalive: true,
					livereload: false,
					hostname: '127.0.0.1'
				}
			}
		},

		wiredep: {
			target: {
				src: [
					'<%= app %>/**/*.html'
				],
				exclude: [
					'modernizr',
					'jquery-placeholder',
					'foundation'
				]
			}
		}

	});


	grunt.registerTask('compile-sass', ['sass']);
	grunt.registerTask('autoprefix', ['autoprefixer']);
	grunt.registerTask('bower-install', ['wiredep']);
// 'bower-install',
	grunt.registerTask('default', ['compile-sass', 'connect:app', 'watch']);
	grunt.registerTask('validate-js', ['jshint']);
	grunt.registerTask('server-dist', ['connect:dist']);

	grunt.registerTask('publish', ['compile-sass', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin']);

};
