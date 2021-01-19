# BSI Secvisogram CSAF 2.0 Web Editor

TODO: Chapter aus der Leistungsbeschreibung anskizzieren.

## The basic concept of Secvisogram

Similar to the Vulnogram model, the web application consists of various tabs that represent the individual views. These are represented as an HTML page which loads its data from a local browser storage using JavaScript.
On the "Editor" and "Source" views, where it is possible to change the data, there is a "Save" button that transfers the customized data from the respective form to the local browser memory. When the application is reloaded (browser refresh), the data is thus retained.
To start a new document after saving, either a "New" button must be pressed or an "Open" button must be used to select and load a local file.
When leaving a view without saving (e.g. clicking on another application tab or reloading the application) a warning is displayed and users have to confirm leaving the page.

### The individual views

The "Editor" view is an HTML form with primarily client-side input validation (https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation). In addition, the language fields in the form are checked for plausibility against the values from the IANA database and the CVSS 3 input fields are completed with the data from a possibly copied vector string and this is recalculated. This gives the user an elegant way to use a possibly existing and copied CVSS 2.0 vector and to partially adjust the values.
A special input field is the "cwe" attribute. Here you can search the CWE catalog (XML file) by entering a value in the "id" or "name" field. For this purpose, a list with the first ten entries matching the input opens under the respective input field, from which a suitable entry can be selected and accepted.
Simple input errors are displayed directly at the respective form field. Errors that occur during the input check when saving are listed at the top of the form.

The **source-view** uses the ACE editor to edit the data in the local browser storage, just like the Vulnogram example.

The **advisory**, **HTML** and **CSAF-JSON** views do not include any editing functions and simply display the data stored in local browser storage.

Thus, there are four ways to modify the data of a CSAF 2.0 document in the local browser storage:

- Create a new document
- Load a file
- Saving the editor-view
- Saving the source-view

### Libraries used

#### AJV for JSON schema validation

To validate the input data against the JSON schema the package "ajv" is used.

#### Typescript

Typescript is used to type and document the source code. This means, for example, that variables that can be used in templates are directly documented and statically checked. But typescript is not used as a language but as a type-checker only, which means that types are declared using source-code comments. This keeps the configuration of related tools simpler.

#### React

React is used to implement the views. This JavaScript library is suitable for mapping data structures to the DOM in the browser and keeping it synchronized when the structure changes. In doing so, it offers an easily customizable template language. In addition, React prevents the accidental insertion of executable code in the DOM and therefore already offers basic protection against cross-site scripting.

# Development environment

## Installation

This repository includes git submodules for vendor modules like Ace. Make sure to initialise and check them out before interactive with the repository.

    git submodule update --init

Afterwards the npm dependencies need to be installed.

    npm ci

## Starting

    npm run dev

The application is now running on http://localhost:8080.

## Testing

There are two different types of tests in this system.

### Mocha Tests

On the one hand **Mocha tests** are used, which are located in the folder "tests". They are to test logic of the application. In the console they can be executed with the following command:

    npm test

### View Tests

On the other hand, there are the **viewTests** in the folder of the same name. Once you have started the system as described above, you can view the tests at the following URL:

http://localhost:8080/view-tests.html

On this page, there is a drop-down menu in the footer that can be used to select the respective test.

## Folder structure scheme

Source files may only access folders that have the same name as themselves and are located at the same file level. Exception are the so-called "shared" folders. They may be used if they are located on the same or higher file level.

It is not allowed to reach in any deeper file level than one.
