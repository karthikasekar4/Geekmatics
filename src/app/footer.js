import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


  const Footer = () => {
    // List of phone numbers
    const phoneNumbers = [
      { name: 'Dr.G.Rajesh', number: '+91' },
    ];
    const phone = [
      { name: 'Divya Prakash & Elavarshini', number: '+91' },
      { name: 'Vignesh & Teena Sharon', number: '+91' },
    ];
  return (
    <div>
      <footer className='footer pt-3'>
        <h2 className='col-4 offset-5 text-white'> Contact Us </h2>
        <hr className='border-5 text-white'/>
        <div className='container-fluid pb-3'>
           <div class="row footer text-white">
             <div class="col-sm-3 col-md-3 offset-1 social-media text-white mt-4">
             <div className="d-flex justify-content-center flex-column align-items-center">
             <h5 class='text-warning'> Staff Co-Ordinator : </h5>
           {phoneNumbers.map((phone, index) => (
             <a  key={index}  href={`tel:${phone.number}`}  className="text-decoration-none text-white mb-2 ms-5">{phone.name}<i className="bi bi-telephone-fill ms-2"></i> </a>
           ))}
           <h5 class='text-warning'> Student Co-Ordinator : </h5>
           {phone.map((phones, index) => (
             <a  key={index}  href={`tel:${phones.number}`}  className="text-decoration-none text-white mb-2 ms-5">{phones.name}<i className="bi bi-telephone-fill ms-2"></i> </a>
           ))}
            </div>
            </div>
            <div class="col-sm-12 col-md-3 offset-1 mt-4 address text-white">
              <h5 class='text-warning'> Address : </h5>
              <address />
                KGiSL Institute Of information Management,<br/>
                KGiSL Campus,Thudiyalur Road,<br/>
                Saravanampatti,<br/>
                Coimbatore-641035,Tamil Nadu.<br/>
                phone : 0422-4419999<br/>
                E-mail Id: info@Kgisliim.ac.in
            </div>
            <div class='col-sm-12 col-md-3 offset-1'>
              <h5 class='text-warning mt-4'> Designing and Developed by : </h5>
              <a class='text-decoration-none text-white mb-2'> Karthika s <br/>
              Sathish Kumar <br/>
              Sowndaryanayaki <br/>
              Sidharth <br/>
              Sai Esvar <br/>
              </a>
            </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
