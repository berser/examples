var fs = require('fs');

fs.readdir(process.cwd(), function(err, files){
  var stats = [];
  console.log('');

  if(!files.length){
    return console.log(' \033[31m No hay archivos que mostrar \033[39m\n');
  }

  console.log('  Selecciona que archivo o directorio deseas ver');

  function file(index){
    var filename = files[index];

    fs.stat(__dirname + '/' +filename, function(err, stat){
      stats[index] = stat;

      if(stat.isDirectory()){
        console.log('  ' + index + ' \033[36m' + filename + '\033[39m');
      }else{
        console.log('  ' + index + ' \033[90m' + filename + '\033[39m');
      }

      index++;

      if(index === files.length){
        read();
      }else{
        file(index);
      }

    });
  }

  function read(){
     console.log('');
      process.stdout.write(' \033[33m Ingresa tu seleccion \033[39m\n');
      process.stdin.resume();
      process.stdin.setEncoding('utf8');

      process.stdin.on('data', option);
  }

  function option(data){
    var filename = files[Number(data)];
    if(!filename){
      process.stdout.write(' \033[33m Ingresa tu seleccion \033[39m\n');
    }else{
      process.stdin.pause();
      var stat=  stats[Number(data)];

      if(stat.isDirectory()){
        fs.readdir(__dirname + '/' + filename, function(err, files){
          console.log('');
          files.forEach(function(file){
            console.log(' - ' + file);
          });
        });
      }else{
        fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
        console.log('');
        console.log(data);
      });  
      }
    }
  }

  file(0);

});