'use client'

import { useRef } from 'react';
import classes from './image-picker.module.css';



export default function ImagePicker({label, name}) {

    const inputImage = useRef();

    function handlePickClick() {
        inputImage.current.click();
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input 
                className={classes.input}
                type="file" 
                id={name} 
                name={name} 
                accept="image/png, image/jpeg" 
                required 
                ref={inputImage}
            />
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick Image
            </button>
        </div>
    </div>
  )
}
