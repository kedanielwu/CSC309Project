import React, { Component } from 'react';

const styles = {
  container: {
    paddingBottom: '2rem',
    marginBottom: '1rem',
  },

  navbar: {
    // background: 'linear-gradient(red, yellow)',
    backgroundColor: '#',
    listStyleType: 'none',
    margin: '0',
    width: '100%',
    fontColor: 'black',
    padding: '15px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#d7ebba',
    borderWidth: '4px',
    height: '80px'
  },

  navbar_li: {
    fontFamily: "'Montserrat', sans-serif, bold",
    textDecoration: 'none',
    color: 'black',
    overflow: 'hidden',
    display: 'inline-block',
    verticalAlign: 'top'
  },

  search: {
    marginLeft: '65%',
  },

  logo: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: "'Montserrat', sans-serif, bold",
    marginLeft: '20px',
    display: 'inline',    
    fontSize: '45px',
    overflow: 'hidden',
    paddingRight: '10%',
  },
};

class Navbar extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>        
        
        <div id="navbar">
          <ul 
          style={styles.navbar}
          >
            <li id="logo">
              <a href="homepage.html" 
                style={styles.logo}
                >LOGO
              </a>
            </li>
            <li id="search" style={styles.search}>
              <form>
                   <input type="text" id="search-input" 
                      placeholder="Search listings.."   
                    />
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
