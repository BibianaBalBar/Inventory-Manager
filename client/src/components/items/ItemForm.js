import React, {useState} from 'react'

const ItemForm = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    code: '',
    quantity: 0,
    type: 'own'
  });

  const { name, description, code, quantity, type } = item;

  const onChange = (e) => setItem({...item, [e.target.name]: e.target.value});
  
  return (
    <form>
      <h2 className="text-primary">Add Product</h2>
      <input 
        type="text" 
        placeholder="Name" 
        name="name"
        value={name} 
        onChange={onChange}
      />
      <textarea
        placeholder="Description" 
        name="description"
        value={description} 
        onChange={onChange}
        rows={5}
        cols={3}
      />
      <input 
        type="text" 
        placeholder="Code" 
        name="code"
        value={code} 
        onChange={onChange}
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        name="quantity"
        value={quantity} 
        onChange={onChange}
      />
      <h5>Product Type:</h5>
      <input 
        type="radio"
        name="type"
        value="own"
        checked={type === 'own'}
      /> Own{` `}
      <input 
        type="radio"
        name="type"
        value="third party"
        checked={type === 'third party'}
      /> Third Party
      <div>
        <input type="submit" value="Add Product" className="btn btn-primary btn-block"/>
      </div>
    </form>
  )
};

export default ItemForm;
