import dotenv from 'dotenv';
dotenv.config();

const cleanUrl = (url?: string, fallback = '') => {
  if (!url) return fallback;
  return url.trim().replace(/[\r\n\s]+/g, '').replace(/\/+$/, '');
};

export const ENV = {
  APP_NAME: process.env.APP_NAME || 'Portfolio API',
  PORT: parseInt(process.env.PORT || '7000', 10),
  NODE_ENV: (process.env.NODE_ENV || 'development').trim(),
  JWT_SECRET: (process.env.JWT_SECRET || 'fallback_secret_change_me').trim(),
  FRONTEND_URL: cleanUrl(process.env.FRONTEND_URL, 'http://localhost:3000'),
  BACKEND_URL: cleanUrl(process.env.BACKEND_URL, 'http://localhost:8000'),
  DATABASE_URL: process.env.DATABASE_URL?.trim(),
  CSRF_SECRET: process.env.CSRF_SECRET?.trim(),
};

