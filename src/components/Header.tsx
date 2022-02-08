import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  fontWeight: 'bold',
  nav: {
    ul: {
      padding: 0,
      margin: 0,
      li: {
        display: 'inline-block',
        margin: '0 0 0 -8px',
        a: {
          textDecoration: 'none',
          display: 'inline-block',
          padding: '3px 5px',
          margin: '3px',
          backgroundColor: 'white',
          borderRadius: '3px'
        },
        'a:hover': {
          backgroundColor: 'rgb(234 234 234)'
        }
      }
    }
  }
});

function Header () {
  return (
    <Wrapper>
      ReactFast

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/seo">Seo</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/dynamic">Dynamic</a></li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;
