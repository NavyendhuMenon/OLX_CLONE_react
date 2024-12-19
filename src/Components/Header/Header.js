import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {

  const {user, setUser} = useContext(AuthContext)
  const {auth} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogout = async()=>{
    try{
      await auth.signOut()
      setUser(null)
      history.push('/login')
    }catch(error){
      console.error('Error in logingout', error.message)
    }
  }

  const handleLoginClick = () => {
    history.push('/login'); 
  };

  const handleLoginSell = () => {
    history.push('/create'); 
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user ? (
            <>
              <span>Hi, {user.name}!</span>
              <button onClick={handleLogout} className="logoutButton">
                Logout
              </button>
            </>
          ) : (
            <span onClick={handleLoginClick}>Login</span>
          )}
          <hr />
        </div>


        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleLoginSell}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
