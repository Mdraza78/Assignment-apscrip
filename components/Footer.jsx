import { Facebook, Twitter, Instagram, Linkedin, Youtube, Radio } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-top">
          <div className="newsletter-section">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta muse.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          
          <div className="contact-currency-section">
            <div className="contact-us">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5380</p>
              <p>customercare@mettamusec.com</p>
            </div>
            
            <div className="currency">
              <h3>CURRENCY</h3>
              <div className="currency-selector">
                <span className="currency-option">USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

       
        <div className="footer-links">
          <div className="links-column">
            <h3>mettā muse</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="links-column follow-us">
            <h3>FOLLOW US</h3>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.272-.402.164-1.495-.697-2.429-2.889-2.429-4.647 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.27 1.041-1.009 2.348-1.503 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.36 1.51-1.44 2.48-.07 1.23.41 2.46 1.37 3.2.75.6 1.74.84 2.67.58.86-.25 1.58-.9 1.98-1.68.32-.62.45-1.32.44-2.01.02-4.15.01-8.31.02-12.46z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="RSS"><Radio size={20} /></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        
        <div className="copyright">
          <p>Copyright © 2023 mettamusec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}