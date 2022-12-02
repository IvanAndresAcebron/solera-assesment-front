export default function TypeRadioSelecter() {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="private"
          data-test="rb-check1"
        />
        <label className="form-check-label">Private post</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="public"
          data-test="rb-check2"
        />
        <label className="form-check-label">Public post</label>
      </div>
    </div>
  );
}
