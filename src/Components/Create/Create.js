import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import {firestore, storage} from "../../Firebase/config"
import { FirebaseContext } from '../../store/Context';




const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { auth } = useContext(FirebaseContext)

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !price || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }

    setIsUploading(true);

    try {
     
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      setImageURL(url);

     let product=   await  addDoc(collection(firestore, "products"), {
        name,
        category,
        price,
        imageURL: url,
        createdAt: new Date(),
      });

      console.log(product);
      

      alert("Post created successfully!");
    } catch (error) {
      console.error("Error uploading image or saving data:", error.message);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="image">Upload Image</label>
          <br />
          <input type="file" id="image" onChange={handleImageChange} />
          <br />
          <button type="submit" className="uploadBtn" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Upload and Submit"}
          </button>
        </form>
        {imageURL && (
          <div>
            <p>Uploaded Image:</p>
            <img src={imageURL} alt="Uploaded Post" width="200px" height="200px" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Create;