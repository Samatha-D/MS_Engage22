import React, { Component } from "react";
import VideoRecorder from "react-video-recorder";
import "./Video.css";
class NewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
    };
  }

  onStartRecording = (e) => {
    console.log(e);
  };
  onStopRecording = (e) => {
    console.log(e);
  };
  onRecordingComplete = (e) => {
    console.log(e);
  };
  onRecordError = (e) => {
    console.log(e);
  };
  record = () => {};
  render() {
    return (
      <div className="newVideoContainer">
        <VideoRecorder
          onStartRecording={this.onStartRecording}
          onStopRecording={this.onStopRecording}
          onRecordingComplete={this.onRecordingComplete}
          onError={this.onRecordError}
        />
      </div>
    );
  }
}

export default NewVideo;
