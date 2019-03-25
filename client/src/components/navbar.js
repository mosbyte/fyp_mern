import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false
      };
    }
    showDropdown(e) {
      e.preventDefault();
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    render() {
      const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
      return (
        <ul className="my-nav-item dropdown">
          <li className="my-nav-item dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" 
            onMouseOver={(e) => {this.showDropdown(e)}} 
            onMouseLeave={(e) => {this.showDropdown(e)}}>
            {this.props.name}
        
          </li>
          <div className={classDropdownMenu} text-aria-labelledby="navbarDropdown" onMouseLeave={(e) => {this.showDropdown(e)}}>
          {this.props.children}
            
          </div>
        </ul>
      )
    }
  }
export default class Navbar extends Component {
    render() {
        return (
            <div className="mynav">
                <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <div className="container">
                    <Link to={'/'} className="navbar-brand"><h5>Final Year Project</h5></Link>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="my-nav-item"><Link to={'/'} className="my-nav-item">Home</Link></li>

                        <NavDropdown name="Chant" className='my-nav-link'>
                            <li className="dropdown-item"><Link to={'/chant/categorise'} className="nav-link">Categorise</Link></li>
                            <li className="dropdown-item"><Link to={'/chant/visualise'} className="nav-link">Visualise</Link></li>
                            <li className="dropdown-item"><Link to={'/chant/database'} className="nav-link">Database</Link></li>
                        </NavDropdown>
                        <NavDropdown name="Ritual">
                            <li className="dropdown-item"><Link to={'/ritual/categorise'} className="nav-link">Categorise</Link></li>
                            <li className="dropdown-item"><Link to={'/ritual/visualise'} className="nav-link">Visualise</Link></li>
                            <li className="dropdown-item"><Link to={'/ritual/database'} className="nav-link">Database</Link></li>
                        </NavDropdown>
                    </ul>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                  {/* will only search headlines */}
                    <input className="form-control mr-sm-2" type="search" placeholder="eg. chant: hooligans" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </header> <br/>
            </div>
        )
    }
}