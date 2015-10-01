/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
          {
            width: 1980,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1920,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1460,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1345,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1320,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 660,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 540,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1170,
            suffix: '_1x',
            quality: 30
          },
          {
            width: 960,
            suffix: '_1x',
            quality: 30
          },
          {
            width: 730,
            suffix: '_1x',
            quality: 30
          },
          {
            width: 660,
            suffix: '_1x',
            quality: 30
          },
          {
            width: 330,
            suffix: '_1x',
            quality: 30
          },
          {
            width: 270,
            suffix: '_1x',
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'image_sources/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
