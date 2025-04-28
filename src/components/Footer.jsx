import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Контакти: <a href="mailto:kn23-n.havryliuk@nubip.edu.ua" style={styles.link}>kn23-n.havryliuk@nubip.edu.ua</a></p>
      <p>
        Соцмережі:
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}> Facebook</a>,
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}> Instagram</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    fontSize: '14px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '5px',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default Footer;
