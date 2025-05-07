import React, { useState } from "react";
import axios from "axios";

// Utility function for making POST requests
const makePostRequest = async (apiMethod, url, data, setResponse) => {
  try {
    const res = await apiMethod(url, data);
    setResponse(res.data || res); // Axios returns `res.data`, fetch returns `res`
    console.log("Post created:", res.data || res);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "Default Title", // Default value for title
    body: "Default Body",   // Default value for body
    userId: "1",            // Default value for userId
  });

  const [responseFetch, setResponseFetch] = useState(null);
  const [responseAxios, setResponseAxios] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission for Fetch API
  const handleSubmitFetch = async (e) => {
    e.preventDefault();
    await makePostRequest(
      async (url, data) =>
        fetch(url, {
          method: "POST",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify(data),
        }).then((res) => res.json()),
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: formData.title,
        body: formData.body,
        userId: parseInt(formData.userId, 10),
      },
      setResponseFetch
    );
  };

  // Handle form submission for Axios
  const handleSubmitAxios = async (e) => {
    e.preventDefault();
    await makePostRequest(
      axios.post,
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: formData.title,
        body: formData.body,
        userId: parseInt(formData.userId, 10),
      },
      setResponseAxios
    );
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Left Side: Fetch API */}
      <div style={{ flex: 1, marginRight: "10px", borderRight: "1px solid #ddd", paddingRight: "10px" }}>
        <h2>Create Post (Fetch API)</h2>
        <form onSubmit={handleSubmitFetch} style={{ maxWidth: "400px" }}>
          <InputField
            id="titleFetch"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <InputField
            id="bodyFetch"
            label="Body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <InputField
            id="userIdFetch"
            label="User ID"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
          <SubmitButton label="Create Post" color="blue" />
        </form>
        <ResponseDisplay response={responseFetch} method="Fetch" />
      </div>

      {/* Right Side: Axios */}
      <div style={{ flex: 1, marginLeft: "10px", paddingLeft: "10px" }}>
        <h2>Create Post (Axios)</h2>
        <form onSubmit={handleSubmitAxios} style={{ maxWidth: "400px" }}>
          <InputField
            id="titleAxios"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <InputField
            id="bodyAxios"
            label="Body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          <InputField
            id="userIdAxios"
            label="User ID"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
          <SubmitButton label="Create Post" color="green" />
        </form>
        <ResponseDisplay response={responseAxios} method="Axios" />
      </div>
    </div>
  );
};

// Reusable InputField Component
const InputField = ({ id, label, name, value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label htmlFor={id} style={{ display: "block", marginBottom: "5px" }}>
      {label}:
    </label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={{ width: "100%", padding: "8px" }}
      required
    />
  </div>
);

// Reusable SubmitButton Component
const SubmitButton = ({ label, color }) => (
  <button
    type="submit"
    style={{
      padding: "10px 20px",
      background: color,
      color: "white",
      border: "none",
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);

// Reusable ResponseDisplay Component
const ResponseDisplay = ({ response, method }) =>
  response && (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
      <h3>Post Created Successfully ({method}):</h3>
      <p>
        <strong>ID:</strong> {response.id}
      </p>
      <p>
        <strong>Title:</strong> {response.title}
      </p>
      <p>
        <strong>Body:</strong> {response.body}
      </p>
      <p>
        <strong>User ID:</strong> {response.userId}
      </p>
    </div>
  );

export default CreatePost;