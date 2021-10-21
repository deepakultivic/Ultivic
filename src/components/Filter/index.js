// import React, { useState, useEffect } from "react";
// import { SRLWrapper } from "simple-react-lightbox";
// import { Link } from 'react-router-dom'

// const images = [
//   { id: "7", imageName: "ultivic-07.png", tag: "android" },
//   { id: "8", imageName: "ultivic-08.png", tag: "web" },
//   { id: "9", imageName: "ultivic-09.png", tag: "web" },
//   { id: "10", imageName: "ultivic-10.png", tag: "web" },
//   { id: "11", imageName: "ultivic-11.png", tag: "web" },
//   { id: "12", imageName: "ultivic-11.png", tag: "web" },
// ];
// function Filter() {
//   const [tag, setTag] = useState("all");
//   const [filterimages, setFilterimages] = useState([]);
//   const [initial, setinitial] = useState(6);
//   const [incremented, setincremented] = useState(0);
//   useEffect(() => {
//     const someFunc = () => {
//       let defaultimages = [
//         { id: "1", imageName: "ultivic-01.png", tag: "web" },
//         { id: "2", imageName: "ultivic-02.png", tag: "web" },
//         { id: "3", imageName: "ultivic-03.png", tag: "android" },
//         { id: "4", imageName: "ultivic-04.png", tag: "ios" },
//         { id: "5", imageName: "ultivic-05.png", tag: "ios" },
//         { id: "6", imageName: "ultivic-06.png", tag: "web" }]
//       console.log("Function being run after/on mount")
//       setFilterimages(defaultimages)
//     }
//     someFunc();
//   },[]);
//   function handleclick () {
//     console.log(filterimages)
//      setinitial(previnitial=>initial+3)
//      for(let k=incremented; k<initial-1; k++){
//        console.log(initial)
//       setFilterimages(filterimages => ([...filterimages, images[k]]));
//      }
//      setincremented(incremented=>initial)
//   }
//   return (
//     <div className="container">
//       <div className="filter_inner">
//         <div className="tagsfilter text-center">
//           <TagButton
//             name="all"
//             handleSetTag={setTag}
//             tagActive={tag === "all" ? true : false}
//           />
//           <TagButton
//             name="web"
//             handleSetTag={setTag}
//             tagActive={tag === "web" ? true : false}
//           />
//           <TagButton
//             name="ios"
//             handleSetTag={setTag}
//             tagActive={tag === "ios" ? true : false}
//           />
//           <TagButton
//             name="android"
//             handleSetTag={setTag}
//             tagActive={tag === "android" ? true : false}
//           />
//         </div>
//         <SRLWrapper>
//         <div className="row">
         
//             {filterimages.map((image, index) => (
//               <div key={index} className="image-card col-md-6 col-lg-4">
//                 <Link to={`/assets/portfolio/${image.imageName}`}>
//                   <img
//                     className="image"
//                     src={`/assets/portfolio/${image.imageName}`}
//                     alt=""
//                   />
//               </Link>

                
//               </div>
//             ))}
          
      
//         </div>
//         {incremented != images.length && 
//                 <div className="show_more global_btn mt-5">
//                 <a onClick={handleclick}>more</a>
//                 </div>
//             }
//         </SRLWrapper>
//       </div>
//     </div>
//   );
// }
// const TagButton = ({ name, handleSetTag, tagActive }) => {
//   return (
//     <button
//       className={`tag ${tagActive ? "active" : "filt_button"}`}
//       onClick={() => handleSetTag(name)}
//     >
   
//       {name.toUpperCase()}
//     </button>
//   );
// };
// export default Filter;


import React,{useEffect,useState} from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import axios from 'axios'
var array = [];
var page_category = [];
var last_category = [];
var last_page = [];
var images = [];
var first_inc = 0;
var hide_check ;
const Filter = () => {
    const [myimage, setMyimage] = useState([])   
    const  [active, setActive] = useState('false')
    const [category, setcategory] = useState('isactive')
    const [hide, setHide] = useState('')

 
    const myimg =((category)=>{
        
        if(category){

            page_category.push(category);
        }
        var last_index = page_category.length;
        if(array.length == 0){
           var page = 1;
        }else{
            var chk_length = array.length;
           var page = array[chk_length - 1];
        }
        if(last_category != page_category[last_index-1]){
            first_inc = 0;
            images = [];
            page = 1;
        }
        if(page_category.length == 0){
            category = 'ALL';
        }else{
            category = page_category[last_index-1];
        }
        var last_length = last_page.length;
        console.log('total',last_page[last_length - 1]);
        axios.get('https://ums.ultivic.com/api/development/images?category='+category+'&page='+page)
     .then((res)=>{
         const myimagess =res.data.data.data;
         var store = res.data.data.data;
         var check_page =res.data.data.last_page;
        var hide_check =res.data.data.next_page_url;
         last_page.push(check_page);
         last_category = [];
             if(check_page == page){
                 page = check_page;
                 first_inc++;
                }else{
                    page++;
                }
                array.push(page);
                console.log("inc page:",first_inc);
                if(first_inc <=1){
                    for(let i = 0 ;i < store.length;i++){
                        images.push(store[i]);
                    }
                    
                 }
                 if(hide_check == null){
                     setHide('hide')
                 }
                 else{
                     setHide('show')
                 }
            last_category.push(category);
        setMyimage(images);
        
     })
     setcategory(page_category[page_category.length - 1])
     setActive(!active);
   
    })

useEffect(() => {
    async function anyNameFunction() {
      const response = await axios.get('https://ums.ultivic.com/api/development/images?category=ALL&page=1');
      var store = response.data.data.data;
      var hide_check =response.data.data.next_page_url;
      for(let i = 0 ;i < store.length;i++){
          images.push(store[i]);
      }
      console.log("my aaray:",store)
      setMyimage(images);
      const check_page =response.data.data.last_page;
      var page = 1;
         if(check_page >= page){
             page = check_page;
         }else{
             page++;
         }
         array.push(page);
         page_category.push('ALL');
         last_category.push('ALL');
         setcategory(page_category[page_category.length - 1])
      
        if(hide_check == null){
            setHide('hide')
        }
        else{
            setHide('show')
        }
    }
    anyNameFunction();
}, [])



    return (
        <div className="container mb-5">
            <div className="tabs text-center mb-3">
                <button className={category == 'ALL' ? 'Active' : 'Inactive'} onClick ={(()=>myimg('ALL'))} >All</button>
                <button className={category == 'WEB' ? 'Active' : 'Inactive'} onClick ={(()=>myimg('WEB'))} >Web</button>
                <button className={category == 'IOS' ? 'Active' : 'Inactive'} onClick ={(()=>myimg('IOS'))} >iOS</button>
                <button className={category == 'ANDROID' ? 'Active' : 'Inactive'} onClick ={(()=>myimg('ANDROID'))} >Android</button>
             
            </div>
            <SRLWrapper>
         <div className="row ">
         {
                myimage.map((curelem,index)=>{
                    console.log(curelem)
                      return(
                        <div key={index} className="image-card col-md-6 col-lg-4">
                      
                            <img src={curelem.image} alt="" />
                    
                        </div>
                      )
                })
            }
         </div>
         </SRLWrapper>
            <div className={`text-center ${hide}`}  >
                <button className="cm_btn mt-3" onClick ={(()=>myimg())} >
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Filter
