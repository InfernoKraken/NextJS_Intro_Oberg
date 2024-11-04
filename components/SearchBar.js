import React, { useState, useEffect } from "react";

export default function SearchBar() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    //Fetch from API:
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("There was a problem fetching API data: ", error));
    }, []);

    //Update the filtered products in the event of a search term change:
    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.title.toUpperCase().includes(searchTerm.toUpperCase())
            )
        );
    }, [searchTerm, products]);
    return (
        <div>
            <input
                type="text"
                placeholder="Search For Products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    padding: "10px",
                    width: "100%",
                    maxWidth: "400px",
                    marginBottom: "20px",
                    fontSize: "15px"
                }}
            />
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}> Image </th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Title</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                />
                            </td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.title}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>${product.price}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
