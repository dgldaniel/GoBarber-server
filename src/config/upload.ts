import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const tmpfolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpfolder,
  uploadsFolder: path.resolve(tmpfolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpfolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
