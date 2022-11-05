import React, {FC, useContext, useRef, useState} from "react";

import style from "./FileUpload.module.css";
import fileSvg from "../../assets/images/bracket-add.svg";
import {parseCSVData} from "../../utils/CSVParser";
import TableData from "../../context/tableData";

const FileUpload: FC = () => {
  const [drag, setDrag] = useState(false);
  const [button, setButton] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {setUserDuo} = useContext(TableData)

  // file drag events
  const handleDrag = function (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover" || e.type === "dragenter") {
      setDrag(true);
    } else if (e.type === "dragleave") {
      setDrag(false);
    }
  }

  // file is dropped
  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    let files = e.dataTransfer.files
    if(files && files[0]) {
      parseCSVData({files, setUserDuo});
    }
  }

  // file is selected with click
  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    let files = e.target.files
    if (files && files[0]) {
      parseCSVData({files, setUserDuo});
    }
  }

  // button, triggers input click
  const buttonUpload = () => {
    inputRef.current?.click();
  }

  return (
    <form className={style.component} onDragEnter={handleDrag} onSubmit={(e)=>e.preventDefault()}>
      <input ref={inputRef}
             type="file"
             id='file-upload'
             onChange={handleChange}
             className="hidden"/>
      <label htmlFor='file-upload' className={style.label}>
        <div className={style.labelContent}>
          <img className={style.labelImage} src={fileSvg} alt="Upload" />
          <p className='b-small text-black'>Drag and drop file here</p>
          <div className='divider'>
            <div className='line'/>
            <p className='b-small text-black'>or</p>
            <div className='line'/>
          </div>
          <button type='button'
            onClick={buttonUpload}
            onMouseEnter={() => setButton(true)}
            onMouseLeave={() => setButton(false)}
            className='file-btn'>
            Upload file
            <span className={`${button ? 'max-w-full' : 'max-w-0'} line`}/>
          </button>
        </div>
      </label>
      {drag && <div className={style.dragElement} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}/>}
    </form>
  )
};

export default FileUpload;