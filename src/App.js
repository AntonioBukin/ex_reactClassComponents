import Navbar from "./modules/Navbar/Navbar";

import navbarMenuItems from "./data/navbarMenuItems.json"

import "./shared/styles/styles.scss";

function App() {
  return (
   <Navbar menuItems={navbarMenuItems} />
  );
}

export default App;
