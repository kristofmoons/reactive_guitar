export function FilterSlider() {
    return (
        <span className="container">
      <span className="checkbox-container">
        <input className="checkbox-trigger" type="checkbox"/>
        <span className="menu-content">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          <span className="hamburger-menu"/>
        </span>
      </span>
    </span>
);

}