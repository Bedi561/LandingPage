import { useNavigate } from "react-router-dom";
import '../tailwind.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const NavbarStyle = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: 0,
    zIndex: 2, // Increased zIndex value
    position: "sticky",
    top: 0,
    width: "100%",
    overflowX: "hidden",
  });
  
  const NavLinkStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
    cursor: 'pointer',
    paddingRight: '50px',
    fontSize: '120%',
    color: '#1E40AF',
  });
  
  function Bar() {
    const navigate = useNavigate();
  
    return (
      <div style={NavbarStyle()} className="bg-white shadow-md">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <span style={{ paddingLeft: "50px", fontSize: "200%" }} className="text-7xl font-bold text-blue-600">Hyggex</span>
        </div>
  
        <div className="flex space-x-4">
          <span style={NavLinkStyle()} onClick={() => navigate("/home")}><AddCircleOutlineOutlinedIcon/> Create Flashcard</span>
        </div>
      </div>
    );
  }
  
  export default Bar;
  