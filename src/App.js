import React, { useState } from 'react';
import './App.css';

function App() {
  const [samlResponse, setSamlResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSamlTrace = async () => {
    setIsLoading(true);
    setError('');

    // Example URL, replace with your actual SAML response endpoint
    const url = 'https://example.com/saml/response';

    try {
      // This is a placeholder; in a real app, you'd make a request to a server that returns a SAML response.
      const response = await fetch(url);
      const data = await response.text(); // Assuming the SAML response is returned as text/XML.

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setSamlResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <p>Loading SAML trace...</p>
        ) : (
          <>
            <button onClick={fetchSamlTrace}>Fetch SAML Trace</button>
            {error && <p>Error: {error}</p>}
            {samlResponse && (
              <textarea readOnly value={samlResponse} rows={10} cols={50} />
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
