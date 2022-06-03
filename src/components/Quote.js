import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [randomQuote, setRandomQuote] = useState('null');
  useEffect(() => {
    fetch('https://geek-quote-api.herokuapp.com/v1/quote')
      .then((response) => response.json())
      .then((data) => setRandomQuote(data));
  }, []);

  return (
    <div>
      <p
        data-testid="quote"
        style={{
          textAlign: 'center',
          fontSize: '20px',
          color: '#00ff15',
          background: 'black',
          padding: '20px',
        }}
      >
        {randomQuote.quote}
      </p>
      <p
        style={{
          color: 'grey',
          textAlign: 'center',
          fontSize: '20px',
        }}
      >
        {randomQuote.author}
      </p>
    </div>
  );
}
