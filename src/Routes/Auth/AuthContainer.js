import React, {useState} from 'react';
import useInput from '../../Hooks/useInput';
import AuthPresenter from "./AuthPresenter";
import {useMutation} from 'react-apollo-hooks';
import {LOG_IN} from './AuthQueries';

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const requestSecret = useMutation(LOG_IN, {
    variables : {
      email : email.value
    }
  });

  const onLogin = (e) => {
    e.preventDefault();
    if(!email) {
      requestSecret();
    }
  }
  console.log(action);

  //비효율적인거같은데
  return (<AuthPresenter onLogin={onLogin} setAction={setAction} action={action} firstname={firstName} lastname={lastName} email={email}/>);
}