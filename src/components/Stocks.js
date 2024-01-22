import React from 'react';
import YouTube from 'react-youtube';

const Stocks = () => {
  
  const videoId = 'lo6I1zDehTQ';

  return (
    <div>
      <h1>Stocks</h1>
      <p>Welcome to the Stocks page. live graph about the market.</p>

      
      <YouTube videoId={videoId} />
    </div>
  );
};

export default Stocks;