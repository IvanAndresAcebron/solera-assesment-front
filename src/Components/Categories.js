export default function Categories(props) {
  const newChangeShow = () => {
    props.onChangeShow(2);
  };
  return (
    <div className="container justify-content-center">
      <div className="row ">
        <button
          type="button"
          data-test="post-option1-button"
          className="btn btn-primary btn-lg btn-block col"
          onClick={newChangeShow}
        >
          Java
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          data-test="post-option2-button"
          className="btn btn-default btn-lg btn-block col"
          onClick={newChangeShow}
        >
          C#
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          data-test="post-option3-button"
          className="btn btn-default btn-lg btn-block col"
          onClick={newChangeShow}
        >
          JavaScrip
        </button>
      </div>
      <div className="row"></div>
    </div>
  );
}
