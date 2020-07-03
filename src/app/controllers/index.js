const fs = require('fs');
const path = require('path');

function checkIsDirectory(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        return false;
    }
}

async function readControllers(app, dirname) {
    fs
        .readdirSync(dirname)
        .filter(item => ((item.indexOf('.') !== 0 && (item != 'index.js'))))
        .forEach(item => {
            const isDirectory = checkIsDirectory(dirname + "/" + item);
            if (isDirectory) {
                readControllers(app, dirname + "/" + item)
            } else {
                require(path.resolve(dirname, item))(app);
            }
        });
}

module.exports = app => {
    readControllers(app, __dirname);
};

// const fs = require('fs');
// const path = require('path');

// module.exports = app => {
//     fs
//         .readdirSync(__dirname)
//         .filter(file => ((file.indexOf('.') !== 0 && (file != 'index.js'))))
//         .forEach(file => require(path.resolve(__dirname, file))(app));
// };