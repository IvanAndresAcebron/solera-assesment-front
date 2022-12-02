import logo from "./logo.svg";
import "./App.css";
import Categories from "./Components/Categories";
import FillNameForm from "./Components/FillNameForm";
import PostFillForm from "./Components/PostFillForm";
import React, { useState } from "react";
function App() {
  const [show, setShow] = useState(1);
  const changeShow = (num) => {
    if (num == 1) {
      setShow(1);
    } else if (num == 2) {
      setShow(2);
    } else if (num == 3) {
      setShow(3);
    }
  };
  if (show == 1) {
    return <Categories onChangeShow={changeShow} />;
  } else if (show == 2) {
    return <FillNameForm onChangeShow2={changeShow} />;
  } else if (show == 3) {
    return <PostFillForm onChangeShow3={changeShow} />;
  }
}

export default App;
