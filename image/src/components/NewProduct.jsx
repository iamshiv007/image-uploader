import React, { useState } from "react";
import ProfileIcon from "../assets/images/ProfileIcon.svg";
import "./NewStudent.css";
import axios from "axios";

const NewProduct = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({images:[]});

  const selectImage = (e) => {
    setFormData({
      ...formData,
      images: [...formData.images, e.target.files[0]],
    });

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setImages([...images, base64String]);
    };

    reader.readAsDataURL(file);
  };

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData0 = new FormData();

    formData0.append("name", formData.name);
    formData0.append("price", formData.price);
    formData.images.forEach((image) => {
      formData0.append("images", image);
    })

    axios
      .post("http://localhost:12000/api/product/new", formData0)
      .then((product) => console.log(product))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <form
        onSubmit={submitForm}
        encType="multipart/form-data"
        className="p-4 w-50 m-auto"
      >
        <h2>New Product</h2>
        <label>Name</label>
        <input
          onChange={collectData}
          name="name"
          className="form-control mb-2"
          type="text"
          placeholder="Name"
        />
        <label>Price</label>
        <input
          onChange={collectData}
          name="price"
          className="form-control mb-2"
          type="text"
          placeholder="Price"
        />
        <label style={{ display: "block" }} htmlFor="">
          Avatar
        </label>
        <input
          accept=".png, .jpg, .jpeg"
          name="images"
          onChange={selectImage}
          id="images"
          className="form-control mb-2"
          type="file"
          placeholder="Images"
        />
        <label className="mb-4" htmlFor="avatar">
          {images.map((image, key) => (
            <img className="product" key={key} htmlFor="images" src={image} alt="" />
          ))}
        </label>
        <button
          type="submit"
          style={{ display: "block" }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
