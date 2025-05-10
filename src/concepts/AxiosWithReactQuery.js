import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Function to fetch data from the API
const fetchData = async () => {
  const { data } = await axios.get(apiUrl);
  return data;
};

const AxiosWithReactQuery = () => {
  // Updated useQuery to use the object-based syntax
  const { data, isLoading, error } = useQuery({
    queryKey: ['data'], // Unique key for the query
    queryFn: fetchData, // Function to fetch data
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', maxWidth: '400px' }}>
      <h3>Todo Details</h3>
      <p><strong>User ID:</strong> {data.userId}</p>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default AxiosWithReactQuery;