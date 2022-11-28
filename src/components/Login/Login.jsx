import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from './LoginFormShema';
import  {login}  from '../../redux/authReducer';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';



const Login = (props) => {

    
  if (props.isAuth) {
    
    return <Navigate to={'/users'} />
}
    return    <div>
        <h2>Login Please</h2>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
          onSubmit={(values) => 
            
            props.login(values.email, values.password, values.rememberMe)
                      
        }  
            validationSchema={loginFormSchema}>
                
            {() => (
                <Form>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage name="email" component="div"/>

                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <ErrorMessage name="password" component="div"/>

                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>
       
    </div>
                }


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);

