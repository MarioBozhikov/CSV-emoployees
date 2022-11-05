import {useState} from 'react';

import './App.css';
import heroImage from './assets/images/hero-teamwork.png';
import FileUpload from "./components/fileupload/FileUpload";
import TableData from "./context/tableData";
import userDuoData from "./types/userDuoData";
import LJF from "./components/datatable/LTJ";

function App() {
  const [table, setTable] = useState<userDuoData[]>([]);

  const scrollToBottom = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
  }

  return (
    <TableData.Provider value={{getUserDuo:table, setUserDuo:setTable}}>
      <div className='App'>
        <header className='app-header'>
          <div className='header-content'>
            <div className='header-image'>
              <img src={heroImage} alt="teamwork" />
            </div>
            <div className='header-text'>
              <h1>CSV file reader</h1>
              <h3 className='max-w-sm'>Using LJF algorithm to read witch employees have worked for the longest time together on a project</h3>
              <button onClick={scrollToBottom} className='sec-btn text-center'>Let's try it</button>
            </div>
          </div>
        </header>
        <section className='form-wrap'>
          <div className='form-inner-wrap'>
            <FileUpload />
            <div className='form-content'>
              <h2 className='text-3xl'>How it works?</h2>
              <ol>
                <li>
                  <h4 className='text-lg'>Drag and drop your csv file or simply press on the component to upload it.</h4>
                </li>
                <li>
                  <h4 className='text-lg'>The algorithm will read the file and display the results in form of a table.</h4>
                </li>
                <li>
                  <h4 className='text-lg'>The CVS file need's to be in this format in order to work: <br/> [EmployeeID, ProjectID, DateFrom, DateTo]</h4>
                </li>
              </ol>
              <p className='b-small'>All date formats are accepted. {table.length}</p>
            </div>
          </div>
          <LJF/>
        </section>
      </div>
    </TableData.Provider>
  );
}

export default App;
