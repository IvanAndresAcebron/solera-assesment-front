import React, { useState, useEffect } from "react";
import { ImageUpload } from "./ImageUpload";
import TypeRadioSelecter from "./TypeRadioSelecter";
import axios from "axios";
export default function PostFillForm(props) {
  const [message, setMessage] = useState("");
  const [buto, setButo] = useState("");
  const [show, setShow] = useState("");
  const [cate, setCate] = useState("");

  const newChangeShow = () => {
    props.onChangeShow3(1, 0);
  };

  const searchWords = () => {
    setShow(<TypeRadioSelecter />);



  };
  const setPost = () => {

    axios.post('http://localhost:8080/createPost', {
      params: {
        numThread: props.numprop,
          postMessage: message,
          category: cate,
      }
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.data);
        })
        .then(function () {
          // always executed
        });

  };

  const changeTextValue = (event) => {
    setMessage(event.target.value);
  };
 const changeOptValue = (event) => {
        setCate(event.target.value);
        console.log(cate);
    };
  const checkMessage = (event) => {

    axios.get('http://localhost:8080/bannedWords', {
      params: {
        postName: message,
      }
    })
        .then(function (response) {
          console.log(response);
          if (response.data.value == true){
          }
        })
        .catch(function (error) {
          console.log(error.response.data);
        })
        .then(function () {
          // always executed
        });
      setButo(
          <div>
              <button
                  onClick={searchWords}
                  type="button"
                  data-test="post-button"
                  className="btn btn-primary btn-lg btn-block col"
                  id="post-button2"
              >
                  select Post privacy
              </button>
              <button
                  onClick={setPost}
                  type="button"
                  data-test="post-button3"
                  className="btn btn-primary btn-lg btn-block col"
                  id="post-button3"
              >
                  full Post
              </button>
          </div>

      );
  };
  return (
    <div className="container ">
      <form>
        <select data-test="select-post" onChange={changeOptValue}>
          <option data-test="option1-post" >Post a Doubt</option>
          <option data-test="option2-post" >Post a Suggestion</option>

          <option data-test="option3-post" >Post a Clarification</option>
        </select>

        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            data-test="textarea-message"
            rows="3"
            onChange={changeTextValue}
          ></textarea>
        </div>
        <button
          onClick={checkMessage}
          type="button"
          data-test="post-button"
          className="btn btn-primary btn-lg btn-block col"
          id="post-button2"
        >
          Check message
        </button>
        <ImageUpload />
        {show}
        <div className="form-group">
          {buto}
          <button
            type="button"
            data-test="go-back-button"
            className="btn btn-primary btn-lg btn-block col"
            onClick={newChangeShow}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
