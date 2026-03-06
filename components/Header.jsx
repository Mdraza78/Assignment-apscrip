import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        
        <div className="header-top">
          <div className="header-left">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3L3 10.5L18 18L33 10.5L18 3Z" fill="black"/>
              <path d="M3 25.5L18 33L33 25.5V10.5L18 18L3 10.5V25.5Z" fill="black" fillOpacity="0.8"/>
            </svg>
          </div>
          
          <h1 className="logo-text">LOGO</h1>

          <div className="header-icons">
            <Search size={24} strokeWidth={1.5} className="icon" />
            <Heart size={24} strokeWidth={1.5} className="icon" />
            <ShoppingBag size={24} strokeWidth={1.5} className="icon" />
            <User size={24} strokeWidth={1.5} className="icon" />
            <div className="lang-selector">
              <span>ENG</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        
        <nav className="main-nav">
          <ul>
            <li><Link href="/">SHOP</Link></li>
            <li><Link href="#">SKILLS</Link></li>
            <li><Link href="#">STORIES</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}