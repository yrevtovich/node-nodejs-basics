
import { writeFile, access } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const FILE_EXIST_ERROR = 'FS operation failed';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);
  const filesPath = path.resolve(dirname, './files');
	const fileName = path.resolve(filesPath, FILE_NAME)

	try {
		await access(fileName)
		throw new Error(FILE_EXIST_ERROR)
	} catch (error) {
		if (error.message === FILE_EXIST_ERROR) {
			console.log(FILE_EXIST_ERROR)
			return;
		}
	}

	await writeFile(fileName, FILE_CONTENT)
};

await create();