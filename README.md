el plugins onchange en windows.\
"watch:scss": "onchange \"css/*.scss\" -- npm run scss",\
el plugins onchange en linux\
"watch:scss": "onchange "css/*.scss" -- npm run scss",\
en useminPrepare solo debe tener index.html\
"useminPrepare: {
        foo: {
          dest: 'dist',
          src: ['index.html']
        }, ...."

// ------------------------------------------- //

npm install -g grunt\
npm install -g grunt-cli\
npm install grunt-contrib-sass --save-dev\
npm install load-grunt-tasks --save-dev\

para correr una tarea con grunt en windows\
https://github.com/gruntjs/grunt-contrib-sass\

instalar ruby, verificar si esta instalado.\
e instalar sass, "gem install sass"\


// ------------------------------------------- //
en gulp...\
gulp.task('sass', async function() {
	//code...
});\
	or\	 
gulp.task('sass', done => {
	//code...
done();
});\


gulp.task('default', gulp.parallel('browser-sync'), function() {
 	//code...
});\


gulp.task('build',gulp.parallel('clean','copyfonts','imagemin','usemin'))\

// ---------------------------------------------- //

Para correr la aplicación\
npm run start\
