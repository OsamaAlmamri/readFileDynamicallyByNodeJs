var mime=require('mime');

var fs = require('fs');
function getFileExtension(filename) {
    return filename.split('.').pop();
    // return filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
}

function readFile(filePath,res){
    fs.readFile(filePath, function (err, data) {
        if (err) {
            handleError(err, res);
            return;
        } else {
            // mime.getType('txt');
            // var dataType=getFileExtension(filePath);
            var dataType= filePath.split('.').pop();

            res.setHeader('Content-Type',	mime.getType(dataType));
            // res.write(mime.getType(dataType));
            res.end(data);
            // res.end(mime.getType(dataType));

        }
    });

}

module.exports=readFile;