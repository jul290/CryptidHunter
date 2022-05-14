import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <a href="/">CryptidHunter</a>
      </div>
      <div>
        <a href="/settings">Settings</a>
        <a href="/listings">Listings</a>
      </div>
    </div>
  );
};

export default Navbar;
