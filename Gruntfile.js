module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'sources/<%= pkg.name %>-<%= pkg.version %>.min.js': ['sources/<%= pkg.name %>-<%= pkg.version %>.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', '<%= pkg.name %>-<%=pkg.version %>.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint', 'uglify']);
};
