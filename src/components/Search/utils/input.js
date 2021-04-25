import React, { useState } from 'react';
import Input from '@material-ui/core/Input';


const InputText = props =>{
    const {name, handleValue,placeholder} =props;
    const [inputValue,setInputValue]=useState('');
   
    const handleInputChange=(event)=>{
        const { name, value } = event.target;      
          setInputValue( value );

      handleValue(name,value);
    }

  /*  const reset =()=>{
        setInputValue('');
    }*/

    return (
        <>
         <Input name={name} 
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'description' }}  
                onChange={handleInputChange}
                value={inputValue}
           />
        </>
    )
}

export default InputText;