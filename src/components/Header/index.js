import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Header = () => {

  return (
    <header>
      {Object.keys(ROUTES).map(item => (
        <Link key={item} to={ROUTES[item]}>{item.replace(/_/g, " ").toLowerCase()}</Link>
      ))}
    </header>
  )
}

export default Header;