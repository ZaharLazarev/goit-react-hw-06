import css from  './Contact.module.css'
import clsx from 'clsx';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({contact}){
   const dispatch = useDispatch();
   const contacts = useSelector(selectContacts);
   const onDelete = (id)=>{
       dispatch(deleteContact(id))
   }

   return (
    <li key={contact.id} className={clsx(css.ContactListElement)}>
      <div className={clsx(css.ContactListWraper)}>    
        <div className={clsx(css.ContactNameAndNumber)}>
          <div className={clsx(css.ContactTextContainer)}>
            <IoPerson />
            <p className={clsx(css.ContactListName)}>{contact.name}</p>
          </div>
          <div className={clsx(css.ContactTextContainer)}>
            <FaPhoneAlt />
            <p className={clsx(css.ContactListNumber)}>{contact.number}</p>
          </div>
        </div>
        <button className={clsx(css.ContactListButton)} onClick={() => onDelete(contact.id)}>delete</button>
      </div>
    </li>
  )
}