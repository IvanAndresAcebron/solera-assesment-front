export default function FillNameForm(props) {
  const newChangeShow = () => {
    props.onChangeShow2(3);
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
