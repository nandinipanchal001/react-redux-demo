import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const UserValidation = Yup.object({
    FirstName: Yup.string()
        .max(10, 'It should be less than or equal to 10 characters')
        .required('FirstName cannot be empty'),
    LastName: Yup.string()
        .max(10, 'It should be less than or equal to 10 characters')
        .required('LastName cannot be empty'),
    UserType: Yup.string()
        .required('Select a role !')
})

const BasicForm = () => {
    const [Data, setData] = useState({
        FirstName: "",
        LastName: "",
        Role: ""
    })
    const {FirstName,LastName,Role} = Data
    const submitData = (values, { setSubmitting }) => {
        setData({
            FirstName: values.FirstName,
            LastName: values.LastName,
            Role: values.UserType
        })
        console.log(values)
        setSubmitting(false)
    }
    console.log('state', Data)
    return (
        <div className='formValidate'>
            <Formik
                initialValues={{ FirstName: '', LastName: '', UserType: '' }}
                validationSchema={UserValidation}
                onSubmit={submitData}
            >
                {({ handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field type="text" name="FirstName" placeholder="First Name" /><br></br>
                        <ErrorMessage style={{ "color": "red" }} name="FirstName" component="div" /><br></br>
                        <Field type="text" name="LastName" placeholder="Last Name" /><br></br>
                        <ErrorMessage style={{ "color": "red" }} name="LastName" component="div" /><br></br>
                        <label>Role : </label>
                        <Field
                            as="select"
                            name="UserType"
                        >
                            <option>User</option>
                            <option>Admin</option>
                            <option>Owner</option>
                        </Field><br></br>
                        <ErrorMessage style={{ "color": "red" }} name="UserType" component="div" /><br></br>
                        <button type="submit">Submit</button><br></br>
                    </Form>

                )}

            </Formik>
            <p>
                {
                    (FirstName && LastName && Role) ? JSON.stringify(Data) : null
                }
            </p>
         
        </div>
    )
}

export default BasicForm