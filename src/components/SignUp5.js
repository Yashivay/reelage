// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from 'react-bootstrap/Form';
import logo from './images/signUpImg5.png';
import back from './images/back.png';

import Rlogo from './images/logo.png';
import email from './images/email.png';
import password from './images/password.png';
import fb from './images/fb.png';
import google from './images/google.png';


function App() {
  return (
    <div class="MainBody">
      <div className="container"> 
        <img src={Rlogo} className="rlogo" alt="rlogo" />  
        
        <div className="SignBody SignBody5"> 

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="SignFormBox SignFormBox5">   
            <form>
                          
              <div className='SignFormBoxHeader'> 
              <a href="#"> 
                <div className='backBox'>
                  <img src={back} className="rlogo" alt="rlogo" /> 
                  <p> Back </p>
                </div>
              </a>

                <h1> Sign in </h1>
                <p>Please enter your details</p>
              </div>

              <div class="form-group">
                <label for="name">Email</label>
                <img src={email} className="yInputIcon" alt="yInputIcon" /> 
                <Form.Control type="email" class="form-control yInput" id="name" aria-describedby="emailHelp" placeholder="Johandoe@gmail.com"/>      
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <img src={password} className="yInputIcon2" alt="yInputIcon" /> 
                <Form.Control  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <a href="#">  
                <small id="emailHelp" class="form-text text-muted VOneText"><span> Forgot Password </span></small>  
                </a>          
              </div>   

                <button type="submit" class="btn btn-danger formSbmitBtn"> Sign In </button>
                <div className='textCenter mtyfnt'>
                <a href="#">  
                <small id="emailHelp" class="form-text text-muted VTwoText">Havn’t account?<span  class="textRed"> Sign up </span></small>  
                </a>       
                </div>

                <div className='textCenter mtyfnt'>
                <a href="#">  
                <small id="emailHelp" class="form-text text-muted VTwoText mty">Or sign in with</small>  
                </a>       
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
                <div class="signUpImg bg5Img"> 
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
