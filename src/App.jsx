import React, { useState } from 'react'
import './App.css'
import regeneratorRuntime from 'regenerator-runtime'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
function App() {
 const [textToCopy,setTextToCopy]=useState();
 const [isCopied,setCopied]=useClipboard(textToCopy,{
  successDuration:1000
 });

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition) {
    return <span>Browser doesnot support speech recognition.</span>
  }

  return (
    <>
      <div className='container'>
        <h2>Speech To Text Converter</h2>
        <p>A React hook that convert speech from the microphone to text and make it available in react components.</p>

        <div className='main-content' onClick={()=>setTextToCopy(transcript)}>
        
        {transcript}

        </div>
        <div className='btn-style'>
          <button onClick={setCopied}>
            {isCopied ? 'Copied' : 'Copy'}
            </button>
          <button onClick={SpeechRecognition.startListening({continuous:true, language:'en-IN'})}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
       
      </div>
      
    </>
  )
}

export default App
