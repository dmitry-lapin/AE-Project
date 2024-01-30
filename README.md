
# SCENARIO GENERATOR

## Abstract project behavior:

My project is a system designed to manage and process scripts. The project is divided into several modules and components that provide the user with the following functions:

- Creating and editing scripts: The user can create new scripts, edit them and delete them using the application's graphical interface. Each script consists of a set of filters that are applied to JSON data.

- Adding and Managing Filters: To create scripts, the user can add filters by specifying a key, comparison operator, and value. Filters can be added, modified and deleted.

- Saving scripts: The user can save created scripts in a database or file. This allows scripts to be saved and reused.

- Loading scripts from the database: The user can load scripts from the database and also delete them if necessary.

- Applying filters to JSON data (Objects): Scripts can be applied to JSON data and the result will be an array of boolean values that reflect whether the data passed the filters successfully.

- Scenario testing: Ability to test scenarios on various objects and analyze the results. If all boolean values are true (in case isTested is set to true), then the script is considered successful.

- User Interface: The project provides a user interface with various forms and elements to interact with the application.

## Repository contents:

The repository contains the following files and folders:

- public: Folder with with index.html and manifest.json basic settings.

- src: Folder with the project's source code, divided into modules and components.
- - tests: Folder with unit tests to test the functionality of the application.
- - modules: Main folder with all components that are used in a project.
- - reducers: Folder with all slices (Redux Toolkit) that are used in a project. 
- - store: main slices storage, what keeps all data, that are proceed by RTK.
- README.md: The file you are reading now contains an overview of the project and instructions for installing and using it.
- package.json: File with dependencies and project settings for installation via npm.
- firebase.config.js: Configuration file for connecting to Firebase, used for storing data.

## Installation and use instructions:

Install the dependencies by running npm install in the project root folder.
Start the project using the npm start command.
Open the application in your web browser and start creating, editing and testing scripts.