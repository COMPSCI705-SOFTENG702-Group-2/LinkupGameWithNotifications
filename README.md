# Link Up game with notifications
This project is a test project. Participants need to complete several tasks required by the project, including the main task and other subtasks at the same time. Our main task is a little game. This little game is to find the same two things, which can be treated as related within certain rules. In this game, we stipulate that the user clicks on two icons of the same small animals that can be associated with the mouse to eliminate them, and the icons that can be connected can be directly connected by a line without other obstacles. The game duration is 11 minutes. When the user participates in the game, some notifications will automatically pop up at the top of the screen to display some information. This is the subtask of the project. The notification pop-up time and pop-up style are different. At the end of the project, the user will be asked to answer a questionnaire after completing the game.

Our Demo URL: https://multifun.iceloof.com

## Summary

  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Functionality](#functionality)
  - [Experiment](#experiment)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on how to deploy the project on a live system.

Before starting the game, participants need to be asked to turn on the camera and obtain camera permissions. This part of our eyeball recognition can track the movement of the user's eyeballs to get the user's focus. After obtaining the permission, the user can start the game by clicking the start button. When the user cannot find the same icon to connect, click the help button to help eliminate it.

### Prerequisites

(System requirements)
What things you need to install the software and how to install them

    Python3, Jupyter, numpy, pandas, matplotlib

### Installing

A step by step series of examples that tell you how to get a development
env running.

Analyser tool:

  - Download and install Python3 from https://www.python.org/downloads/
  - Install packages <code>pip install jupyter numpy pandas matplotlib</code>
  - Go to "Analyser" folder, <code>jupyter notebook --port 8888</code> and open http://localhost:8888/ to start the analyser program

Experiment Environment setup:

  - Put everything under "frontend" folder into web server(Apache or Nginx), and then go to the browser to visit it.

## Built With

  - [Linkup](https://github.com/gd4Ark/linkup) - The main code base that we used as the Linkup game
  - [Eye Tracking](https://github.com/brownhci/WebGazer) - The open source library that we used for eye tracking data

## Experiment

Detail goes here

## Authors

Annie
Bruce
Siyu Qian
Hurin Hu
Zach

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

  - Hat tip to anyone whose code was used
  - Inspiration
  - etc
