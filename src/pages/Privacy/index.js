import React from 'react'
import Subheader from '../../components/Subheader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'
const Privacy = () => {
  return (
    <>
      <Header />
      <Subheader title="Privacy" sub="Policy" img="assets/services/privacy-policy.jpg" clases="career bg_overlay" />
      <div className='privacy_wrapper space'>
       <div className="container">
       <p>At Ultivic Pvt Ltd, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to ensure its security.</p>
        <h3>Personal Information:</h3>
        <p>We may collect personal information such as your name, email address, and contact details when you register on our website or interact with our services.</p>
        <h3>Usage Data:</h3>
        <p>We collect information about how you use our website, including the pages you visit, the time spent on each page, and any links you click.</p>
        <h3>
          Cookies and Similar Technologies:
        </h3>
        <p>We use cookies and similar technologies to enhance your browsing experience, analyze usage patterns, and deliver personalized content.</p>
        <h2>How We Use Your Information:</h2>
        <h3>Service Delivery:</h3>
        <p>We use your personal information to provide you with the services you have requested, including IT solutions and support.
        </p>
        <h3>
          Communication:
        </h3>
        <p>We may use your contact information to send you important updates, newsletters, and marketing communications. You can opt out of these communications at any time.</p>
        <h3>
        Analytics:
        </h3>
        <p>We analyze usage data to improve our website, services, and user experience.</p>
        <h3>Information Sharing:</h3>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third parties who assist us in operating our website or providing services, as long as those parties agree to keep your information confidential.</p>
        <h3>Data Security:</h3>
        <p>We take the security of your personal information seriously and implement appropriate measures to protect it from unauthorized access, disclosure, alteration, and destruction.</p>
          <h2>Your Choices:</h2>
          <h3>You have the right to:</h3>
          <ul>
            <li>Access the personal information we hold about you.
</li>
<li>Correct any inaccuracies in your personal information.
</li>
<li>Request the deletion of your personal information.
</li>
          </ul>
    <h3>Changes to this Privacy Policy:</h3>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated.</p>
    <h3>Contact Us:</h3>
    <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:sales@ultivic.com">sales@ultivic.com.</a></p>
       </div>
      </div>
      <Footer />
    </>
  )
}

export default Privacy