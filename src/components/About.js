import React from "react";
import "./About.css";
import image from "../assets/image.png";

function About() {
  return (
    <div className="aboutContainer">
      <h2>About Page</h2>
      <img src={image} className="image" />
      <p className="detailsPara">
        Welcome to this application! This app,lication is used to record a video and play it back.
        The instructions to start this application are:\
        1. Go to 'Home' navigation bar. 
        2. Click the 'Turn my Camera ON' button which you see in the middle of the page.
        3. Click on the button 'PRESS REC WHEN READY'.
        4. Allow the application to access the camera and audio of your system.
        5. The video starts getting recorded.
        6. The recording stops when you again click on the red button.
        7. Once the recording stops, the video which was recorded gets autoplayed.
        8. You can either watch the recording or start recording a new video by clicking on 'Use Another Video'.
      </p>
      <p className="detailsPara">
        This application can be used for protoring an online examination. 
        Instead of a group video call, this individual proctoring system provids more transperacy.
        Once the video is recorded, it can be sent to te email id of the respective professor for further monitoring if the student cheated or not.

      </p>
    </div>
  );
}

export default About;
