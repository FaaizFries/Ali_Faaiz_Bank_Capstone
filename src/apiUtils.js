function createApiUrl(endpoint) {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4040/api';
    return `${apiUrl}${endpoint}`;
  }
  
  export { createApiUrl };
  