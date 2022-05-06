import { useReducer } from "react"
const useInput = (validateValue) => {

   const initialInputState = { 
    value: '',
    isTouched: false
    }

    const inputStateReducer = (state, actions) => { 
        if (actions.type === 'INPUT') {
            return {
                value: actions.value,
                isTouched: state.isTouched  
            }
        }
        if (actions.type === 'BLUR') {
           return { 
               value: state.value,
               isTouched: true
            
            }
        }
        if (actions.type === 'REET') {
            return { 
                value: '',
                isTouched: false
            }
        }
        return { 
            value: '',
            isTouched: false
        }
    }
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const valueIsValid = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    const valueBlurHandler = event => {
        dispatch({type: 'BLUR', value: true })
    }
    
    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value })
    }

    const reset = () => {
       dispatch({type: 'RESET'})
    }
    
    
    
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}

export default useInput