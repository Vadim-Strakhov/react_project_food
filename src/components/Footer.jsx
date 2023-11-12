import React from 'react';

export const Footer = () => {
  return (
    <footer className='page-footer green lighten-2'>
      <div className='footer-copyright'>
        <div className='container white-text'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='white-text right'
            href='https://github.com/Vadim-Strakhov/react_project_food'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
