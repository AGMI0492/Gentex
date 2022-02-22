import React, {  useRef} from 'react'



 const GentexBolsa = () => {

  const inputRef = useRef();

  


  const handleBlur = () => {
   
   let foco = inputRef?.current?.focus();
     console.log(foco)
  };


//   const handleBlur = () => {
//   //  const inputSerial = document.getElementById('inputSerial')
//   // //  console.log(inputSerial);
//   // //  inputSerial.value = 'texto mutado'
//   // inputSerial.focus();
//   console.log(inputRef.current);
//   const input = inputRef.current;
//  input.focus(); //
//   };



  return (
    <>

    
    
        <h1>Gentex Bolsa</h1>
        <form ></form>
        
          <input ref={inputRef} type='text' className='form-control' on={handleBlur}/>
    
    </>
  )
}

export default GentexBolsa