// eslint-disable-next-line no-unused-vars
import React from "react";
import "./NewProduct.css";
import { Publish } from "@mui/icons-material";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProduct-title">Add Product</h1>
      <form action="" className="newProduct-form">
        <div className="newProduct-item">
          <label>Product Name</label>
          <input type="text" placeholder="kingragnor" />
        </div>

        <div className="newProduct-item">
          <label>Company Email</label>
          <input type="email" placeholder="ragnor@vikings.com" />
        </div>

        <div className="newProduct-item">
          <label>Contact Number</label>
          <input type="text" placeholder="xxx-xxx-xxxx" />
        </div>

        <div className="newProduct-item">
          <label>Contact Person</label>
          <input type="text" placeholder="Rishi" />
        </div>

        
      </form>
      <div className="newproductUpdate-buttons">
        <label htmlFor="file" className="newproductUpdate-imgFile">
          <Publish className="newproductupdate-imgUploader" />
          <a>Add new image</a>
          <input type="file" id="file" style={{ display: "none" }} />
        </label>
      </div>
      <button className="newProduct-create">Add</button>
    </div>
  );
}
