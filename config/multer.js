
const multer = require("multer")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


module.exports = upload;


// muter js ka code hai