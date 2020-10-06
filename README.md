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

  - Introduction

  The purpose of the experiment is to test users’ information awareness when they are doing a continuous attention task. We assume that the chunking and frequency of the information will impact users’ information awareness.

  The link game will be used as the continuous attention task in this experiment. Because the link game is a popular game with simple execution, and the complexity of it will be similar to all the participants. It could be instead of any continuous attention task like driving or writing, etc.

  To test the information awareness, we use the texting notifications which will pop up and interrupt participants when they play the game. We will use eye tracking to track their behavior when the notification pops up and will use questionnairos to test the accuracy of the information awareness. All those data will be help us to identify the information awareness.

  There are 2 types of notification, long texting notification, and short texting notification. The long texting notification includes 4 sentences and the short one includes 1 sentence. To make sure the participants will receive the same volume of information in the same time period. The long texting notification will pop up with the 4 short texting notifications at the same time duration (30s). The purpose of this design is to make sure that the short texting message that could present the chunking and frequency of the differs from the long texting message.
  
  In order to reduce the confounding variables of long or short texting notification order. The experiment will provide 2 different orders of the notifications. The first order is: long, short, long, short, long, short, long, short. The second order is: short, long, short, long, short, long, short, long.

The [Participant Information Sheet](https://drive.google.com/file/d/1ggJoZZ5TZ6hRXysi4kGW--EleAT9rpjv/view?usp=sharing) and [Consent Form](https://drive.google.com/file/d/1XvsU-GW-ktN848zDx2UAC3M8U4RPIY76/view?usp=sharing)

  - Approach: within-subject
  - Participants: 10
  - Duration: around 15 min

  - Steps:
  1. Explain the experiment and game rules  
  2. Participants read the Participant Information Sheet and sign the Consent Form
  3. Randomly separate participants into two groups (Group A, Group B)
  4. Group A will execute the Game 1, Group B will execute the Game 2 (the difference between Game 1 and Game 2 is the order of notification )
  5. Adjust the eye tracking with the webcam in the laptop
  6. Participants will start the game 1 or 2
  7. Ask participants to keep playing the game as fast and accurately as possible, and take a look at all the notifications
  8. When they start the game, the notifications will pop up after 30 seconds
  9. Participants will jump into a survey after the experiment
  10. Participants will need to fill up the questionnaires
  11. Complete the experiment 


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
