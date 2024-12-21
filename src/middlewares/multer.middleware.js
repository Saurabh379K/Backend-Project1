import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
        // generally it is not a good practice to store the file with original name due to files having duplicate names
        // it is advised to add a custom suffix after each file name to make it unique
    }
})

export const upload = multer({storage})