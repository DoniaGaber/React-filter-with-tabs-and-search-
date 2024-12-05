import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import { postsData, tabs } from '../data/data'
import Navbar from '../Component/Navbar'         
import Menulist from '../Component/Menulist'
import SearchInput from '../Component/SearchInput'
import Taps from '../Component/Taps'

export default function HomePage() {
  const name = "donia"
  const age = 22
  let [counter , setCounter] = useState(10)
  let [userName, setUserName] = useState("donia") 
  let [isShow, setIsShow] = useState(false)
  // console.log(isShow);
  let [showMenu ,  setShowMenu] = useState(false)
  // console.log(showMenu);
  // useEffect(()=>{
  //   console.log("hello");
  // }, [])
  // useEffect(()=>{
  //   console.log("increase");
  // }, [counter])
  // useEffect(()=>{
  //   const x = setInterval(()=>{
  //     console.log("hello");
  //   })
  //   return ()=>{
  //     clearInterval(x)
  //   }
  // })
  const [searchPosts, setSearchPosts] = useState(postsData) 
  const [absPosts , setAbsPosts] = useState(postsData)
  const [searchVal , setSearchVal] = useState("")
  useEffect(()=>{
    // console.log(searchVal);
    const filterPosts = postsData.filter((ele) => ele.title.toLowerCase().includes(searchVal.toLowerCase()))
    // console.log(filterPosts);
    setSearchPosts(filterPosts)
  } , [searchVal])
  const [tabsActive, setTabsActive] = useState("all")
  useEffect(()=>{
         if (tabsActive === 'all') {
      setSearchPosts(postsData); // عرض كل البوستات
    } else {
      const filterPosts = postsData.filter(
        (ele) => ele.tags.toLowerCase() === tabsActive.toLowerCase()
      );
      setSearchPosts(filterPosts);
    }
  } , [tabsActive])
  return (
    <div className='px'>
      <Navbar  setShowMenu={setShowMenu} />
      <Menulist showMenu={showMenu} setShowMenu={setShowMenu} />
      <SearchInput searchVal={searchVal} setSearchVal={setSearchVal} />
      {/* <h1>Home Page</h1> */}
      {/* <button onClick={()=>setCounter(counter+1)}>increase{counter}</button>
      <button onClick={()=>setIsShow(!isShow)}>showtogele</button>
      <div className={`box ${isShow ? "isShow" : ""}`}></div>
      <p>{userName}</p> */}
{/*       
      <input type="text" onChange={(e) => setUserName(e.target.value)} /> */}
      <Taps activeTab={tabsActive} setActiveTab={setTabsActive} />
      <div className="carsdContainer py">
        {searchPosts.length === 0 ? <h1>no posts found</h1> : searchPosts.map((post , index)=>{
          return(<Card key={index}  title={post.title} content={post.content} tag={post.tags} />)
        })}
        
      


      </div>
    </div>
  )
}
