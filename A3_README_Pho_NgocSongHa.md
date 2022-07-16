## README author
* [Ngoc Song Ha Pho](songhapho@dal.ca) - *(Developer)*
# Feature developed
I was responsible for the search and filters feature, which would allow users to search for specific products and filter those that meet their specific requirements (e.g., price, rating, brand, etc.) The idea was to develop the frontend with React JS, the backend with NodeJS and Express, and data stored on MongoDB. The backend would retrieve data from MongoDB and pass into the frontend to be displayed (more details about the feature flow can be found in my A2 submission). In that way, the search bar would take in the user's query and pass it to the backend, where it would be used to find product names that contain the phrase. The filters are expected to work in a similar manner but for different fields (brand, rating, price).

Current issue: The API endpoints work properly; however, I could not extract the search query from the URL to retrieve products of which names match the query. 

Below is a list of the files I have written and contributed to in this project.
# Files authored
## Frontend
* Home.js
* Search.js
* Listing.js
* nav.js
## Backend
* productModel.js
* productRoute.js
* server.js
## Edited
* App.css
* App.js

# References
## Images
1. Chocolate image is used from the following web link: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chocolate_%28blue_background%29.jpg/666px-Chocolate_%28blue_background%29.jpg?20180505175225
Author: nagualdesign. Retrieved June 6, 2022, from Wikipedia Commons: https://commons.wikimedia.org/wiki/File:Chocolate_%28blue_background%29.jpg

## Online tutorials
1. Tutorial Funda (Apr 9, 2021). How to Increment and Decrement Number Using React Hooks. Tutorial Funda. Accessed June 16, 2022, from: https://www.tutorialfunda.com/reactjs/increment-decrement-number-using-react-hooks-counter/
- I used this tutorial to create the quantity selection in the product listing (Listing.js). I modified the code to better fit the project and created a class in CSS to manage both buttons and the value field.
2. Marina Kim (Oct 25, 2020). Pass data between React UI and MongoDB Atlas | MERN Tutorial. YouTube. Accessed July 14, 2022, from: https://www.youtube.com/watch?v=nUbNn0voiBI&t=1382s
- I had some issues connecting the frontend and backend used this tutorial to learn how to connect the backend (created with NodeJS to retrieve data from MongoDB) with the React frontend to display such data. I modified the code to match my database configuration and needs to search/filter data. 
3. Shalitha Suranga (Dec 20, 2021). Create collapsible React components with react-collapsed. LogRocket. Accessed July 14, 2022, from: https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/
- I used this tutorial to create the expandable and collapsible sections for the search filters (Search.js). I modified the code to match the styles and behaviours established in Assignment 1, as well as fixed the auto-resizing issue (i.e., header size is auto-resized when the content is revealed. They should both have the same width now.)