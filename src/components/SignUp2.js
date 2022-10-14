import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from 'react-bootstrap/Form';
import logo from './images/signup2img.png';

import Rlogo from './images/logo.png';

import calender from './images/calender.png';
import gender from './images/gender.png';
import country from './images/country.png';
import back from './images/back.png';


function App() {
  return (
    <div class="MainBody">
      <div className="container"> 
        <img src={Rlogo} className="rlogo" alt="rlogo" />  
        
        <div className="SignBody2"> 
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          
          <div className="SignFormBox">           
            <form>                          
              <div className='SignFormBoxHeader'> 
              
              <a href="#"> 
                <div className='backBox'>
                  <img src={back} className="rlogo" alt="rlogo" /> 
                  <p> Back </p>
                </div>
              </a>

                <h1>Sign up</h1>
                <p>Please enter your details</p>
              </div>

              <div class="form-group">
                <label for="phonenumber">Age</label>
                <img src={calender} className="yInputIcon" alt="yInputIcon" /> 
                <Form.Control type="number" class="form-control" id="phonenumber" aria-describedby="emailHelp" placeholder="25"/>
              </div>

            <Form.Group className="form-group">
              <label for="phonenumber">Gender</label>
              <img src={gender} className="yInputIcon" alt="yInputIcon" /> 
              <Form.Select className='select'>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="form-group">
              <label for="phonenumber">Country</label>
              <img src={country} className="yInputIcon" alt="yInputIcon" /> 
              <Form.Select className='select'>
                <option>Select</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Bhuthan</option>
              </Form.Select>
            </Form.Group>

                <button type="submit" class="btn btn-danger formSbmitBtn"> Next </button>
                
            </form>
          
              </div>
            </div> 
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">          
                {/* <img src="signUp.png"/> */}
                <div class="signUpImg bg2Img">
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
