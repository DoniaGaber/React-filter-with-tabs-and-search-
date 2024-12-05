import React from 'react'
import Menulist from './Menulist';

export default function Navbar({ setShowMenu }) {
    // console.log(setShowMenu);
  return (
      <nav className="nav">
          <h1>Navbar</h1>
          <Menulist />
          
          <button onClick={()=>setShowMenu(true)}>=</button>
      </nav>
  );
}
