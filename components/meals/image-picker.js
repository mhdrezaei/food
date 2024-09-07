"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ name, label }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  function handlePickImage() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        {!pickedImage && <p>no selected image to preview </p>}
        {pickedImage && (
          <Image src={pickedImage} alt="an image selected by user" fill />
        )}
        {}
      </div>
      <div className={classes.control}>
        <input
          className={classes.input}
          name={name}
          id=""
          type="file"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickImage}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
