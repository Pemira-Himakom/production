import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminLogout } from "../store/authSlice";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setAdminLogout());
    navigate('/admin/login')
  };

  return (
    <nav className='border-b-4 border-choco flex justify-end bg-whiteWeak font-semibold'>
      <Link to='/admin/summary'>
        <div className='border-l-4 border-choco py-2 px-8'>Summary</div>
      </Link>
      <Link to='/admin/assign'>
        <div className='border-l-4 border-choco py-2 px-8'>Identification</div>
      </Link>
      <Link to='/admin/detect'>
        <div className='border-l-4 border-choco py-2 px-8'>Detect Validity</div>
      </Link>
      <div to='/admin/login' className='border-l-4 border-choco py-2 px-8'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navigation;
