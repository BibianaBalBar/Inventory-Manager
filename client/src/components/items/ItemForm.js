import React, {useState, useContext, useEffect} from 'react';
import ItemContext from '../../context/item/itemContext';

const ItemForm = () => {
  const itemContext = useContext(ItemContext);

  const { addItem, updateItem, current, clearCurrent } = itemContext;

  useEffect(() => {
    if(current !== null) {
      setItem(current);
    } else {
      setItem({
        name: '',
        description: '',
        code: '',
        quantity: 0,
        type: 'own'
      });
    }
  }, [itemContext, current]);

  const [item, setItem] = useState({
    name: '',
    description: '',
    code: '',
    quantity: 0,
    type: 'own'
  });

  const { name, description, code, quantity, type } = item;

  const onChange = (e) => setItem({...item, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addItem(item);
    } else {
      updateItem(item);
    }       
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  }
  
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Update Product' : 'Add Product'}</h2>
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
      <label htmlFor="quantity">Quantity:</label>
      <input         
        type="number"           
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
        onChange={onChange}
      /> Own{` `}
      <input 
        type="radio"
        name="type"
        value="acquired"
        checked={type === 'acquired'}
        onChange={onChange}
      /> Acquired
      <div>
        <input 
          type="submit" 
          value={current ? 'Update' : 'Add'} 
          className="btn btn-primary btn-block"
        />
      </div>
      {current && <div>
        <button className="btn btn-dark btn-block" onClick={clearAll}>
          Clear
        </button>
      </div>}
    </form>
  )
};

export default ItemForm;
