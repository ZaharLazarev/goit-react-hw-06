import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from  './SearchBox.module.css'
import clsx from 'clsx';

export default function SearchBox(){
  const dispatch = useDispatch();

  const filter =(input)=>{
    dispatch(changeFilter(input))
  }
  return(
    <div className={clsx(css.SearchBoxContainer)}>
       <label className={clsx(css.SearchBoxLabel)} htmlFor='username'>Find contacts by name</label>
       <input className={clsx(css.SearchBoxInput)} type="text"  onChange={(e)=>filter(e.target.value)} id='username'/>
    </div>
  )
}