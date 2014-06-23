module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    sourceMap: false
                },
                build: {
                    files: {
                        'js/app.min.js': ['js/ayatel.js', 'js/tvguide.js','js/noticias.js','js/rutas.js'],
                    }
                }
            }   
        
    });

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['uglify']);

};
