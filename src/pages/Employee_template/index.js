import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { ourteam } from '../../components/Services/pdata';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './style.css'
const Employee_template = () => {

    const emp_id=useParams();
    console.log(emp_id.emp_name,"emp_id")
    const [emp_data,setEmp_data]=useState([]);
    useEffect(()=>{
        if(emp_id?.emp_name!==null){
           
            setEmp_data(ourteam.filter(curEmp=>curEmp.emp_name === emp_id?.emp_name));
            console.log(emp_data);
        }
    },[])
    return (
          <>
            {
                emp_data.map((cur)=>{
                    return(
                    <>
                        <Header/>
                            <div className="about_emp space">
                                <div className="container">
                                    <div className="row w-100 align-items-center">
                                        <div className="col-md-4">
                                            <div className="emp_profile">
                                        <img src={`/${cur.emp_image}`} alt="" />
                                            </div>
                                        </div>
                                <div className="col-md-8">
                                    <div className="employe_information">
                                        <h6 className='text-white'>Hello</h6>
                                        <h2>I'm <span>{cur.emp_name} <br /> </span> {cur.emp_designation}</h2>
                                     </div>
                                </div>

                              
                            </div>
                           </div>
                        </div>
                        <div className="employee_info w-100 space">
                          <div className="container">
                          <div className="row w-100 align-items-center">
                               <div className="col-md-6">
                                <div className="text_highlight">
                                    <h3 className='mb-2'>About Me </h3>
                                    <p>{cur.emp_about}</p>
                                </div>          
                               </div>
                               <div className="col-md-6">
                               <div className="employe_information">
                                    <h4>Skills and Stength</h4>
                                    <ul className='mt-3'>
                                        {cur.skills.map((cuSkill,index)=>{
                                            return(
                                                <>
                                                <li key={index}>{cuSkill}</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                               </div>
                               </div> 
                              </div>                    
                        </div>
                   </>
                )
            })
        }
        <section className='contact_sec pt-4'>
                <div className="container">
                       <div className="contact_cmn">
                   <div className="row align-items-center">
                       <div className="col-md-8">
                       <div>
                       <h2>Let's work together on <br />your next project</h2>
                       </div>
                      
                    </div>
                       <div className="col-md-4">
                       <button className="btn  brn-sm"><Link className='text-white' to="/contact">Contact</Link></button>
                       </div>
                       </div>
                   </div>
                </div>
        </section>
        <Footer/>
    </>

  )
}

export default Employee_template