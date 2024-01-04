import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="write-container">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            placeholder="Write some thing great..."
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" id="upload_file" />
          <label className="upload_file" htmlFor="upload_file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
          <span className="note">
            <strong>NOTE: </strong>
            will be coming sone
          </span>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="cat" id="art" />
            <label htmlFor="art">ART</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" id="science" />
            <label htmlFor="science">SCIENCE</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" id="technology" />
            <label htmlFor="technology">TECHNOLOGY</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" id="cinema" />
            <label htmlFor="cinema">CINEMA</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" id="design" />
            <label htmlFor="design">DESIGN</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" id="food" />
            <label htmlFor="food">FOOD</label>
          </div>
        </div>
      </div>
    </div>
  );
}
