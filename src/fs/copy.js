import { access, readdir, mkdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const FOLDER_EXIST_ERROR = 'FS operation failed';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const  dirname = path.dirname(__filename);
  const sourcePath = path.resolve(dirname, './files');
  const destinationPath = path.resolve(dirname, './files_copy')

	try {
		await access(destinationPath)
		throw new Error(FOLDER_EXIST_ERROR)
	} catch (error) {
		if (error.message === FOLDER_EXIST_ERROR) {
			console.log(error.message)
			return
		}
	}

	try {
		await mkdir(destinationPath)
		const files = await readdir(sourcePath)

		files.forEach((file) => {
			copyFile(path.resolve(sourcePath, file), path.resolve(destinationPath, file))
		})

	} catch {}
};

await copy();
