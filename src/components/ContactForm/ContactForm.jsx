import { Formik, Form, Field,ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import {addContact} from '../../redux/contactsSlice'
import { useDispatch } from "react-redux";
import css from  './ContactForm.module.css'
import clsx from 'clsx';

export default function ContactForm(){
  const dispatch = useDispatch();
  const handleSubmit = (values, actions)=>{
     dispatch(addContact({  
     id:nanoid(),
     name:values.username,
     number:values.number,
     }))
     actions.resetForm();
  }
  const ContactsSchema=Yup.object().shape({
    username:Yup.string().min(3,'Min quantity of symbols is 3!').max(50, 'Max quantity of symbols is 50!').required('This field is required!'),
    number:Yup.string().min(3,'Min quantity of symbols is 3!').max(50, 'Max quantity of symbols is 50!').required('This field is required!'),
  });
    return(
      <div>
        <Formik initialValues={{
           username:"",
           number:""
        }
        }
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
        >
          <Form className={clsx(css.ContactForm)}>
            <div className={clsx(css.ContactBox)}>
              <label className={clsx(css.ContactLabel)} htmlFor="username">Name</label>
              <Field className={clsx(css.ContactInput)}  type="text" name="username"/>
              <ErrorMessage
              name="username"
              component="span"
            />
              <label className={clsx(css.ContactLabel)} htmlFor="number">Number</label>
              <Field className={clsx(css.ContactInput)} type="text" name="number"/>
              <ErrorMessage
              name="number"
              component="span"
            />
              <button className={clsx(css.ContactButton)} type="submit">Add contact</button>
            </div>
          </Form>
        </Formik>
      </div>
    )
}