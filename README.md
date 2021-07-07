## kitchintory

## Project Description

Kitchintory is an application for restaurant management. It's a tool to keep track of what's in stock and what is needed so that you minimize waste and maximize profits.

## Development

- Fork and Clone.
- "npm install" to install back-end packages
- cd into client
- "npm install" to install front-end packages
- To run on local host:
- cd kitchintory > npm run dev
- Open new tab
- cd client > npm start

## Wireframes

![](https://res.cloudinary.com/willnolin/image/upload/v1625667447/NAV_u9zfsl.png)
![](https://res.cloudinary.com/willnolin/image/upload/v1625667424/Add_item_ksyz6o.png | width:200)
![](https://res.cloudinary.com/willnolin/image/upload/v1625667329/items_khngll.png | width:200)
[Wireframes](https://www.figma.com/file/R5kAmuUW4CBAAPc2hMXrzt/Inventory?node-id=0%3A1&frame-preset-name=Desktop)

## Component Hierarchy

![](https://res.cloudinary.com/willnolin/image/upload/v1625667691/Components_casnhj.png | width=200)
[Component Hierarchy](https://whimsical.com/p3-kitchntory-VXuCpdbZA9bXaRWaTE2ubN)

## Schema

```
const Item = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    category: {
      type: String,
      enum: ['freezer', 'refrigerator', 'dry-storage'],
      required: true
    },
    shelfLife: {
      type: Number
    }
  },
  { timestamps: true }
);
Item.virtual('expiration').get(function () {
  const date = new Date().getTime()
  return(Math.floor((date - this.createdAt.getTime())/(1000*60*60*24)))
})
```

### MVP/PostMVP

#### MVP

- Full CRUD both for front and back end.
- Search bar functioning on all possible pages.
- Functioning user authentication in the back and front end.

#### PostMVP

- Background images on add and edit page updating with whatever image the user inputs.
- Utilizing pseudo classes and elements with CSS.
- When clicking any of the three logos on the home page, you will be redirected to the proper location.
- Adding best by dates to items.
- 'Almost out of' list on the items page, listing every item the has a quantity of a certain number or lower.

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| June 25-27 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| June 28    | Project Approval                                   | Incomplete |
| June 29    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| June 30    | Pseudocode / back end code.                        | Incomplete |
| July 1     | Initial Clickable Model                            | Incomplete |
| July 2     | MVP                                                | Incomplete |
| July 3-5   | PMVP                                               | Incomplete |
| July 6     | PMVP                                               | Incomplete |
| July 7     | Presentations                                      | Incomplete |

## Timeframes

| Component                                                       | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Figma(Home)                                                     |    H     |       2        |       2       |      2      |
| Figma(Items)                                                    |    H     |       2        |       2       |      2      |
| Figma(Detail)                                                   |    H     |       2        |       2       |      2      |
| Figma(Add Item)                                                 |    H     |       2        |       2       |      2      |
| Figma(Edit Item)                                                |    H     |       2        |       1       |      1      |
| Figma(Sign In)                                                  |    H     |       1        |       1       |      1      |
| Figma(Sign Up)                                                  |    H     |       1        |       1       |      1      |
| Flow-Chart                                                      |    H     |       1        |       1       |      1      |
| Git-Hub Repo Set Up                                             |    H     |       .5       |      .5       |     .5      |
| Team Expectations                                               |    H     |       .5       |      .5       |     .5      |
| B.E. Create Folders And Files                                   |    H     |       .5       |               |             |
| B.E. Create Data base / Schema                                  |    H     |       .5       |               |             |
| B.E. Connect To MongoDB                                         |    H     |       .5       |               |             |
| B.E. Set Up Routes                                              |    H     |       .5       |               |             |
| B.E. Connect To Heroku                                          |    H     |       .5       |               |             |
| B.E. User Schema                                                |    H     |       .5       |               |             |
| B.E. User Auth                                                  |    H     |       3        |               |             |
| F.E. Create Folders And Files                                   |    H     |       .5       |               |             |
| F.E. Create-React-App                                           |    H     |       .5       |               |             |
| F.E. Api Calls / Testing                                        |    H     |       1        |               |             |
| F.E. Display Data On Items Screen                               |    H     |       2        |               |             |
| F.E. Display Data On Item Detail                                |    H     |       2        |               |             |
| F.E. Clickable Model                                            |    H     |       2        |               |             |
| F.E. Create Forms For User Authentication (sign in and up page) |    H     |       3        |               |             |
| F.E. Testing User Auth                                          |    H     |       2        |               |             |
| CSS For Home Screen                                             |    H     |       3        |               |             |
| CSS For Items Screen                                            |    H     |       3        |               |             |
| CSS For Item Detail Screen                                      |    H     |       3        |               |             |
| CSS For Edit Item Screen                                        |    H     |       3        |               |             |
| CSS For Add Item Screen                                         |    H     |       3        |               |             |
| CSS For Sign In / Sign Up Screen                                |    H     |       3        |               |             |
| PMVP                                                            |    H     |       4        |               |             |
| Total                                                           |    H     |       55       |      13       |             |

## SWOT Analysis

### Strengths: Communication, Likeable, CSS and Front-End Knowledge.

### Weaknesses: User Auth.

### Opportunities: Get better at group dinamics and understanding of Git in a team environment. Learning more on authentication.

### Threats: Merge conflicts, possible errors with npm i.
