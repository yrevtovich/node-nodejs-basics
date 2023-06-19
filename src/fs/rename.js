import { access, rename as fsRename } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const FOLDER_NOT_EXIST_ERROR = 'FS operation failed';
const WRONG_FILE_NAME = 'wrongFilename.txt';
const PROPER_FILE_NAME = 'properFilename.txt';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);
  const filesFolderPath = path.resolve(dirname, './files');
  const wrongNameFilePath = path.resolve(filesFolderPath, WRONG_FILE_NAME)
  const properNameFilePath = path.resolve(filesFolderPath, PROPER_FILE_NAME)

  try {
		await access(properNameFilePath);
		throw new Error(Err);
	} catch (error) {
		if (error.message === FOLDER_NOT_EXIST_ERROR) {
			console.log(FOLDER_NOT_EXIST_ERROR);
			return;
		}
	}

	try {
		await access(wrongNameFilePath);
	} catch {
		console.log(FOLDER_NOT_EXIST_ERROR);
		return;
	}

	const fileContent = await fsRename(wrongNameFilePath, properNameFilePath)
};

await rename();