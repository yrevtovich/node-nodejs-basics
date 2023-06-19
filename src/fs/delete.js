import { access, rm } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';


const FILE_NOT_EXIST_ERROR = 'FS operation failed';
const FILE_NAME = 'fileToRemove.txt';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);
  const filesPath = path.resolve(dirname, './files');
	const fileName = path.resolve(filesPath, FILE_NAME)

	try {
		await access(fileName)
		await rm(fileName)
	} catch {
		console.log(FILE_NOT_EXIST_ERROR)
		return;
	}
};

await remove();