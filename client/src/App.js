import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    axios.get('/api/languages')
      .then(({ data }) => setLanguages(data))

  }, []);

  return (
    <div>
      <h1>Languages:</h1>
      <ul>
        {
          languages.map(lang =>
            <li key={lang._id}>{lang.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
