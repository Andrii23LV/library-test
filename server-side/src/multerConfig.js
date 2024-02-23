import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIR = path.join(__dirname, '.', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(DIR)) {
            fs.mkdirSync(DIR);
        }
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const { id } = req.params;

        fs.readdir(DIR, (err, files) => {
            if (err) {
                throw err;
            } else if (files.length > 0) {
                files.forEach((file) => {
                    if (file.startsWith(`${id}-`)) {
                        fs.unlink(`${DIR}/${file}`, (error) => {
                            if (error) {
                                throw error;
                            }
                        });
                    }
                });
            }
        });

        const originalName = file.originalname;
        const fileExtension = originalName.split('.').pop();
        const fileName = `${id}-${Date.now()}.${fileExtension}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

export default upload.single('image');
