import React, { useState } from 'react';

const OrderPage = () => {
    // Define state for form fields
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [product, setProduct] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Construct the form data into an object
        const formData = {
          name,
          address,
          product,
        };
      
        // Send the form data to our API route
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (response.ok) {
          // Handle success - maybe clear the form or display a success message
          console.log('Order submitted successfully!');
        } else {
          // Handle error
          console.error('Failed to submit order.');
        }
      };
      
  
    return (
      <div className="max-w-xl mx-auto my-10 p-5">
        <h1 className="text-2xl font-bold mb-5">주문서</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">이름</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">주소</label>
            <input type="email" id="email" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="product" className="block mb-2 text-sm font-medium">상품 선택</label>
            <select id="product" value={product} onChange={(e) => setProduct(e.target.value)} className="border p-2 w-full" required>
              <option value="">Select a product</option>
              <option value="Product 1">Product</option>
              // Add more products as needed
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            주문 신청
          </button>
        </form>
      </div>
    );
  };
  
  export default OrderPage;
  