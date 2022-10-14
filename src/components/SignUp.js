// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from './signUp.png';

import Rlogo from './images/logo.png';
// import RlogoS from './svg/rlgo.svg';

import user from './images/user.png';
import email from './images/email.png';
import phone from './images/phone.png';
import password from './images/password.png';
import fb from './images/fb.png';
import google from './images/google.png';


function App() {
  return (
    <div class="MainBody">
      <div className="container"> 
        <img src={Rlogo} className="rlogo" alt="rlogo" />  
        
        <div className="SignBody"> 

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="SignFormBox">   
            <form>
                          
              <div className='SignFormBoxHeader'> 
                <h1> Sign up </h1>
                <p>Please enter your details</p>
              </div>

              <div class="form-group">
                <label for="name">Name</label>
                <img src={user} className="yInputIcon" alt="yInputIcon" />    
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp" placeholder="Johan Doe"/>      
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <img src={email} className="yInputIcon" alt="yInputIcon" /> 
                <Form.Control type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Johandoe@gmail.com"/>    
              </div>

              <div class="form-group">
                <label for="phonenumber">Phone Number</label>
                <img src={phone} className="yInputIcon" alt="yInputIcon" /> 
                <Form.Control type="number" class="form-control" id="phonenumber" aria-describedby="emailHelp" placeholder="+91 0123456 7890"/>
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <img src={password} className="yInputIcon2" alt="yInputIcon" /> 
                <Form.Control  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <small id="emailHelp" class="form-text text-muted smf"> Must be at least 8 characters.</small>   
              </div>   

                <button type="submit" class="btn btn-danger formSbmitBtn"> Next </button>
                <div className='textCenter mtyfnt'>
                  <small id="emailHelp" class="form-text text-muted">Or sign up with</small>
                </div>

                <div className='signWithBtnBx'>                   
                  <div className='signWithBtn'>
                    <img src={google} className="App-logo" alt="fb" />  
                    <p> Signup With Google </p>
                  </div>
                  <div className='signWithBtn'>
                    <img src={fb} className="fbicn" alt="fb" />  
                    <p> Signup With Facebook </p>
                  </div>
                </div>
            </form>
          
              </div>
            </div> 
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">          
                {/* <img src="signUp.png"/> */}
                <div class="signUpImg"> 
                  <img src={logo} className="App-logo" alt="logo" />  
                </div>    

                

              </div> 
          </div>
        </div>
      </div>     
    </div>    
  );
}

export default App;
