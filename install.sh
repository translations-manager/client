browserify -t [ babelify --presets [ react ] ] src/main.js | uglifyjs > web/app.js && lessc style/main.less | uglifycss > web/app.css
