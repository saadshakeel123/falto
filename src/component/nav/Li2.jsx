import { Link } from "react-router-dom";

function Li2() {
  return (
    <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Countries
      </Link>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link class="dropdown-item" to="/dropdown">Switzerland</Link></li>
        <li><Link class="dropdown-item" to="/dropdown/spain">Spain</Link></li>
        <li><a class="dropdown-item" href="#">
          Italy</a></li>
      </ul>
    </li>
  )
}

export default Li2;