import React, { useEffect, useState } from 'react'

const ProductList = ({category} : { category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect( () => {
    console.log('Fetching products in ', category);
    setProducts([ 'Clothing', 'Household'])
  }, [category]);
  //adding category array as dependecy tells react to render 
  //the component when there is a change in category array

  return (
    <div>ProductList</div>
  )
}

export default ProductList