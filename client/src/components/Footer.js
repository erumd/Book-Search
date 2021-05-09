import React from 'react';

export default function Footer() {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center text-light bg-dark"
    >
      <p style={{ color: 'white'}} className="text-white">
        &copy; Made <span></span> by{' '}
        <a
          style={{ color: 'sky' }}
          id="myInfo"
          href="https://github.com/erumd"
          target="_blank"
          rel="noreferrer"
        >
          Erum Dhukka
        </a>
      </p>
    </footer>
  );
}
