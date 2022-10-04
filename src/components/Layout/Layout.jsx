import "./layout.css";
import MainNavbar from "../Navbar/MainNavbar";
function Layout(props) {
  return (
    <div>
      <MainNavbar />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
