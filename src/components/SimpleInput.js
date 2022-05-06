

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const checkNameValidity = (name) => name.trim() !== ''
  const checkEmailValidity = (email) => email.trim()!=='' && email.includes('@')

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: NameChangehandler,
    valueBlurHandler: NameBlurHandler,
    reset: resetName,
} = useInput(checkNameValidity)

const {
  value: enteredEmail,
  isValid: emailIsValid,
  hasError: emailHasError,
  valueChangeHandler: EmailChangehandler,
  valueBlurHandler: EmailBlurHandler,
  reset: resetEmail,
} = useInput(checkEmailValidity)


  let formIsValid = false

  

 
    if(nameIsValid && emailIsValid) {
      formIsValid = true
    }


  const formSubmissionHandler = event => {
    event.preventDefault()
    if(!nameIsValid || !emailIsValid) { 
      return; 
    }

    console.log(enteredName)
   
   // nameInputRef.current.value = '' Not ideal, dont manipulate the dom
    resetEmail()
    resetName()
  }
 

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control' 
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control' 
  return (
    <form onSubmit = {formSubmissionHandler}>
      <div className={`${nameInputClasses}`}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        value={enteredName}
        onChange={NameChangehandler} 
        onBlur = {NameBlurHandler}/>
        <label htmlFor='email'>Your Email</label>
         <input 
        type='email' 
        id='email' 
        value={enteredEmail}
        onChange={EmailChangehandler} 
        onBlur = {EmailBlurHandler}/>
        
      </div>
      <div className="form-actions">
        {nameHasError && <p>Name must not be empty</p>}
        {emailHasError && <p>Email is invalid</p>}
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
