export const addProduct = async (product)=>{
     const res = await fetch("http://localhost:5000/product", {
        method: "PUT",
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('OldRuby-Token')}`,
        },
        body: JSON.stringify(product),
      })
      const data = await res.json()
      return data;
}