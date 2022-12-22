import React from 'react';
import { Formik, Field, Form } from 'formik';

const ProfileDataForm = (props) => {
    
    return (
                <div>
                    <Formik
                        initialValues={{
                            fullName: props.profile.fullName,
                            lookingForAJobDescription: '',
                            aboutMe: '',
                            contacts: '',
                        }}
                     /*    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        console.log(JSON.stringify(values, null, 2));
                        }}
                    */
                        onSubmit={(values) => {
                        console.log(JSON.stringify(values, null, 2));
                        props.saveProfile(values.fullName, values.lookingForAJobDescription, values.aboutMe, values.contacts);
                        console.log(values.fullName, values.lookingForAJobDescription, values.aboutMe, values.contacts)
                    } }
                            >
                    <Form>
                    <button type="submit">Submit</button>
                    <Field type={'checkbox'} name={'lookingForAJob'}/>
                    <label htmlFor={'lookingForAJob'}> Looking for a job: </label>
                    
                <label htmlFor="fullName">Full name</label>
                <Field id="fullName" name="fullName"  />

                <label htmlFor="lookingForAJobDescription">My professional skills</label>
                <Field id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder="lookingForAJobDescription" />

                <label htmlFor="aboutMe">About me</label>
                <Field id="aboutMe" name="aboutMe" placeholder="aboutMe" />

                <label htmlFor="contacts">Contacts</label>
                <Field id="contacts" name="contacts" placeholder="contacts" />
                    </Form>
                    </Formik>
                </div>
    );
}

export default ProfileDataForm;