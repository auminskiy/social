import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from './LoginFormShema';
import  {login}  from '../../redux/authReducer';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import s from './Login.module.css';
import classnames from 'classnames';


const Login = (props) => {

    
  if (props.isAuth) {
    
    return <Navigate to={'/profile'} />
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
          onSubmit={(values, {setStatus}) => 
            
            props.login(values.email, values.password, values.rememberMe, setStatus)
                 
        }  
            validationSchema={loginFormSchema}>
                
            {({ errors, touched, isValid, dirty, status }) => (
                <Form>
                    <div> 
                    <div>
                        <Field className={classnames(s.field, {[s.err]: touched.email && errors.email })} type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                  
                    {touched.email && errors.email && (
                    <div className={s.error}>{errors.email}</div>)}
                    <div>
                        <Field className={classnames(s.field, {[s.err]: touched.password && errors.password })} type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    {touched.password && errors.password && (
                    <div className={s.error}>{errors.password}</div>)}
                    
                    <div className={s.error}>{status}</div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button type={'submit'}>Log in</button>
                    </div>
                </Form>
            )}
        </Formik>
       
    </div>
                }


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login);

