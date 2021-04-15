import React from 'react';
import { useForm } from "react-hook-form";
import loginBackground from '../../../images/loginbg.png'
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)};
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <div className= "row" >
            <div className="col-md-4">
                <h1 className="text-center mt-5" >Login</h1>

     <form className="p-5 text-center m-5" onSubmit={handleSubmit(onSubmit)}>

     <input style={{width:'100%' , padding:'7px' }} type="text" {...register("name", { required: true })} name="name" placeholder="username" />
     {errors.name && <span className="text-danger" >This field is required</span>}
      <br/>
<br/>
     <input style={{width:'100%' , padding:'7px' }} type="password" {...register("password", { required: true })} name="password" placeholder="password" />
     {errors.name && <span className="text-danger" >This field is required</span>}
     <br/>
     <br/>
    
     <button style={{width:'100%' , padding:'7px' }} type="submit" className="btn btn-brand">login</button>
    </form>

            </div>
            <div className="col-md-8">
              
                <img src={loginBackground} alt=""/>
            </div>
        </div>
    );
};

export default Login;