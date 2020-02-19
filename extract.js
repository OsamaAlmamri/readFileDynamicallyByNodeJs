var path = require('path');

var extractFilePath = function (url) {

    // var fileName = 'index.html';
    var fileName = 'conan.mp3';
    if (url.length > 1) {
        fileName = url.substring(1);
    }
    console.log('Then fileName is: ' + fileName);
    filePath = path.resolve(__dirname, 'app', fileName);
    return	filePath;
};

module.exports=extractFilePath;
