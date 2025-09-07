import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'


const Register = () => {
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Done!",
            icon: "success",
            text : "Data Received.",
            draggable: true,
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                    window.location.href = '/'
            }
        })
    }
  return (
    <>
    {/* <!-- start of register form --> */}

    <Formik initialValues={{fname:'',lname:'',phone:'',email:'',address:'',password:''}}
    validationSchema={Yup.object({
        fname:Yup.string()
        .required('First Name is Mandatory')
        .min(3,'First name must be at least 3 characters long.')
        .matches(/^[a-zA-Z\ ]+$/,'First Name must be alphabets only.'),

        lname:Yup.string()
        .required('Last Name is Mandatory')
        .min(3,'Last name must be at least 3 characters long.')
        .matches(/^[a-zA-Z\ ]+$/,'Last Name must be alphabets only.'),

        email: Yup.string()
        .required('Last Name is Mandatory')
        .email('Invalid Email'),

        phone:Yup.string()
        .required('Last Name is Mandatory')
        .length(10,'Invalid Length')
        .matches(/^[0-9]+$/,'It must contains number only')

    })}
    >

        <div className="container my-5" id="registerform">
            <div className="d-flex align-items-center justify-content-evenly">
                <div className="col-md-4">
                    <img src="/images/form.avif" alt="register" width="100%" />
                </div>
                <div className="col-md-5 shadow p-4 rounded-4">
                    <Form action="" onSubmit={handleSubmit} method='post'>
                        <h2 className="text-center">Create Account for Free!</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                        <div className="form-floating mb-3">
                            <Field type="text" className="form-control" placeholder="" id='fname' name='fname' />
                            <label for="fname">First Name</label>
                            <ErrorMessage name='fname'>
                                {msg=><small className='text-danger'>{msg}</small>}
                            </ErrorMessage>
                        </div>

                        <div className="form-floating mb-3">
                            <Field type="text" className="form-control" placeholder="" id='lname' name='lname' />
                            <label for="lname">Last Name</label>
                             <ErrorMessage name='lname'>
                                {msg=><small className='text-danger'>{msg}</small>}
                            </ErrorMessage>
                        </div>
                        </div>

                            <div className="form-floating mb-3">
                                <Field type="email" className="form-control" placeholder="" id='email' name='email' />
                                <label for="email">E-mail</label>
                                <ErrorMessage name='email'>
                                {msg=><small className='text-danger'>{msg}</small>}
                                </ErrorMessage>
                            </div>
                        <div className="d-flex justify-content-between">

                            <div className="form-floating mb-3 col-md-6">
                                <Field type="number" className="form-control" placeholder="" id='phone' name='phone' />
                                <label for="phone">Phone Number</label>
                                <ErrorMessage name='phone'>
                                {msg=><small className='text-danger'>{msg}</small>}
                                </ErrorMessage>
                            </div>

                        <div className="form-floating mb-3">
                            <Field type="text" className="form-control" placeholder="" id='address' name='address'/>
                            <label for="address">Address</label>
                             <ErrorMessage name='address'>
                                {msg=><small className='text-danger'>{msg}</small>}
                            </ErrorMessage>
                        </div>
                        </div>


                        <div className="form-floating mb-3">
                            <Field type="password" className="form-control" placeholder="" id='password' name='password' />
                            <label for="password">Password</label>
                             <ErrorMessage name='password'>
                                {msg=><small className='text-red'>{msg}</small>}
                            </ErrorMessage>
                        </div>
                        <hr/>

                        <input type="submit" value="Register" className="btn btn-info w-100" />



                    </Form>
                </div>
            </div>

        </div>

    </Formik>
    {/* <!-- end of register form --> */}
        
    </>
  )
}

export default Register
