import React from "react";
import style from "./FileUpload.module.css";
import fileSvg from "../../assets/images/bracket-add.svg";

const FileUpload: React.FC = () => {
  return (
    <form className={style.component}>
      <input type="file" className="hidden"/>
      <label className={style.label}>
        <div className={style.labelContent}>
          <img className={style.labelImage} src={fileSvg} alt="Upload" />
          <p className='b-small text-black'>Drag and drop file here</p>
          <button className='file-btn'>Upload file</button>
        </div>
      </label>
    </form>
  )
};

export default FileUpload;