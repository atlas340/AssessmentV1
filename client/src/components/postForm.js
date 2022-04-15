import React, { useState } from "react";
import ReactPlayer from 'react-player';
import Axios from "axios";
import "./postForm.css";

function PostForm(props) {
  const urlPost = " http://localhost:3000/trimVideo";

  const [data, setData] = useState({
    url: "",
    startTime: "",
    duration: "",
  });

  const [state, setState] = useState()



  function submit(e) {
    e.preventDefault();

    Axios.post(urlPost, {
      url: data.url,
      startTime: data.startTime,
      duration: data.duration,
    }).then((res) => {
      
      setState("results/"+res.data.videoPath+".mp4")

    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  console.log(state);

  return (
    <div className="form-structure">
      <div className="trim-Video">
        <h2 className="from-title">Edit Video</h2>
        <form className="form-holder" onSubmit={(e) => submit(e)}>
          <div className="form-group">
            <input
              id="url"
              className="form-field"
              onChange={(e) => handle(e)}
              value={data.url}
              placeholder="URL"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <input
              id="startTime"
              className="form-field"
              onChange={(e) => handle(e)}
              value={data.startTime}
              placeholder="Start Time"
              type="number"
              min="0"
            ></input>
          </div>

          <div className="form-group">
            <input
              id="duration"
              className="form-field"
              onChange={(e) => handle(e)}
              value={data.duration}
              placeholder="Duration"
              type="number"
              min="0"
            ></input>
          </div>

          <button id="button" className="btn-trim">
            <span>Trim Video</span>
          </button>
          <ReactPlayer id="videoPlayer" className="video-player" url={state} controls={true}  ></ReactPlayer>
          {/* <video id="videoPlayer" className="video-player" width="800px" height="500px" src="./../../results/1650025236137.mp4" controls autoPlay> */}
            
          {/* </video> */}
          <br></br><br></br><br></br>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
