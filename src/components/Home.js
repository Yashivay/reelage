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
import comp1 from './images/comp1.png';

import prtcptImg1 from './images/prtcptImg1.png';
import prtcptImg2 from './images/prtcptImg2.png';
import prtcptImg3 from './images/prtcptImg3.png';

import locationIcn from './images/location.png';
import fashionImg from './images/fashion.png';
import voiceImg from './images/voice.png';

import singer1 from './images/mohit.png';
import singer2 from './images/sara.png';
import singer3 from './images/de.png';

import Dncr1 from './images/Dncr1.png';
import Dncr2 from './images/Dncr2.png';
import Dncr3 from './images/Dncr3.png';

import danceImg from './images/danceImg.png';

import firstMedal from './images/firstMedal.png';
import SecondMedal from './images/SecondMedal.png';
import ThirdMedal from './images/ThirdMedal.png';


function Home() {
  return (
    <div>
      <div class="HeroSectionBody">
        <div className="container">

          <div className="HeroSection">
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


            <div className='row'>
              <div className='col-lg-6'>
                <div class="heroTxtBx">
                  <div className='upcmngBtn'> Upcoming </div>
                  <div className='heroText'> THE REEL STAR </div>

                  <div className='dflexY heroOtpnBx'>
                    <div className='optnIcn'>
                      <span>
                        <img src={CateIcn} className="webLogo" alt="webLogo" />
                      </span>
                      <span className='greyText'> Category:</span> Acting
                    </div>

                    <div className='optnIcn'>
                      <span>
                        <img src={croundIcn} className="webLogo" alt="webLogo" />
                      </span>
                      <span className='greyText'> Current Round:</span> Audition
                    </div>
                  </div>



                  <div class="heroTxtBx2">
                    <div className='heroTextSm'>  Act to express your </div>
                    <div className='heroTextBg'>  emotions, speech, </div>
                    <div className='heroTextBg'>  dialogue and expressions. </div>

                    <p className='Clickbtn'> Click to Watch </p>

                    <div className='dflexY_SBx heroOtpn_SBx'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='greyText'>28 Participants</span>
                      </div>
                      <div className='optnIcn'>
                        <span>
                          <img src={calenderIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='greyText'>20th August 2021</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="heroImgBx">
                  {/* <img src={HeroSectionAfterImg} className="HeroSectionImg" alt="HeroSectionImg" />  */}
                </div>
              </div>
            </div>
          </div>

          <div className='boxContainer'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  {/* <img src={HeroSectionAfterImg} className="HeroSectionImg" alt="HeroSectionImg" />  */}
                </div>
                <div className='col-md-6'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='comDtlMnBx'>
        <div className="container">
          <div className='comDtlInrBx bgStrokeText mtN100'>
            <div className='statusSriped'> Compeleted </div>
            <div className="row">
              <div className="col-md-5 col-lg-5">
                <div className='compImgBx'>
                  <img src={comp1} className="HeroSectionImgNN" alt="HeroSectionImg" />
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className='comDtlMnBx'>

                  <div class="heroTxtBx_card">
                    <div className='heroText_card'> <span className='bold'> THE REEL </span> STAR </div>

                    <div className='dflexY heroOtpnBx_NBrdr'>
                      <div className='optnIcn'>
                        <span>
                          <img src={CateIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>Category:</span>
                        <span className='darkGreyText boldY'> Dance </span>
                      </div>
                    </div>

                    <div className='dflexY heroOtpnBx_card'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>66 Participants</span>
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={calenderIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>18th August 2021</span>
                      </div>
                    </div>

                    <div class="heroTxtBx2">
                      <p className='heroTextSm_card'>  A style of movement which indicates</p>
                      <p className='heroTextBg_card'>  your expression through moves! </p>
                    </div>

                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='prtcptBx WinMedalF'>
                          <div className='prtcptImgBx'>
                            <img src={prtcptImg1} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt10 WinMedalS'>
                          <div className='prtcptImgBx'>
                            <img src={prtcptImg2} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt20 WinMedalT'>
                          <div className='prtcptImgBx'>
                            <img src={prtcptImg3} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='Clickbtn mtY0'> Click To Watch </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='spacer'>  </div>

      <div className='comDtlMnBx'>
        <div className="container">
          <div className='comDtlInrBx bgStrokeText_Fashion'>
            <div className='statusSriped'> Upcoming </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className='comDtlMnBx'>

                  <div class="heroTxtBx_card">
                    <div className='heroText_card'> <span className='bold'> THE REEL </span> STAR </div>

                    <div className='dflexY heroOtpnBx_NBrdr'>
                      <div className='optnIcn'>
                        <span>
                          <img src={CateIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>Category:</span>
                        <span className='darkGreyText boldY'> Fashion </span>
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={croundIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>Current Round:</span>
                        <span className='darkGreyText boldY'>Audition</span>
                      </div>

                    </div>

                    <div className='dflexY heroOtpnBx_card'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>66 Participants</span>
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={calenderIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>18th August 2021</span>
                      </div>
                    </div>
                    <div class="heroTxtBx2">
                      <p className='heroTextSm_card'> Accessorize your outfits and dazzle </p>
                      <p className='heroTextBg_card'> this competition with style </p>
                    </div>
                    <p className='Clickbtn mtY0'> Click To Watch </p>

                    {/* <div className='ClickbtnBx'>
                <p className='Clickbtn'>  
                  Click to Watch
                </p>
              </div> */}

                  </div>

                </div>
              </div>

              <div className='col-md-1 col-lg-1'></div>

              <div className="col-md-5 col-lg-5">
                <div className='compImgBx'>
                  <img src={fashionImg} className="HeroSectionImgNN" alt="HeroSectionImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='spacer'>  </div>

      <div className='comDtlMnBx'>
        <div className="container">
          <div className='comDtlInrBx bgStrokeText_Singer'>
            <div className='statusSriped'> Compeleted </div>
            <div className="row">
              <div className="col-md-5 col-lg-5">
                <div className='compImgBx'>
                  <img src={voiceImg} className="HeroSectionImgNN" alt="HeroSectionImg" />
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
                <div className='comDtlMnBx'>

                  <div class="heroTxtBx_card">
                    <div className='heroText_card'> <span className='bold'> THE VOICE </span> SENSATION </div>

                    <div className='dflexY heroOtpnBx_NBrdr'>
                      <div className='optnIcn'>
                        <span>
                          <img src={CateIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>Category:</span>
                        <span className='darkGreyText boldY'> Singing </span>
                      </div>
                    </div>

                    <div className='dflexY heroOtpnBx_card'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>66 Participants</span>
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={calenderIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>18th August 2021</span>
                      </div>
                    </div>

                    <div class="heroTxtBx2">
                      <p className='heroTextSm_card'>  A style of movement which indicates</p>
                      <p className='heroTextBg_card'>  your expression through moves! </p>
                    </div>

                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='prtcptBx WinMedalF'>
                          <div className='prtcptImgBx'>
                            <img src={singer1} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Dhitasmita De </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt10 WinMedalS'>
                          <div className='prtcptImgBx'>
                            <img src={singer2} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Mohit Parashar </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt20 WinMedalT'>
                          <div className='prtcptImgBx'>
                            <img src={singer3} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Sara Hashmi </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='Clickbtn mtY0'> Click To Watch </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='spacer'>  </div>

      <div className='comDtlMnBx'>
        <div className="container">
          <div className='comDtlInrBx bgStrokeText_Dancer'>
            <div className='statusSriped'> Upcoming </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className='comDtlMnBx'>

                  <div class="heroTxtBx_card">
                    <div className='heroText_card'> <span className='bold'> THE REEL </span> STAR </div>

                    <div className='dflexY heroOtpnBx_NBrdr'>
                      <div className='optnIcn'>
                        <span>
                          <img src={CateIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>Category:</span>
                        <span className='darkGreyText boldY'> Dance </span>
                      </div>
                    </div>

                    <div className='dflexY heroOtpnBx_card'>
                      <div className='optnIcn'>
                        <span>
                          <img src={playBtnIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>66 Participants</span>
                      </div>

                      <div className='optnIcn'>
                        <span>
                          <img src={calenderIcn} className="webLogo" alt="webLogo" />
                        </span>
                        <span className='darkGreyText'>18th August 2021</span>
                      </div>

                    </div>


                    <div class="heroTxtBx2">
                      <p className='heroTextSm_card'>  A style of movement which indicates</p>
                      <p className='heroTextBg_card'>  your expression through moves! </p>
                    </div>

                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='prtcptBx WinMedalF'>
                          <div className='prtcptImgBx'>
                            <img src={Dncr1} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt10 WinMedalS'>
                          <div className='prtcptImgBx'>
                            <img src={Dncr2} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='prtcptBx mt20 WinMedalT'>
                          <div className='prtcptImgBx'>
                            <img src={Dncr3} className="prtcptImg" alt="prtcptImg" />
                          </div>
                          <div className='prtcptTextBx'>
                            <p className='prtcptName'> Monalisha Basistha </p>
                            <p className='prtcptLocation'><img src={locationIcn} className="locationIcn" alt="prtcptImg" /> Assam, India </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='Clickbtn mtY0'> Click To Watch </p>
                  </div>
                </div>
              </div>

              <div className='col-md-1 col-lg-1'></div>

              <div className="col-md-5 col-lg-5">
                <div className='compImgBx'>
                  <img src={danceImg} className="HeroSectionImgNN" alt="HeroSectionImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
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

export default Home;
