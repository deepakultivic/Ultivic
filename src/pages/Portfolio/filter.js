import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { portfolio } from '../../pages/Portfolio/projectjson';

import "./style.css";

  const initialvalue = 4;

  const Filter = () =>{
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [noOfElement, setnoOfElement] = useState(initialvalue);
    const [display, setDisplay] = useState([]);
    const [element, setElement] = useState([]);

    const handelload = () =>{
      //console.log(display)
      let displaylength= display.length;
      let elementlength = element.length;
       
      if(displaylength<elementlength){
      let paginatedelemetns=  element.slice(displaylength, displaylength+initialvalue);
      console.log(paginatedelemetns)
      paginatedelemetns.forEach(element=>{
        setDisplay(oldArray => [...oldArray, element]);
      })
    
      }
       
 }
 //console.log(display)
    useEffect(() => {
        setProjects(portfolio);
        setElement(portfolio)
        let pagedata= portfolio.slice(0, noOfElement)
      setDisplay(pagedata)
      }, []);

      useEffect(() => {
       
      }, [filter]);

      const filterelement=(filter)=>{
        console.log(filter)
        console.log(projects, "projects")
   setDisplay([]);
        setElement([]);
           const filtered = projects.filter(p => { 
         return p.category.includes(filter)
         
        }
        );
           setElement(filtered);
           let pagedata=  filtered.slice(0, noOfElement)
           setDisplay(pagedata);
            setFilter(filter)
      }
    
      return (
        <>
                <ul className="portfolio__labels">
                    <li> <a className={filter === 'all' ? "active" : ""}
                      active={filter === 'all'} onClick={() => filterelement('all')} >All</a></li> 
                 <li>  <a className={filter === 'websites' ? "active" : ""} active={filter === 'websites'} onClick={() => filterelement('websites')} >Websites</a> </li>   
                 <li>    <a className={filter === 'android' ? "active" : ""} active={filter === 'android'} onClick={() => filterelement('android')} >Android</a></li> 
                <li>     <a className={filter === 'ios' ? "active" : ""} active={filter === 'ios'} onClick={() => filterelement('ios')} >Ios</a></li> 
                   </ul>  
              <div className="container">
              <div className="row">
                  {display.map((item,index) =>(
                  
                  <div className="col-md-6 mb-5" key={index}>
                  <div className="design_images"><img src={item.imgsrc} alt="" /></div>
                  <div className="desgin">
                       <p>{item.sub_title}</p>
                        <h5 className="project_name mb-2">{item.title}</h5>

                        <Link className="see_projects" to={`/projects/${item.title}`}>See Project &#8594;</Link>
                     </div>
                     </div>
                     
                ))}
                </div> 
                {element.length > display?.length && ( 
                  <div className="portfolio_button">
             <div className='text-center'>
        <button  class="btn  brn-sm" onClick={handelload}>Load more</button>
        </div> 
        </div>
        ) } 
        </div>

                     
        </>
      )
    }

export default Filter;
