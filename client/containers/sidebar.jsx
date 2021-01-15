import React from 'react';

const Sidebar=()=>{
    
    const clickhandle=(e)=>{
      console.log("lkjlkjljlj");
      e.target.classList.toggle("active");
        let dropdownContent = e.target.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
    };
    
    return  <div className="sidenav">
    <a href="#about">درباره</a>
    <a href="#services">سرویس ها</a>
    <a href="#clients">مشتریان</a>
    <a href="#contact">اطلاعات تماس</a>
    <button className="dropdown-btn" onClick={(e)=>clickhandle(e)}>محصولات
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-container">
      <a href="#">خودم</a>
      <a href="#">خودت</a>
      <a href="#">خودمون</a>
     
    </div>
    <a href="#contact">جستجو</a>
  </div> ;
};
export default Sidebar;