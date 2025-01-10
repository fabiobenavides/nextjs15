'use client'

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';



export default function ImagePicker({label, name}) {

    const [pickedImage, setPickedImage] = useState();
    const inputImage = useRef();

    function handlePickClick() {
        inputImage.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        setPickedImage(file);

        const reader = new FileReader();
        reader.onload = () => {
            setPickedImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && (
                    <Image src={pickedImage} alt="Picked" fill />
                )}
                
            </div>
            <input 
                className={classes.input}
                type="file" 
                id={name} 
                name={name} 
                accept="image/png, image/jpeg" 
                required 
                ref={inputImage}
                onChange={handleImageChange}
            />
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick Image
            </button>
        </div>
    </div>
  )
}
