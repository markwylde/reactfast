import { h, Component, render } from 'preact';

function Header () {
  return (
    <div className="header">
      <span>ReactFast</span>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/seo">Seo</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/dynamic">Dynamic</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
