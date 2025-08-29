function copyFolderWithContents() {
// --- Configuration ---
const sourceFolderId = '1KXyOC6Go6mvcBreQk2qzzp3Pd31S-jl'; // Replace with the ID of the folder you want to copy
const destinationParentFolderId = '1BLaULn55y-amcdiGx_REF4Kteb112f6y'; // Replace this with the ID or 'root' where you want it copied to. This can be under the Shared Drives as well
const newFolderName = 'New Folder Name'; // Update this with the new folder name
// --- End Configuration ---

if (!sourceFolderId) {
Logger.log('Error: Source folder ID is not set. Please set the "sourceFolderId" variable in the script.');
return;
}

if (!destinationParentFolderId) {
Logger.log('Error: Destination parent folder ID is not set. Please set the "destinationParentFolderId" variable in the script.');
return;
}

try {
const sourceFolder = DriveApp.getFolderById(sourceFolderId);
let destinationParentFolder;

if (destinationParentFolderId.toLowerCase() === 'root') {
destinationParentFolder = DriveApp.getRootFolder();
} else {
destinationParentFolder = DriveApp.getFolderById(destinationParentFolderId);
}

// Check if source and destination parent folders are valid
if (!sourceFolder) {
Logger.log('Error: Could not find source folder with ID: ' + sourceFolderId);
return;
}
if (!destinationParentFolder) {
Logger.log('Error: Could not find destination parent folder with ID: ' + destinationParentFolderId);
return;
}

const newFolder = destinationParentFolder.createFolder(newFolderName);
Logger.log('Created new folder: "%s" (ID: %s) in "%s"', newFolder.getName(), newFolder.getId(), destinationParentFolder.getName());

copyFolderContentsRecursive(sourceFolder, newFolder);

Logger.log('Folder copy process complete! Copied folder ID: %s. Copied folder name: %s', newFolder.getId(), newFolder.getName());

} catch (e) {
Logger.log('Error during folder copy: ' + e.toString() + ' Stack: ' + e.stack);
}
}

function copyFolderContentsRecursive(sourceFolder, destinationFolder) {
// Copy files in the current source folder
const files = sourceFolder.getFiles();
while (files.hasNext()) {
const file = files.next();
try {
file.makeCopy(file.getName(), destinationFolder);
Logger.log('Copied file: "%s" to folder: "%s"', file.getName(), destinationFolder.getName());
} catch (e) {
Logger.log('Error copying file "%s" (ID: %s): %s. Skipping this file.', file.getName(), file.getId(), e.toString());
// Optional: Add more robust error handling, e.g., skip file, retry, etc.
}
}

// Recursively copy subfolders
const subfolders = sourceFolder.getFolders();
while (subfolders.hasNext()) {
const subSourceFolder = subfolders.next();
const newSubFolder = destinationFolder.createFolder(subSourceFolder.getName());
Logger.log('Created subfolder: "%s" in "%s"', newSubFolder.getName(), destinationFolder.getName());
copyFolderContentsRecursive(subSourceFolder, newSubFolder); // Recursive call
}
}