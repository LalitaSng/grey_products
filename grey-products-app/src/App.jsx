import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const updateProduct = (product) => {
    if (product.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Header
        search={search}
        setSearch={setSearch}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ProductForm
        onSave={updateProduct}
        product={editingProduct}
        cancel={() => setEditingProduct(null)}
      />

      <ProductList
        products={filteredProducts}
        viewMode={viewMode}
        onEdit={(p) => setEditingProduct(p)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
