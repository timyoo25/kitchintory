import db from "../db/connection.js";
import Item from "../models/item.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  //reset db
  await db.dropDatabase();

  const user1 = new User({
    username: "willthethrill",
    password_digest: await bcrypt.hash("willauth", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "timtom",
    password_digest: await bcrypt.hash("timauth", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "tallyboy",
    password_digest: await bcrypt.hash("talonauth", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "gcharizard",
    password_digest: await bcrypt.hash("gildaauth", 11),
  });
  await user4.save();

  const items = [
    {
      name: "Ice Cream",
      imgURL:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "5",
      quantity: "10",
      category: "freezer",
    },
    {
      name: "Pancakes",
      imgURL:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "11",
      quantity: "3",
      category: "dry storage",
    },
    {
      name: "Eggs",
      imgURL:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "20",
      quantity: "53",
      category: "refrigerator",
    },
  ];

  await Item.insertMany(items);
  console.log("Created items!");

  //close teh db connection when done
  db.close();
};

insertData();
