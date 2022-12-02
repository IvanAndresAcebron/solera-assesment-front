export default function Categories(props) {
  const newChangeShow = () => {
    props.onChangeShow(2, 0);
  };
    const newChangeShow1 = () => {
        props.onChangeShow(2, 1);
    };
    const newChangeShow2 = () => {
        props.onChangeShow(2, 2);
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
          onClick={newChangeShow1}
        >
          C#
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          data-test="post-option3-button"
          className="btn btn-default btn-lg btn-block col"
          onClick={newChangeShow2}
        >
          JavaScrip
        </button>
      </div>
      <div className="row"></div>
    </div>
  );
}
