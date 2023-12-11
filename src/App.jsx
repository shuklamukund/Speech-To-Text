import React from 'react'
import './App.css'

function App() {
 

  return (
    <>
      <div className='container'>
        <h2>Speech To Text Converter</h2>
        <p>A React hook that convert speech from the microphone to text and make it available in react components.</p>

        <div className='main-content'>
        

        </div>
        <div className='btn-style'>
          <button>Copy</button>
          <button>Start Listening</button>
          <button>Stop Listening</button>
        </div>
        
      </div>
    </>
  )
}

export default App
