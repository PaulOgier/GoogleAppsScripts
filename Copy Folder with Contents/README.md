# 🎓 Master Google Workspace
If you find this script useful and want to become a power user of the entire Google ecosystem, check out this comprehensive course on Udemy!

[Complete Google Workspace (G Suite), Beginner - Advanced](https://www.taming.tech/TheCompleteWorkspaceCourse)

Welcome to the Complete Google Workspace (G Suite) Course, covering Google Docs, Google Sheets and Google Sheets Advanced topics, Google Slides, Google Calendar, Google Drive, Gmail, Google Forms, Google Meet etc.


# Google Drive Folder Copier Script
A simple and effective Google Apps Script to recursively copy a Google Drive folder, including all its subfolders and files. This is useful for creating backups, duplicating project templates, or archiving folder structures. 📂➡️📂

The script preserves the entire folder hierarchy of the source, recreating it in a new destination folder.

## 🚀 Features
Recursive Copy: Duplicates the entire folder tree, including all nested subfolders.

File Duplication: Copies all files from the source folder and its subfolders to the new destination.

Easy Configuration: Simply set the source folder ID, destination folder ID, and the new folder's name in the script.

Flexible Destination: The destination can be your 'My Drive' root, any specific folder, or even a folder within a Shared Drive.

Progress Logging: Provides detailed logs in the Apps Script execution log, showing which folders and files are being created and copied.

Error Handling: Includes basic try...catch blocks to log errors if a specific file cannot be copied, allowing the script to continue with the remaining items.

## 🛠️ How to Use
Follow these steps to set up and run the script in your Google account.

Open Google Apps Script: Go to script.google.com and create a New project.

Paste the Code: Delete any default code in the editor and paste the entire copyFolderWithContents.gs script.

Configure the Script: In the code, update the three configuration variables at the top of the copyFolderWithContents function:

JavaScript
// --- Configuration ---
const sourceFolderId = 'REPLACE_WITH_SOURCE_ID'; // The ID of the folder you want to copy
const destinationParentFolderId = 'REPLACE_WITH_DESTINATION_ID'; // Where you want the new folder to be placed. Use 'root' for My Drive.
const newFolderName = 'New Folder Name'; // The name of the new copied folder
// --- End Configuration ---
Tip: To find a folder's ID, open the folder in Google Drive. The ID is the last part of the URL. For example, in https://drive.google.com/drive/folders/1KXyOC6Go6mvcBreQk2qzzp3Pd31S-jl, the ID is 1KXyOC6Go6mvcBreQk2qzzp3Pd31S-jl.

Save the Project: Click the Save project icon (💾).

## Run the Function:

From the function dropdown menu at the top, select copyFolderWithContents.

Click the Run button.

Authorize Permissions: The first time you run the script, a pop-up will ask for permission to manage your Google Drive files. You must grant these permissions for the script to work.

Check the Logs: You can view the script's progress by going to View > Executions. This will show you a log of all the folders and files being copied.

When the script finishes, you will find your newly created folder in the destination you specified.

⚠️ Important Notes
Execution Time: Copying folders with a large number of files or deep subfolder structures can take a long time. Google Apps Scripts have a maximum execution time of 6 minutes for consumer accounts and 30 minutes for Google Workspace accounts. For very large folders, the script may time out.

Ownership: The user running the script will become the owner of the newly created folders and the copied files.

Permissions: The script does not copy the sharing permissions of the original files and folders. All new items will have default permissions.