import React, { useState, useEffect } from "react";

const ProductForm = ({ product, onSave, cancel }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const validate = () => {
    const errs = {};
  
    if (!form.name) errs.name = "Name is required";
  
    if (form.price === "" || form.price === null) {
      errs.price = "Price is required";
    } else if (Number(form.price) < 0) {
      errs.price = "Price cannot be negative";
    }
  
    if (!form.category) errs.category = "Category is required";
  
    if (form.stock !== "" && Number(form.stock) < 0) {
      errs.stock = "Stock cannot be negative";
    }
  
    return errs;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      onSave(form);
      setForm({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h3>{product ? "Edit Product" : "Add Product"}</h3>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        min="0"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      {errors.price && <span className="error">{errors.price}</span>}

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      {errors.category && <span className="error">{errors.category}</span>}

      <input
        type="number"
        placeholder="Stock"
        value={form.stock}
        min="0"
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />

      <textarea
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <div className="btn-group">
        <button type="submit">Save</button>
        {product && <button onClick={cancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default ProductForm;
