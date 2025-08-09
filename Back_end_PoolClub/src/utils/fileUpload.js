const multer = require('multer');
const path = require('path');
const sharp = require('sharp');

//Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/tournaments');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'tournament-' + uniqueSuffix + path.extname(file.originalname));
    }
});

//File filter
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

//Process and resize image
const processImage = async (file) => {
    try {
        const filename = 'tournament-' + Date.now() + '.webp';
        const filePath = path.join('public/images/tournaments', filename);

        await sharp(file.path)
            .resize(800, 600, {fit: 'cover'})
            .toFormat('webp', { quality: 80 })
            .toFile(filePath);

        return `/images/tournaments/${filename}`;
    } catch (err) {
        console.error('Image processing error:', err);
        throw new Error('Failed to process image');
    }
};

module.exports = {
    upload,
    processImage
};