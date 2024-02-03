import React from 'react';
import logoImage from '../assets/macrolighttrading.jpg';

const Navbar = () => {
  return (
    <div data-collapse="medium" data-animation="default" data-duration="600" data-easing="ease-in-out-circ"
      data-easing2="ease" data-no-scroll="1" role="banner" className="n-navbar w-nav">
      <div className="w-layout-grid n-navgrid">
        <a href="/" id="w-node-_79c2abdf-351e-13ab-d6dc-1455d66aafc8-d66aafc6" aria-current="page" className="logolink w-nav-brand w--current" aria-label="home">
          <img loading="lazy" height="320"
            alt=""
            src={logoImage}
            className="n-logo" />
        </a>
        <div id="w-node-_79c2abdf-351e-13ab-d6dc-1455d66aafcc-d66aafc6" className="menu-button w-nav-button"
          style={{ "-webkit-user-select": "text" }} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0"
          aria-haspopup="menu" aria-expanded="false">
          
          <div className="n-lottiemenu"
  data-animation-type="lottie"
  data-src="https://assets-global.website-files.com/6286650c317fddfbb431b9c1/62f27ad9533cf267e74b62c7_MenuLottie.json"
  data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0.8"
  data-duration="0">
   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 375 667" width="375" height="667" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
      <defs>
        <clipPath id="__lottie_element_4">
          <rect width="375" height="667" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_4)">
        <g transform="matrix(1,0,0,1,187.5,382.9930114746094)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path stroke-linecap="round" stroke-linejoin="miter" fillOpacity="0" strokeMiterlimit="4"
              stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="16" d=" M-80.5,0 C-80.5,0 80.5,0 80.5,0">
            </path>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,187.5,332.9930114746094)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path stroke-linecap="round" stroke-linejoin="miter" fillOpacity="0" strokeMiterlimit="4"
              stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="16" d=" M-80.5,0 C-80.5,0 80.5,0 80.5,0">
            </path>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,187.5,282.9930114746094)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path stroke-linecap="round" stroke-linejoin="miter" fillOpacity="0" strokeMiterlimit="4"
              stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="16" d=" M-80.5,0 C-80.5,0 80.5,0 80.5,0">
            </path>
          </g>
        </g>
      </g>
    </svg>
</div>



      </div>
        <a id="w-node-_1ba85524-3d57-8c1a-8bdc-2c3cfab2780a-d66aafc6" href="https://app.getsequence.io/login" className="link">Log in</a>
        <a href="https://app.getsequence.io/signup" id="w-node-_79c2abdf-351e-13ab-d6dc-1455d66aafca-d66aafc6" className="n-button topmenu w-button" style={{ backgroundColor: '#006ECB' }}>Sign up</a>
        <div id="w-node-_79c2abdf-351e-13ab-d6dc-1455d66aafdf-d66aafc6" className="n-navbarmenu">
          <a href="/howitworks" className="n-navlink w-nav-link">How does it work</a>
          <a href="/about" className="n-navlink w-nav-link">About</a>
          <a href="/pricing" className="n-navlink w-nav-link">Pricing</a>
          <a href="/quaestor" className="n-navlink w-nav-link">Advisors</a>
          <a href="https://playground.getsequence.io" target="_blank" className="n-navlink hide w-nav-link">Playground</a>
          <a href="/faq" className="n-navlink w-nav-link">FAQ</a>
        </div>
      </div>
      <nav role="navigation" className="n-menudropdownwrap w-nav-menu">
        <div className="n-navbarmenu indropdown">
         <a href="/howitworks" className="n-navlink w-nav-link">How it works</a>
          <a href="/about" className="n-navlink w-nav-link">About</a>
          <a href="/pricing" className="n-navlink w-nav-link">Pricing</a>
          <a href="/quaestor" className="n-navlink w-nav-link">Advisors</a>
          <a href="https://playground.getsequence.io" target="_blank" className="n-navlink hide w-nav-link">Playground</a>
          <a href="/faq" className="n-navlink w-nav-link">FAQ</a>
          <a href="https://app.getsequence.io/login" target="_blank" className="n-navlink login w-nav-link">Log In</a>
        </div>
        <a href="/" aria-current="page" className="n-button w-button w--current">Sign up</a>
      </nav>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
  );
};

export default Navbar;
