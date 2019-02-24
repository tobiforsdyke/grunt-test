module.exports = function(grunt) {

  const sass = require('node-sass');

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        outputStyle: 'expanded'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/sass/',
          src: '**/*.scss',
          dest: 'assets/css/',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

};
