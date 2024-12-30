import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidPrinciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)

  const validateinputs=(tag)=>{
console.log(typeof tag);
const {name,value} = tag
console.log(name,value);
console.log(!!value.match(/^\d+(\.\d+)?$/));
// error msg condition for principle
 if(name=='principle'){
  setPrinciple(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidPrinciple(false)
  }else{
    setInvalidPrinciple(true)
  }
  

 }// error msg condition for rate
 else if(name=='rate'){
  setRate(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidRate(false)
  }
  else{
    setInvalidRate(true)
  }
 }// error msg condition for year
 else if(name=='year'){
  setYear(value)
  if(!!value.match(/^\d+(\.\d+)?$/)){
    setInvalidYear(false)
  }
  else{
    setInvalidYear(true)
  }
 }



  }
// calculation
const handleCalculate=(e)=>{
  e.preventDefault()

  console.log("inside calculate");
 if(principle && rate && year){
  setInterest(principle*rate*year/100)
 }else{
  alert("please fill the form completedly")
 }
  
}
//  reset
const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setInvalidPrinciple(false)
  setInvalidRate(false)
  setInvalidYear(false)
}




  return (
    <>
    <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'> 
      <h3 className='text-center'>Simple Interest Calculator</h3>
      <p className='text-center'> Calculate your simple Interest</p>
      <div className='bg-warning p-5 text-light text-center rounded'>
        <h2 className=' text-dark'>₹ {interest}</h2>
        <p className='fw-bolder'>Total simple interest</p>

      </div>
      <form className='mt-3'>
        {/* Principle Amount */}
        <div className='mb-3'>
        <TextField name='principle' value={principle||""} onChange={e=>validateinputs(e.target)} className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />

        </div>
        {/*error msg invalid principle */}
     
       {
         invalidPrinciple && <div className='mb-3 text-danger fw-bold'>
          Invalid principle amount
         </div>

       }

{/* Rate Amount */}
<div className='mb-3'>
        <TextField name='rate' value={rate||""} onChange={e=>validateinputs(e.target)} className='w-100' id="outlined-Rate" label="Rate of interest" variant="outlined" />

        </div>
         {/*error msg invalid rate */}
     
       {
         invalidRate && <div className='mb-3 text-danger fw-bold'>
          Invalid Rate amount
         </div>

       }

        {/* Year */}
        <div className='mb-3'>
        <TextField name='year' value={year||""} onChange={e=>validateinputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />

        </div>
         {/*error msg invalid year */}
     
       {
         invalidYear && <div className='mb-3 text-danger fw-bold'>
          Invalid Year 
         </div>

       }


        <Stack direction="row" spacing={2}>
        <Button type='sunmit' onClick={handleCalculate}  disabled={invalidPrinciple || invalidRate || invalidYear } style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
        <Button  onClick={handleReset} style={{width:'50%',heigt:'70px'}} className='border border-dark text-dark' variant="outlined">Reset</Button>
</Stack>

      </form>

      </div>

    </div>
      
    </>
  )
}

export default App