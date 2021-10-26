import Card from "../layouts/card";
import InputText from "../components/InputText";
import Button from "../components/Button";
import classes from "./SignUpForm.module.css";
import { useState } from 'react';
import Error from "../components/Error";
import styles from '../components/InputText.module.css';
function LoginFormPage(props) {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const [disabled,setDisabled] = useState(false);

    function LoginForm(event){
        event.preventDefault();
        const userSignUpData = localStorage.getItem("UserData");
        const userSignUpObject = JSON.parse(userSignUpData);
        if((email === userSignUpObject['email']["email"]) && (password === userSignUpObject['password']["password"])) {
            window.location = "/home-page";
        }else{
            setErrorMsg("Credentials not valid");
        }

    }
    function setEmailValue(event) {
        setEmail(event.target.value);
    }
    function setPasswordValue(event) {
        setPassword(event.target.value);
        setDisabled(true);
    }
    //for hide and show password
const [initialValue,setInitial]= useState({
    toggleClass:styles.toggleEyeOff,
    typeValue:'password',
    flag:true
  });

  function hideShowPass(event){
    if(initialValue.flag){
      setInitial({
        toggleClass:styles.toggleEyeOn,
        typeValue:'text',
        flag:false
      })
    }else{
      setInitial({
        toggleClass:styles.toggleEyeOff,
        typeValue:'password',
        flag:true
      })
    }
  
  }
    return (
        <Card>
            <h1>Login</h1>
            <section>
                <form className = {classes.form} onSubmit={LoginForm}>
                <InputText name="email" type="email" label="Enter email" id="user_email" onChange = {setEmailValue} />
                <InputText eyeOff={initialValue['toggleClass']} onclick={hideShowPass} type={initialValue['typeValue']} name="password"  label="Enter password" id="user_password" onChange = {setPasswordValue}/>
                <Button text="Submit" isDisable={!disabled}/>
                <Error errorMsg={errorMsg}/>
                </form>
            </section>
        </Card>
    );
}

export default LoginFormPage;