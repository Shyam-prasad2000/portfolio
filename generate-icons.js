const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const icons = {
  angular: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 5.5L3.5 17.5L12 22L20.5 17.5L22 5.5L12 2Z" fill="#DD0031"/>
    <path d="M12 2V22L20.5 17.5L22 5.5L12 2Z" fill="#C3002F"/>
    <path d="M12 5.5L6.5 17.5H9L10.1 14.8H13.9L15 17.5H17.5L12 5.5ZM12 8.8L13.3 12.3H10.7L12 8.8Z" fill="white"/>
  </svg>`,
  nextjs: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="black"/>
    <path d="M16.5 16.5L9.3 7H7.5V17H9.2V10.2L15.4 18.2C15.8 17.7 16.2 17.1 16.5 16.5Z" fill="white"/>
    <path d="M14.8 7H16.5V13.8L14.8 11.5V7Z" fill="white"/>
  </svg>`,
  nodejs: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L21 7.2V17.6L12 22.8L3 17.6V7.2L12 2Z" fill="#539E43"/>
    <path d="M12 4.5L18.8 8.4V16.3L12 20.2L5.2 16.3V8.4L12 4.5Z" fill="#3D7E30"/>
    <text x="12" y="14.8" fill="white" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="7" text-anchor="middle">JS</text>
  </svg>`,
  nestjs: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 8.7C20.9 5.5 18.7 3.5 16.8 2.5C14.7 1.4 12.4 1.8 10.9 2.9C9.5 3.9 8.6 5.5 8.3 7.2C8 9 8.5 10.6 9.5 11.8C9.1 12 8.6 12.4 8.2 12.9C7.3 14 6.9 15.4 7.2 16.8C7.5 18.2 8.5 19.4 9.8 20.1C11.1 20.8 12.7 20.9 14.1 20.4C16.8 19.5 18.4 17.1 18.2 14.2C18.1 13 17.5 11.9 16.6 11.1C18.2 11.5 19.9 11.1 20.9 9.9C21.4 9.6 21.5 9.1 21.5 8.7Z" fill="#E0234E"/>
    <circle cx="14" cy="8" r="1.5" fill="white"/>
  </svg>`,
  typescript: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#3178C6"/>
    <path d="M11.5 9.5H5.5V11.2H7.5V18H9.5V11.2H11.5V9.5Z" fill="white"/>
    <path d="M18.5 11.2C18.5 10.1 17.5 9.4 16 9.4C14.4 9.4 13.3 10.2 13.2 11.5H15.1C15.2 11 15.6 10.8 16 10.8C16.5 10.8 16.8 11 16.8 11.3C16.8 11.7 16.5 11.8 15.6 12.2C14.3 12.7 13.2 13.3 13.2 14.8C13.2 16.3 14.5 17.2 16.1 17.2C17.4 17.2 18.3 16.6 18.7 15.8V17H20.4V11.2H18.5ZM16.3 15.8C15.6 15.8 15.1 15.4 15.1 14.8C15.1 14.1 15.6 13.8 16.4 13.4C17.2 13.1 17.7 12.8 18.5 12.5V14.2C18.2 15.2 17.3 15.8 16.3 15.8Z" fill="white"/>
  </svg>`,
  postgresql: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#336791"/>
    <path d="M12 4.5C9 4.5 7 6.5 7 9.5C7 11.3 8 12.8 9.4 13.7C9.2 14.5 8.7 15.5 7.8 16.3C8.8 16.3 10 15.8 10.8 14.9C11.2 15 11.6 15.1 12 15.1C15 15.1 17 12.8 17 9.8C17 6.5 14.8 4.5 12 4.5ZM11 8.5C11.6 8.5 12 8.9 12 9.5C12 10.1 11.6 10.5 11 10.5C10.4 10.5 10 10.1 10 9.5C10 8.9 10.4 8.5 11 8.5Z" fill="white"/>
  </svg>`,
  mongodb: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C11.5 2 11.2 2.3 11 2.8C9.5 6.5 6 10.7 6 14.2C6 18.2 8.7 21.5 11.6 22H12.4C15.3 21.5 18 18.2 18 14.2C18 10.7 14.5 6.5 13 2.8C12.8 2.3 12.5 2 12 2ZM11.4 12.3V4.8C11.6 5.3 11.8 5.8 12.1 6.3C13.3 9 15.5 12.3 16 15C15.8 17.5 14.1 19.8 12 20.3V12.3H11.4Z" fill="#47A248"/>
  </svg>`,
  rxjs: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#B7178C"/>
    <path d="M7 6.5H12C14.5 6.5 16.5 8 16.5 10C16.5 11.4 15.5 12.5 14.1 13L17 18.5H14.5L12 13.5H9.5V18.5H7V6.5ZM9.5 11.2H12C13.2 11.2 14 10.7 14 10C14 9.3 13.2 8.8 12 8.8H9.5V11.2Z" fill="white"/>
  </svg>`,
  express: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#111111"/>
    <text x="12" y="16" fill="white" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="bold" font-size="9" text-anchor="middle">ex</text>
  </svg>`,
  mssql: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#CC292B"/>
    <path d="M7 9C7 7.5 9.2 6.5 12 6.5C14.8 6.5 17 7.5 17 9V15C17 16.5 14.8 17.5 12 17.5C9.2 17.5 7 16.5 7 15V9Z" fill="white" fill-opacity="0.2"/>
    <ellipse cx="12" cy="9" rx="5" ry="2" fill="white"/>
    <path d="M7 12C7 13.1 9.2 14 12 14C14.8 14 17 13.1 17 12" stroke="white" stroke-width="1.5"/>
    <path d="M7 15C7 16.1 9.2 17 12 17C14.8 17 17 16.1 17 15" stroke="white" stroke-width="1.5"/>
  </svg>`,
  mysql: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#00758F"/>
    <path d="M12 6C8 6 6 8.5 6 11C6 13.5 7.5 15.5 10 16.5L10 18H14V16.5C16.5 15.5 18 13.5 18 11C18 8.5 16 6 12 6Z" fill="#F29111"/>
    <circle cx="10" cy="10" r="1.5" fill="white"/>
    <circle cx="14" cy="10" r="1.5" fill="white"/>
  </svg>`,
  material: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#3F51B5"/>
    <path d="M12 4L4 8.5V15.5L12 20L20 15.5V8.5L12 4Z" fill="white" fill-opacity="0.3"/>
    <path d="M12 7L6 10.5V13.5L12 17L18 13.5V10.5L12 7Z" fill="white"/>
  </svg>`,
  bootstrap: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#7952B3"/>
    <path d="M8 6H13C15 6 16.5 7.2 16.5 9C16.5 10.2 15.7 11.2 14.5 11.6C16 12 17 13.1 17 14.6C17 16.5 15.4 18 13.2 18H8V6ZM10.5 8.2V10.8H12.8C13.8 10.8 14.4 10.2 14.4 9.5C14.4 8.8 13.8 8.2 12.8 8.2H10.5ZM10.5 13.2V15.8H13.2C14.3 15.8 14.9 15.2 14.9 14.5C14.9 13.8 14.3 13.2 13.2 13.2H10.5Z" fill="white"/>
  </svg>`,
  git: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#F05032"/>
    <path d="M12 4.5L19.5 12L12 19.5L4.5 12L12 4.5Z" fill="white" fill-opacity="0.2"/>
    <circle cx="10" cy="10" r="1.8" fill="white"/>
    <circle cx="14" cy="14" r="1.8" fill="white"/>
    <line x1="10" y1="10" x2="14" y2="14" stroke="white" stroke-width="1.8"/>
  </svg>`,
  postman: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
    <circle cx="12" cy="10" r="3.5" fill="white"/>
    <path d="M7 17C7 14.5 9.2 13 12 13C14.8 13 17 14.5 17 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`
};

for (const [name, svg] of Object.entries(icons)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), svg.trim());
}

console.log('Successfully generated icons:', Object.keys(icons).join(', '));
