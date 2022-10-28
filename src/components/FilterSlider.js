
export function FilterSlider(props) {
    const {children} = props;

    return (

        <span className="container" style={{position: "fixed", top: "20vh", left: "-12px",zIndex:"1"}}>
      <span className="checkbox-container">
        <input className="checkbox-trigger" type="checkbox"/>
        <span className="menu-content">
                {children}
          <span className="hamburger-menu"/>
        </span>
      </span>
    </span>
    );

}