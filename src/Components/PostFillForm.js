import React, { useState, useEffect } from "react";
import { ImageUpload } from "./ImageUpload";
import TypeRadioSelecter from "./TypeRadioSelecter";
export default function PostFillForm(props) {
  const [message, setMessage] = useState("");
  const [buto, setButo] = useState("");
  const [show, setShow] = useState("");
  const newChangeShow = () => {
    props.onChangeShow3(1);
  };

  const searchWords = () => {
    setShow(<TypeRadioSelecter />);
  };

  const changeTextValue = (event) => {
    setMessage(event.target.value);
  };
  const checkMessage = (event) => {
    setButo(
      <button
        onClick={searchWords}
        type="button"
        data-test="post-button"
        className="btn btn-primary btn-lg btn-block col"
        id="post-button2"
      >
        Post
      </button>
    );
  };
  return (
    <div className="container ">
      <form>
        <select data-test="select-post">
          <option data-test="option1-post">Post a Doubt</option>
          <option data-test="option2-post">Post a Suggestion</option>

          <option data-test="option3-post">Post a Clarification</option>
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
