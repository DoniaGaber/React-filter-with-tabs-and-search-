import React from 'react'

export default function Menulist({showMenu , setShowMenu}) {
  return (
      <div className={`menulist ${showMenu ? "active" : ""} `}>
          <span  onClick={()=>setShowMenu(false)}>x</span>
      </div>
  );
}
