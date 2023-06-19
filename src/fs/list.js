import { access, readdir, mkdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const FOLDER_NOT_EXIST_ERROR = 'FS operation failed';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);
  const filesPath = path.resolve(dirname, './files');

	try {
		await access(filesPath);
		const files = await readdir(filesPath)
		console.log(files)
	} catch {
		console.log(FOLDER_NOT_EXIST_ERROR);
	}
};

await list();