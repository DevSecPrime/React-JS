import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function App() {
  const [images, setImages] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstImage, setFirstImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const updatedImages = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setImages(updatedImages);
    setFirstImage(updatedImages[0]); // Update firstImage state with the first uploaded image
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Images:', images);
  };

  return (
    <div className="App">
      <h1>Image Upload App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Uploaded Images:</h4>
          <ul>
            {images.map((file, index) => (
              <li key={index}>
                <img src={file.preview} alt={`Image ${index}`} style={{ width: '100px' }} />
              </li>
            ))}
          </ul>
        </aside>
        {firstImage && (
          <aside>
            <h4>First Image:</h4>
            <img src={firstImage.preview} alt="First Uploaded" style={{ width: '100px' }} />
          </aside>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
