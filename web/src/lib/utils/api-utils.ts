export const pythonApiUrl = import.meta.env.DEV
  ? // Fetch from localhost in development
    'http://127.0.0.1:8000/api/'
  : // Fetch from deployed API in production
    'https://fantasy-dashboard-api.vercel.app/api/';
