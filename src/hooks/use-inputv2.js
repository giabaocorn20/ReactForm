import { useState } from "react";

const useInput = (validateValueFunction) => { 
    const [enteredValue, setEnteredValue] = useState('')
    const [valueTouched, setValueTouched] = useState(false) 

    const valueIsValid = validateValueFunction(enteredValue)
    const valueHasError = !valueIsValid && valueTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const valueBlurHandler = (event) => {
        setValueTouched(true)
    }

    const resetInput = () => {
        setEnteredValue('')
        setValueTouched(false)
    }

    return {
        value: enteredValue, 
        valueIsValid,
        valueHasError,
        valueChangeHandler,
        valueBlurHandler,
        resetInput,
    }

}