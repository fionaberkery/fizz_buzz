import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [inputNumber, setInputNumber] = useState(1)
  const [answer, setAnswer] = useState(0)
 

  useEffect(() => {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }, [inputNumber])

  const handleNextNumber = () => {
    setInputNumber(inputNumber +1)
    }
  




  return (

    <>
      <h1> FizzBuzz! </h1> 
      <button value={inputNumber} onClick={handleNextNumber}>Next number</button>    
      <h2> The next value is {answer} </h2>
      
   
    
    </>
  )
}

export default App;
