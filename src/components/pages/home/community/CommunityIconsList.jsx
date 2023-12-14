import React from 'react';
import './CommunityStyle.css';

const CommunityIconList = () => {
  const icons = [
    {
        href: 'https://twitter.com/pancakeswap',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-twitter"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="reddit"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
        ),
      },

      {
        href: 'https://t.me/pancakeswap',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-telegram"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="reddit"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
        ),
      },

      {
        href: 'https://reddit.com/r/pancakeswap',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-reddit"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="reddit"
          >
            <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
            <path d="M12 8l1 -5l6 1" />
            <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <circle cx="9" cy="13" r=".5" fill="currentColor" />
            <circle cx="15" cy="13" r=".5" fill="currentColor" />
            <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
          </svg>
        ),
      },

    {
      href: 'https://instagram.com/pancakeswap_official',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="social-media-logo"
          id="logo-instagram"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#1fc7d4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          key="instagram"
        >
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      ),
    },

    {
        href: 'https://github.com/pancakeswap',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-github"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        ),
      },

      {
        href: 'https://discord.gg/pancakeswap',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-discord"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
          </svg>
        ),
      },

      {
        href: 'https://www.youtube.com/@pancakeswap_official',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-media-logo"
            id="logo-youtube"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#1fc7d4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            key="instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        ),
      },
  ];

  return (
    <div>
      <div className="community-icons">
        {icons.map((icon, index) => (
          <a href={icon.href} target="_blank" rel="noopener noreferrer" key={index}>
            {icon.svg}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommunityIconList;
