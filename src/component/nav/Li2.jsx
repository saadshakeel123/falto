import { Link } from "react-router-dom";

function Li2() {
  return (
    <li class="nav-item">
      <Link class="nav-link" to="/Countries"  aria-current="page">
        Countries
      </Link>
    </li>
  )
}

export default Li2;