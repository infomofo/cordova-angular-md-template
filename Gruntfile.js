// Generated on 2014-11-16 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    cordova: 'cordova',
    appName: 'YoAngularCordova'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    bower: {
      install: {
        options: {
          targetDir: './bower_components',
          copy: false,
          cleanTargetDir: true
        }
        //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        exclude: [
          'bower_components/bootstrap/dist/js/bootstrap.js'
          //'bower_components/jquery/dist/jquery.js'
        ],
        ignorePath:  /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'template/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/font-awesome',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    shell: {
      cordovaClean: {
        command: 'rm -Rf <%= yeoman.cordova %>'
      },
      cordovaCreate: {
          command: 'cordova create <%= yeoman.cordova %> com.sample.<%= yeoman.appName %> "<%= yeoman.appName %>" --copy-from=<%= yeoman.dist %>'
      },
      cordovaPrepare: {
          command: 'cordova prepare',
          options: {
              stderr: false,
              execOptions: {
                  cwd: '<%= yeoman.cordova %>'
              }
          }
      },
      cordovaInstallPlugins: {
        command: 'cordova plugin add https://github.com/j-mcnally/cordova-statusTap',
        options: {
          stderr: false,
          execOptions: {
            cwd: '<%= yeoman.cordova %>'
          }
        }
      },
      cordovaPlatformInstallAndroid: {
          command: 'cordova platform add android',
          options: {
              stderr: false,
              execOptions: {
                  cwd: '<%= yeoman.cordova %>'
              }
          }
      },
      cordovaPlatformInstallIos: {
        command: 'cordova platform add ios',
        options: {
          stderr: false,
          execOptions: {
            cwd: '<%= yeoman.cordova %>'
          }
        }
      },
      cordovaBuild: {
        command: 'cordova build',
        options: {
          stderr: false,
          execOptions: {
            cwd: '<%= yeoman.cordova %>'
          }
        }
      }
    }
  });

  //var xpath = require('xpath');
  var DOMParser = require('xmldom').DOMParser;
  grunt.registerTask('addCordovaPreferences', function(){
    var cordovaConfig = appConfig.cordova + '/config.xml';
    var xml = grunt.file.read(cordovaConfig);
    var doc = new DOMParser().parseFromString(xml);

    var node = doc.getElementsByTagName('widget')[0];

    //var author = node.getElementsByTagName("author")[0];
    //author.setAttribute('email','contact@example.com');
    //author.setAttribute('href','http://example.com');
    //author.nodeValue='contact@example.com';

    // grunt.log.writeln('Adding to: ' + node);
    var KeyboardShrinksView = doc.createElement('preference');
    KeyboardShrinksView.setAttribute('name', 'KeyboardShrinksView');
    KeyboardShrinksView.setAttribute('value', true);
    grunt.log.writeln('Adding: ' + KeyboardShrinksView);
    node.appendChild(KeyboardShrinksView);

    var StatusBarOverlaysWebView = doc.createElement('preference');
    StatusBarOverlaysWebView.setAttribute('name', 'StatusBarOverlaysWebView');
    StatusBarOverlaysWebView.setAttribute('value', false);
    grunt.log.writeln('Adding: ' + StatusBarOverlaysWebView);
    node.appendChild(StatusBarOverlaysWebView);

    var StatusBarBackgroundColor = doc.createElement('preference');
    StatusBarBackgroundColor.setAttribute('name', 'StatusBarBackgroundColor');
    StatusBarBackgroundColor.setAttribute('value', '#388E3C'); // Should be the 700 color for your main color http://www.google.com/design/spec/style/color.html#color-color-palette
    grunt.log.writeln('Adding: ' + StatusBarBackgroundColor);
    node.appendChild(StatusBarBackgroundColor);

    var KeyboardDisplayRequiresUserAction = doc.createElement('preference');
    KeyboardDisplayRequiresUserAction.setAttribute('name', 'KeyboardDisplayRequiresUserAction');
    KeyboardDisplayRequiresUserAction.setAttribute('value', false);
    grunt.log.writeln('Adding: ' + KeyboardDisplayRequiresUserAction);
    node.appendChild(KeyboardDisplayRequiresUserAction);

    var DisallowOverscroll = doc.createElement('preference');
    DisallowOverscroll.setAttribute('name', 'DisallowOverscroll');
    DisallowOverscroll.setAttribute('value', true);
    grunt.log.writeln('Adding: ' + DisallowOverscroll);
    node.appendChild(DisallowOverscroll);

    grunt.file.write(cordovaConfig, doc);
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'bower:install',
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'bower:install',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    // 'test',
    'cordova'
  ]);

  grunt.registerTask('cordova',
    [
      'build',
      'shell:cordovaClean',
      'shell:cordovaCreate',
      'addCordovaPreferences',
      'shell:cordovaPlatformInstallAndroid',
      'shell:cordovaPlatformInstallIos',
      'shell:cordovaInstallPlugins',
      'shell:cordovaBuild'
    ]);
};
