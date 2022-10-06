import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + (Math.floor(Math.random() * 1000000)) + file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/JPG" ||
        file.mimetype === "image/PNG" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/JPEG"
    ) {
        cb(null, true)
    } else {
        cb(null, false);
    }
}



const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 2048000
    }
});


export default upload;