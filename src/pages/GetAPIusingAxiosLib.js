import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MyComponentAxios() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl1 = 'https://jsonplaceholder.typicode.com/comments';
  const apiUrl2 = 'https://jsonplaceholder.typicode.com/todos/1';
  

  useEffect(() => {
    axios.get(apiUrl2)
           .then(response => {
                      setData(response.data);
                      setLoading(false);
                  })
                  .catch(error => {
                      setError(error);
                      setLoading(false);
                  });
  }, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
if (!data) return <p>No data to display.</p>;

return (
  <div>
      {/* Display your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);



}

export default MyComponentAxios;