import {useState} from 'react';
import './App.css';
import heroImage from './assets/images/hero-teamwork.png';
import FileUpload from "./components/fileupload/FileUpload";
import tableData from "./context/tableData";
import userDuoData from "./types/userDuoData";
import LJF from "./components/datatable/LTJ";

function App() {
  const [table, setTable] = useState<userDuoData[]>([]);

  return (
    <tableData.Provider value={{getUserDuo:table, setUserDuo:setTable}}>
      <div className="App">
        <header className="relative bg-heroWaves bg-center bg-cover">
          <div className='relative h-screen w-full px-12 flex flex-col justify-center max-w-screen-2xl mx-auto'>
            <div className='absolute bottom-0 right-0 z-0'>
              <img src={heroImage} alt="teamwork" />
            </div>
            <div className='relative z-10 max-w-lg flex flex-col gap-3 text-start'>
              <h1>CSV file reader</h1>
              <h3 className='max-w-sm'>Using LJF algorithm to read witch employees have worked for the longest time together on a project</h3>
              <button className='sec-btn'>Let's try it</button>
            </div>
          </div>
        </header>
        <section className='bg-green h-full min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col md:flex-row h-full gap-6 flex py-20 px-12 justify-center items-center w-full max-w-screen-2xl mx-auto'>
            <FileUpload />
            <div className='flex flex-col gap-12 text-start max-w-sm text-white'>
              <h2 className='text-3xl'>How it works?</h2>
              <ol className='flex flex-col gap-3'>
                <li className='border-b border-oceanBlue'>
                  <h4 className='text-lg'>Drag and drop your csv file or simply press on the component to upload it.</h4>
                </li>
                <li className='border-b border-oceanBlue'>
                  <h4 className='text-lg'>The algorithm will read the file and display the results in form of a table.</h4>
                </li>
                <li className='border-b border-oceanBlue'>
                  <h4 className='text-lg'>The CVS file need's to be in this format in order to work: <br/> [EmployeeID, ProjectID, DateFrom, DateTo]</h4>
                </li>
              </ol>
              <p className='b-small'>All date formats are accepted.</p>
            </div>
          </div>
        </section>
        {/*<LJF/>*/}
      </div>
    </tableData.Provider>
  );
}

export default App;
