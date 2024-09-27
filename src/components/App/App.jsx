import css from  './App.module.css'
import clsx from 'clsx';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';


function App() {

  return (
  <div className={clsx(css.Wrapper)}>
    <h1>Phonebook</h1>
    <ContactForm/>
    <SearchBox/>
    <ContactList/>
  </div>
  )
}

export default App
