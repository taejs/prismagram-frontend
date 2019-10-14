import React, {useState} from 'react';
import useInput from '../../Hooks/useInput';
import AuthPresenter from "./AuthPresenter";
import {useMutation} from 'react-apollo-hooks';
import {LOG_IN, CREATE_ACCOUNT} from './AuthQueries';

export default () => {
  const [action, setAction] = useState("logIn");
  const firstName = useInput('');
  const lastName = useInput('');
  const userName = useInput('');
  const email = useInput('');
  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables : {
      User : {
        username : userName.value,
        email : email.value,
        firstName : firstName.value,
        lastName : lastName.value,
        bio : ''
      }
    }
  });
  const requestSecretMutation = useMutation(LOG_IN, {
    variables : {
      email : email.value,
    }
  });


  const onSubmit = async (e) => {
    e.preventDefault();
    if(action === 'logIn') {
      if(!email) {
        try {
          const {data : {requestSecret}} = data;
          if(!requestSecret) {
            toast.error('You don\'t have an account yet, create one')
            setTimeout(()=>setAction('signUp'));
          } else {
            toast.success('check your inbox for your login secret');
          }
        } catch {
          toast.error('can\'t request secret, try again');
        }
      } else {
        toast.error('email is required');
      }
    } else if(action === 'signUp'){
      if(userName.value &&
          email.value &&
          firstName.value &&
          lastName.value) {
        try{
          const {data:{createAccount}} = await createAccountMutation();
          if(!createAccount) {
            toast.error('cant create account')
          }else {
            toast.success('account created! login now');
            setTimeout(()=>setAction('logIn'));
          }
        } catch {
          toast.error('can t create account, try again');
        }
      }
      else toast.error('All field are required');
    }
  }

  //비효율적인거같은데
  return (<AuthPresenter onSubmit={onSubmit} setAction={setAction} action={action} username={userName} firstname={firstName} lastname={lastName} email={email}/>);
}