import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavbarStyle = () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: 0,
    zIndex: 1,
    position: 'sticky',
    top: 0,
    width: '100%',
    overflowX: 'hidden',
    backdropFilter: scrolling ? 'blur(20px)' : 'none', // Increased blur factor to 20px
    backgroundColor: scrolling ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    transition: 'background-color 0.3s, backdrop-filter 0.3s',
  });
  

  const getNavLinkStyle = () => ({
    marginRight: '10px',
    cursor: 'pointer',
    paddingRight: '50px',
    fontSize: '120%',
    color: '#1E40AF',
  });

  return (
    <div style={getNavbarStyle()} className="bg-white shadow-md">
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <span style={{ paddingLeft: '50px', fontSize: '200%' }} className="text-7xl font-bold text-blue-600">
          Hyggex
        </span>
      </div>

      <div className="flex space-x-4">
        <span style={getNavLinkStyle()} onClick={() => navigate('/home')}>
          Home
        </span>
        <span style={getNavLinkStyle()} onClick={() => navigate('/flashcard')}>
          Flashcard
        </span>
        <span style={getNavLinkStyle()} onClick={() => navigate('/faq')}>
          Contact
        </span>
        <span style={getNavLinkStyle()} onClick={() => navigate('/faq')}>
          FAQ
        </span>
        <span style={getNavLinkStyle()} onClick={() => navigate('/faq')}>
          Login
        </span>
      </div>
    </div>
  );
};

export default Navbar;
