import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
const NoMatchPage = () => {
  return (
    <div>
        <Header/>
        <div className='no_match'>
            <div className='container text-center'>
            <h6>ERROR</h6>
            <h1>404</h1>
            <h4>SORRY, THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST!</h4>
            <h5>DONT WORRY JUST HAVE A  COFFEE AND COME BACK</h5>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default NoMatchPage