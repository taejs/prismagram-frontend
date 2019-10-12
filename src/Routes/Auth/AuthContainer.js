import React, {useState} from 'react';
import useInput from '../../Hooks/useInput';
import AuthPresenter from "./AuthPresenter";
import {useMutation} from 'react-apollo-hooks';
import {LOG_IN, SIGN_UP} from './AuthQueries';

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput('');
  const lastName = useInput('');
  const userName = useInput('');
  const email = useInput('');
  const requestSecret = useMutation(LOG_IN, {
    variables : {
      email : email.value,
    },
    update : (_, {data}) => {
      const {requestSecret} = data;
      if(!requestSecret) {
        toast.error('You don\'t have an account yet, create one')
        setTimeout(()=>setAction('signUp'));
      }
    }
  });
  const createAccount = useMutation(SIGN_UP, {
    variables : {
      User : {
        username : userName,
        email : email,
        firstName : firstName,
        lastName : lastName,
        bio : ''
      }
    }
  })

  const onLogin = (e) => {
    e.preventDefault();
    if(!email) {
      requestSecret();
    }
  }
  const onCreateAccount = (e) => {
    e.preventDefault();
    if(!email) {
      createAccount();
    }
  }

  //비효율적인거같은데
  return (<AuthPresenter onLogin={onLogin} onCreateAccount={onCreateAccount} setAction={setAction} action={action} username={userName} firstname={firstName} lastname={lastName} email={email}/>);
}