import React from 'react';
import logoImagee from '../assets/macrolighttrading.jpg';

const Footer = () => {
  return (
    <footer className="n-section n-footer">
      <div className="n-footer w-container">
        <div className="w-layout-grid n-footergrid">
          <div id="w-node-aa544811-11df-f601-4662-9accaa8c42d4-aa8c42d1" className="n-footerlogowrap">
            <img
              src={logoImagee}
              loading="lazy" alt="Lance business Banking App for freelancers" width="168" className="logofooter"
            />
            <div id="w-node-aa544811-11df-f601-4662-9accaa8c42d6-aa8c42d1" className="n-footermarginleft"></div>
          </div>
          <div id="w-node-aa544811-11df-f601-4662-9accaa8c42d9-aa8c42d1" className="n-footerdisclaimerwrap">
            <p className="n-disclaimer"><em>Sequence is a financial technology company, not a bank. Banking services provided
                by Thread Bank; Member FDIC.</em><br /></p>
          </div>
          <div id="w-node-aa544811-11df-f601-4662-9accaa8c42e2-aa8c42d1" className="n-footerlistwrap">
            <ul role="list" className="n-footerlist w-list-unstyled">
              <li className="n-footerlisttitle">
                <h4 className="n-paragraph03 medium">Legal</h4>
              </li>
              <li className="n-footerlistitem"><a href="https://app.getsequence.io/api/documents/terms_of_service"
                  target="_blank" className="n-paragraph03 footerlink">Terms of service</a></li>
              {/* Add other legal items as needed */}
            </ul>
          </div>
          <div id="w-node-aa544811-11df-f601-4662-9accaa8c42f3-aa8c42d1" className="n-footerlistwrap">
            <ul role="list" className="n-footerlist w-list-unstyled">
              <li className="n-footerlisttitle">
                <h4 className="n-paragraph03 medium">Social</h4>
              </li>
              <li className="n-footerlistitem"><a href="https://discord.gg/QT2VnkT2Wy" target="_blank"
                  className="n-paragraph03 footerlink">Discord</a></li>
              {/* Add other social links as needed */}
            </ul>
          </div>
          <div id="w-node-aa544811-11df-f601-4662-9accaa8c430a-aa8c42d1" className="n-footerlistwrap">
            <ul role="list" className="n-footerlist w-list-unstyled">
            <li class="n-footerlisttitle">
              <h4 class="n-paragraph03 medium">Legal</h4>
            </li>
            <li class="n-footerlistitem"><a href="https://app.getsequence.io/api/documents/terms_of_service"
                target="_blank" class="n-paragraph03 footerlink">Terms of service</a></li>
            <li class="n-footerlistitem"><a href="https://app.getsequence.io/api/documents/privacy_policy"
                target="_blank" class="n-paragraph03 footerlink">Privacy policy</a></li>
            <li class="n-footerlistitem"><a
                href="https://app.getsequence.io/api/documents/electronic_disclosure_and_consent" target="_blank"
                class="n-paragraph03 footerlink">Electronic disclosure</a></li>
            <li class="n-footerlistitem"><a href="https://app.getsequence.io/api/documents/consumer_banking_agreement"
                target="_blank" class="n-paragraph02 footerlink n-paragraph03">Consumer banking agreement</a></li>
            <li class="n-footerlistitem"><a href="https://app.getsequence.io/api/documents/business_banking_agreement"
                target="_blank" class="n-paragraph02 footerlink">Business banking agreement</a></li>
            <li class="n-footerlistitem"><a href="/google-user-data-policy" class="n-paragraph02 footerlink">Google User
                Data Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
