import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProducts = () => {
     const {user} = useContext(AuthContext)
     const [products, setProducts] = useState(null);
     useEffect(()=>{
          fetch(`http://localhost:5000/products?email=${user?.email}`)
          .then(res => res.json())
          .then(data => {
               setProducts(data)
          })
     },[user])
     console.log(products);
     
     return (
          <div>
               <h1 className="text-3xl font-semibold my-4 mx-5">My products</h1>
          </div>
     );
};

export default MyProducts;