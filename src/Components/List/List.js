import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../UI/Header';
import Navbar from '../UI/Navbar';
import Listhome from './Listhome';

const List = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <Listhome value={location}/>
      </div>
  )
}

export default List