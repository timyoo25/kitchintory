import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { createItem } from '../../services/items'
import { Redirect } from 'react-router-dom'
import './ItemCreate.css'

export default function ItemCreate(props) {
  const { user } = props
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
    <Layout user={user}>
      <div>
        <form className='create-item-form'onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={item.name}
            name='name'
            onChange={handleChange}
          />
          <input
            className='input-quantity'
            placeholder='Quantity'
            value={item.quantity}
            name='quantity'
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='Price'
            value={item.price}
            name='price'
            onChange={handleChange}
          />
          <input
            className='input-category'
            placeholder='Category'
            value={item.category}
            name='category'
            onChange={handleChange}
          />
          <input
            className='input-imgURL'
            placeholder='Image URL'
            value={item.imgURL}
            name='imgURL'
            onChange={handleChange}
          />
          <button type='submit' classname='create-submit-button'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}
