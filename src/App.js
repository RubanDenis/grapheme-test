import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormStep1 from './components/FormStep1';
import FormStep2 from './components/FormStep2';
import FormStep3 from './components/FormStep3';
import Context from './Context';

function App() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  return (
    <Context.Provider value={
      {
        setStep1,
        setStep2,
        setStep3
      }
    }>
      <div className='form-container'>
        {step1 ? <FormStep1 /> : ``}
        {step2 ? <FormStep2 /> : ``}
        {step3 ? <FormStep3 /> : ``}
      </div>
    </Context.Provider>
  );
}

export default App;
