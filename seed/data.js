import db from '../db/connection.js'
import Item from '../models/item.js'

const insertData = async () => {
  //reset db
  await db.dropDatabase();

  const items =
    [
      {
        "name": "Ice Cream",
        "imgURL": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": "5",
        "quantity": "10",
        "category": "freezer"
      },
      {
        "name": "Pancakes",
        "imgURL": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": "11",
        "quantity": "3",
        "category": "dry storage"
      },
      {
        "name": "Eggs",
        "imgURL": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "price": "20",
        "quantity": "53",
        "category": "refrigerator"
      },
    ]

  await Item.insertMany(items)
  console.log("Created items!")

  //close teh db connection when done
  db.close();
}

insertData();