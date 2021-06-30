import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { createItem } from '../../services/items'
import { Redirect } from 'react-router-dom'
import './ItemCreate.css'

export default function ItemCreate(props) {
  // const { user } = props
  const [item, setItem] = useState({
    name: '',
    quantity: '',
    price: '',
    category: '',
    imgURL: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createItem(item)
    setCreated({ created })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem({
      ...item,
      [name]: value
    })
  }

  if (isCreated) {
    return <Redirect to={`/items`} />
  }

  return (
    <Layout user={props.user} items={props.items} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
      setSearchResult={props.setSearchResult} setSearchInput={props.setSearchInput}
    >
      <div className='create-item-master'>
        <div className='create-item-image'>
          <img src='https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg' />
        </div>
        <div className='create-item-parent'>
          <div className='add-item-title'>
            <h3>Add Item</h3>
          </div>
          <hr className='add-item-line' />
          <form className='create-item-form' onSubmit={handleSubmit}>
            <div className='create-item-titles' id='create-name'>
              <h5>Name</h5>
              <input
                className='input-name create-input'
                value={item.name}
                name='name'
                onChange={handleChange}
              />
            </div>
            <div className='create-item-titles'>
              <h5>Quantity</h5>
              <input
                className='input-quantity create-input'
                value={item.quantity}
                name='quantity'
                onChange={handleChange}
              />
            </div>
            <div className='create-item-titles'>
              <h5>Price</h5>
              <input
                className='input-price create-input'
                value={item.price}
                name='price'
                onChange={handleChange}
              />
            </div>
            {/* //replace with select */}
            <div className='create-item-titles'>
              <h5>Category</h5>
              <select name="category" id="category" onChange={handleChange}>
                <option value="freezer">Freezer</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="dry storage">Dry Storage</option>
              </select>
              {/* <input
                className='input-category create-input'
                value={item.category}
                name='category'
                onChange={handleChange}
              /> */}
            </div>
            <div className='create-item-titles' id='create-imgURL'>
              <h5>Image URL</h5>
              <input
                className='input-imgURL create-input'
                value={item.imgURL}
                name='imgURL'
                onChange={handleChange}
              />
            </div>
            <hr className='create-form-line' />
            <button type='submit' className='create-submit-button'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
