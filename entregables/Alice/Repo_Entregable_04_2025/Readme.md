# 🌦️​ Juliet The Weather (mascot) 🌦️

**Welcome to Juliet The Weather mascot**

## 🖊️​ About this project, inception of the project

This project was originally inspired by both a latent lack of time to perform a complete JS project and
[this video by Nashallery](https://www.youtube.com/watch?v=4TODW-IP4XM) in which she creates essentially the same project. 

Since this was viewed like a more creative project it was favored. It was intended to explore Electron technology and the usage of weather APIs.

*Sadly, due to time constraints, the current state of the project remains undesiredly unfinished.*

## 🔧​ Installation and configuration

You may install the [Alpha v0.1.1 Release](https://github.com/w0nd3rl4nd/JulietTheWeatherJS/releases/tag/v0.1.1-alpha) of this project on the following link, though it is not adviced.

Currently, in order to be able to customise weather location, please refer to [Development Instructions](#-development-instructions) in order to modify your desired location and compile into executable.

## 🪦​ User experience unmet goals and planned changes
Due to time constraints, this User Experience items have been postponed:
* Visual mascot
* Mascot animation
* Mascot mood based on weather
* Expanded weather (thunderstorm and others)
* Visual config
* Audio
* Timer option

## 🪦​ Technical unmet goals and planned changes
Due to time constraints, this technical items have been postponed:
* Path to config file
* Hard code cleanup
* Removal of configuration redundancies
* Streamlining configuration pipeline
* Enabling configuration by city name (if recognisable fetch coordinates else fallback to coordinates)

## 💡 Project prospect
It is proposed to keep the development of this project after the ending of this course up to an acceptable product that includes all the aforementioned changes.

## 💻​ Development instructions

This section will underline the steps and requirements in order to 

### 🪛 Dev Install

1. Download the repository into a folder
2. Install dependencies: `npm install`
3. Run with `npm run start`

In order to enable testing mode, mark ```testing``` as true in ```./weatherconfig.json```.

```
    ...
    },
    "testing": true //Set as true
  }
```

This configuration will enable a separate window with the *Dev tools* and also enable visual debugging.

---

### 📌​ Customise Location

In order to customise location, refer to the ```weatherconfig.json``` file. In here, we will find the following structure:

```
{
    "location": {
      "city": "Ripollet",
      "latitude": 41.4985,
      "longitude": 2.1565
    },

    "testing": false
  }
```

Currently, location **must be set** by editing ```latitude``` and ```longitude``` separately. The parameter ```city``` has no effect yet.

---

### 🧱 Build for Windows x64

In order to build the project with your hardcoded location and install it on windows, follow these steps:

1. Perform all steps in [Development Installation](#-dev-install) 

2. Run ```npm run make``` and wait for completion

3. Access the newly created folder structure ```.\out\make\squirrel.windows\x64\JulietTheWeatherJS-Setup.exe```

4. Use the setup file to install it on your computer

5. The app will be installed at ```%appdata%```

---

### 🔍 Folder Structuring
In this section follows a brief explanation of the contents of the main folders and files:

#### src/Main.js

This file contains the main configuration for electron.
Lines 11 and 12 contain window width and height config, but it is not advised.

```
        width: 600,
        height: 600,
```

Electron may break unexpectedly and electron-forge won't necesarily compile as expected.

#### src/code

In this folder we find the main config files:

* **fetchweather.js**: This file contains the methods required for obtaining the data from the API
* **script.js**: Entry point for execution, configures testing if enabled and sets the 15 minute update loop.
* **tests.js**: Configures a visual testing method to test the weather window with various sets of data.
* **weatherbox.js**: Defines an object that will govern the visual element that displays weather and temperature.
#### ./weatherconfig.json

File that contains the coordinate configuration and wether testing mode is enabled.
#### ./graphic_res

Folder containing a series of visual resources implemented within the app. All items are not necesarlity implemented.