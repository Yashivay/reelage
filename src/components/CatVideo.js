import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/signup3img.png';
import Rlogo2 from './images/logoW.png';

import HeroSectionImg from './images/wallpapersden.png';
import HeroSectionAfterImg from './images/heroBgAfter.png';

import CateIcn from './images/categories.png';
import croundIcn from './images/cround.png';

import calenderIcn from './images/calender.png';
import playBtnIcn from './images/playBtn.png';

import userBigIcn from './images/userBig.png';

import catVdoProfle from './images/catVdoProfle.png';
import CatvdoThumbnail from './images/CatvdoThumbnail.png';
import CatvdoThumbnail2 from './images/CatvdoThumbnail2.png';
import CatvdoThumbnail3 from './images/CatvdoThumbnail3.png';

import CatvdoThumbnail_AD01 from './images/CatvdoThumbnail_AD01.png';
import CatvdoThumbnail_AD02 from './images/CatvdoThumbnail_AD02.png';
import CatvdoThumbnail_AD03 from './images/CatvdoThumbnail_AD03.png';
import CatvdoThumbnail_AD04 from './images/CatvdoThumbnail_AD04.png';
import CatvdoThumbnail_AD05 from './images/CatvdoThumbnail_AD05.png';
import CatvdoThumbnail_AD06 from './images/CatvdoThumbnail_AD06.png';
import CatvdoThumbnail_AD07 from './images/CatvdoThumbnail_AD07.png';
import CatvdoThumbnail_AD08 from './images/CatvdoThumbnail_AD08.png';




function CatVieo() {
  return (
    <div>
      <div class="CatVideo_HeroSectionBody ">
        <div class="HdrScndCntnrFluid ">
          <div className="container">
            <div className="CatVideo_HeroSection">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className='navBar'>
                    <div className='LogoBx'>
                      <img src={Rlogo2} className="webLogo" alt="webLogo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className='navBxLinks'>
                    <ul>
                      <li className='greyText'>
                        <img src={userBigIcn} className="userBigIcn" alt="userBigIcn" />
                        Sign in
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>              
            </div>          
          </div>   
          <div className="container">
              <div className='row'>
                <div className='col-lg-12'>
                  <div class="VdoCat_heroTxtBx">
                    <div className='VdoCat_heroText'> THE REEL STAR </div>

                    <div className='dflexY VdoCat_heroOtpnBx'>
                      <div className='optnIcn'>
                        <span>
                          <img src={CateIcn} className="" alt="webLogo" />
                        </span>
                        <span className='greyText'> Category:</span> Acting
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={croundIcn} className="" alt="webLogo" />
                        </span>
                        <span className='greyText'> Current Round:</span> Audition
                      </div>
                    </div>

                        <div className='optnIcn flexCenter ImgW20'>
                          <span>
                            <img src={calenderIcn} className="" alt="webLogo" />
                          </span>
                          <span className='greyText VdoCat_clndrFont'> 20th August 2021</span>
                        </div>                                                         
                        <img src={catVdoProfle} className="catVdoProfile" alt="webLogo" />
                  </div>
                </div>
              </div>
          </div>     
      </div>


       
      <div className='CatVdo_comDtlMnBx CatVdoMt100'>
        <div className="container">
          <div className='CatVdo_comDtlInrBx'>
            <div className='container brdrBtm CardVdo_mb30'> 
              <div className="row">

                <div className="col-md-6 col-lg-6">
                      <div className='Round_Number'>
                        <p> Round 3 </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                    <div className='Participants_Number'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText2'>66 Participants</span>
                      </div>
                    </div>
                </div>

              </div>
            </div>

            <div className='row mbRow40'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>      

            </div>

            <div className='row'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='CatVdo_comDtlMnBx CatVdoMt40'>
        <div className="container">
          <div className='CatVdo_comDtlInrBx'>
            <div className='container brdrBtm CardVdo_mb30'> 
              <div className="row">

                <div className="col-md-6 col-lg-6">
                      <div className='Round_Number'>
                        <p> Round 2 </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                    <div className='Participants_Number'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText2'>08 Participants</span>
                      </div>
                    </div>
                </div>

              </div>
            </div>

            <div className='row mbRow40'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>      

            </div>

            <div className='row'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail2} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='CatVdo_comDtlMnBx CatVdoMt40'>
        <div className="container">
          <div className='CatVdo_comDtlInrBx'>
            <div className='container brdrBtm CardVdo_mb30'> 
              <div className="row">

                <div className="col-md-6 col-lg-6">
                      <div className='Round_Number'>
                        <p> Round 1 </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                    <div className='Participants_Number'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText2'>08 Participants</span>
                      </div>
                    </div>
                </div>

              </div>
            </div>

            <div className='row mbRow40'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>      

            </div>

            <div className='row'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail3} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='CatVdo_comDtlMnBx CatVdoMt40'>
        <div className="container">
          <div className='CatVdo_comDtlInrBx'>
            <div className='container brdrBtm CardVdo_mb30'> 
              <div className="row">

                <div className="col-md-6 col-lg-6">
                      <div className='Round_Number'>
                        <p> Audition </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                    <div className='Participants_Number'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText2'>08 Participants</span>
                      </div>
                    </div>
                </div>

              </div>
            </div>

            <div className='row mbRow40'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD01} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD02} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD03} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD04} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>      

            </div>

            <div className='row'>
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD05} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD06} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
              
              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD07} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>

              <div className='col-md-3'>
                <div className='thumbnailBx'>
                  <img src={CatvdoThumbnail_AD08} className="" alt="webLogo" />                  
                  <span className='timeStamp'> 02 : 27 </span>
                  <p className='prsnName'> Tanmay </p>
                  <p className='viewTimeline'> 0 Views . 1 Year Ago </p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
      

     <div className='footer2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>

              <div className='ftrLogo'>
                <img src={Rlogo2} className="webLogo" alt="webLogo" />
              </div>

              <div className='ftrLinks'>
                <ul>
                  <li> Term of Use </li>
                  <li> Privacy Policy </li>
                  <li> Disclaimer </li>
                </ul>
              </div>

              <div className='cpyright'>
                <p> © 2022 Reelage. All Rights Reserved  </p>
              </div>

            </div>
          </div>
        </div>
     </div>
    </div>

  );
}

export default CatVieo;
