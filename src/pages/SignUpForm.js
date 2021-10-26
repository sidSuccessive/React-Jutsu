
import InputText from "../components/InputText";
import Button from "../components/Button";
import classes from "./SignUpForm.module.css";
import Card from "../layouts/card";
import styles from '../components/InputText.module.css';
import { useState } from 'react';
import Error from "../components/Error";

function SignUpFormPages() {
  const [disabled,setDisabled] = useState(false);
  function nameHandler(event) {
    setName((previousState) =>{
      return {
        ...previousState,
        name:event.target.value
      }
    })}
  const [errorMsg,setErrorMsg] = useState('');
const [name,setName] = useState({
  name:'',
  errorMsg:''
});
const [email,setEmail] = useState({
  email:'',
  errorMsg:''
});
const [password,setPassword] = useState({
  password:'',
  errorMsg:''
});
const [mobile,setMobile] = useState({
  mobile:'',
  errorMsg:''
});
const [address,setAddress] = useState({
  address:'',
  errorMsg:''
});
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
//checking user name
function checkUserName(value){
    const nameRegex = /^[a-zA-Z-]+$/;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(nameRegex.test(value) || reg.test(value)){
      return true;
    }else{
      return false;
    }
  }
  //for email validation
function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 if (reg.test(email)){
  return true;
 }
 else{
    return false;
 }
}

function mobileDigitValidation(mobile){
if (/^\d{10}$/.test(mobile)) {
    return true;
} else {
    return false
}
}

function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(re.test(str)){
      return true;
    }else{
      return false;
    }
}

function isEmpty(value){
  if(value.length !== 0){
    return true;
  }else{
    return false;
  }
}
function submitForm(event) {
    event.preventDefault();
    const validName = checkUserName(name.name);
    if(!validName){
      setName((previousState)=>{
        return {
          ...previousState,
        errorMsg:"Invalid Username!"
        }
      })
      return false;
    }else{
      name.errorMsg = "";
    }
    const validEmail = validateEmail(email.email);
    if(!validEmail){
      setEmail((previousState) => {
        return {
          ...previousState,
          errorMsg:"Invalid email!"
        }
      })
      return false;
    }else{
      email.errorMsg = "";
    }
    const validPassword = checkPassword(password.password);
    if(!validPassword){
      setPassword((previousState)=>{
        return {
          ...previousState,
          errorMsg:"Password must be 8 letter, with at least a symbol, upper and lower case letters and a number!"
        }
      })
      return false;
    }else{
      password.errorMsg = "";
    }
    const validMobile = mobileDigitValidation(mobile.mobile);
    if(!validMobile){
      setMobile((previousState)=>{
        return {
          ...previousState,
          errorMsg:"Invalid number must be ten digits!"
        }
      })  
      return false;
    }else{
      mobile.errorMsg = "";
    }
    const validAddress = isEmpty(address.address);
    if(!validAddress){
      setAddress((previousState)=>{
        return {
          ...previousState,
          errorMsg:"Address is mandatory!"
        }
      })
      return false;
    }else{
      address.errorMsg = "";
    }
    if(validName && validEmail && validPassword && validMobile && validAddress){
      const userData = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address
    }

    localStorage.setItem("UserData",JSON.stringify(userData));

   
     window.location = "/login-page";
    }else{
      setErrorMsg("Invalid entries");
      return false;
    }

}
    return (
        <Card>
            <h1>Sign up</h1>
            <section>
                <form className = {classes.form} onSubmit={submitForm}>
                <InputText errorMsg={name.errorMsg} name="name" type="text" label="Enter name" id="user_name" onChange={nameHandler} />
                <InputText errorMsg={email.errorMsg} name="email" type="email" label="Enter email" id="user_email" onChange={(e)=>{setEmail((previousState) => {
                 return {
                  ...previousState,
                  email:e.target.value
                } })}}  />
                <InputText errorMsg={password.errorMsg} name="password" eyeOff={initialValue['toggleClass']} onclick={hideShowPass}  type={initialValue['typeValue']} label="Enter password for login" id="user_password" onChange={(e)=>{setPassword((previousState)=>{
                  return {
                    ...previousState,
                    password:e.target.value
                  }
                })}} />
                <InputText errorMsg={mobile.errorMsg} name="mobile" type="number" label="Enter mobile" id="user_mobile" onChange={(e)=>{setMobile((previousState)=>{
                  return {
                    ...previousState,
                    mobile:e.target.value
                  }
                })}} />
                <InputText errorMsg={address.errorMsg} name="address" type="text" label="Enter address" id="user_address" onChange={(e)=>{setAddress((previousState)=>{
                  setDisabled(true);
                  return {
                    ...previousState,
                    address:e.target.value
                  }
                })}} />
                <Button text="Submit" isDisable={!disabled} />
                <Error errorMsg={errorMsg}/>
                </form>
            </section>
        </Card>
    );
}

export default SignUpFormPages;