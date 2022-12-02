import {useState} from "react";
import axios from "axios";

export default function FillNameForm(props) {
    const [textVer,setTextVer]=useState("");
    const getText = (event) => {
        setTextVer(event.target.value);
        console.log(textVer);
    }
  const newChangeShow = () => {
    props.onChangeShow2(3, 0);

      axios.get('http://localhost:8080/verifyName', {
          params: {
              numThread: props.numprop,
              postName: textVer,
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
  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="row">
          <input
            data-test="title-input-text"
            type="text"
            className="form-control"
            placeholder="Title of the post"
            aria-label="Title of the post"
            aria-describedby="basic-addon2"
            onChange={getText}
          />
          <button
            type="button"
            data-test="next-post-button"
            className="btn btn-primary btn-lg btn-block col"
            onClick={newChangeShow}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
