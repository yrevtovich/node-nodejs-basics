import { access, readFile} from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const FOLDER_NOT_EXIST_ERROR = 'FS operation failed';
const FILE_NAME = 'fileToRead.txt';

const read = async () => {
	const __filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(__filename);
  const filesFolderPath = path.resolve(dirname, './files');
  const filePath = path.resolve(filesFolderPath, FILE_NAME)

  try {
		await access(filePath);
		const fileContent = await readFile(filePath, 'utf8')
		console.log(fileContent)
	} catch {
		console.log(FOLDER_NOT_EXIST_ERROR);
	}
};

await read();