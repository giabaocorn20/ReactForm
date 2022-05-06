import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const checkNameValidity = (name) => {
    return name.trim() !== ''
  }

  const checkEmailValidity = (email) => {
   return email.trim() !== '' &&  email.includes('@')
  }
  const {
      value: enteredFirstName,
      isValid:  firstNameIsValid,
      hasError: firstNameHasError,
      valueChangeHandler: firstNameChangeHandler,
      valueBlurHandler:  firstNameBlurHandler,
      reset: firstNameReset,
      } = useInput(checkNameValidity)
  const {
      value: enteredLastName,
      isValid: lastNameIsValid,
      hasError: lastNameHasError,
      valueChangeHandler: lastNameChangeHandler,
      valueBlurHandler: lastNameBlurHandler,
      reset: lastNameReset,
      } = useInput(checkNameValidity)

  const {
      value:  enteredEmail,
      isValid: emailIsValid,
      hasError: emailHasError,
      valueChangeHandler: emailChangeHandler,
      valueBlurHandler: emailBlurHandler,
      reset: emailReset,
      } = useInput(checkEmailValidity)

  let formIsValid = firstNameIsValid && lastNameIsValid && emailHasError

  
  const formSubmissionHandler = event => {
    event.preventDefault()
    if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) { 
      return; 
    }
    firstNameReset()
    lastNameReset()
    emailReset()
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
          onBlur = {firstNameBlurHandler}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          value={enteredLastName}
          onChange={lastNameChangeHandler}
          onBlur = {lastNameBlurHandler} 
          />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='email' 
        id='email'
        value = {enteredEmail}
        onChange={emailChangeHandler}
        onBlur = {emailBlurHandler} />
      </div>
      <div className='form-actions'>

      {firstNameHasError && <p>first name has error</p>}
      {lastNameHasError && <p>last name has error</p>}
      {emailHasError && <p>email has error</p>}
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
