# TRANSLOCATE

A carpooling app where users can connect to share rides with each other. 
Users can post rides and share the cost of travelling. 

[![Screenshot-2022-10-19-at-22-28-10.jpg](https://i.postimg.cc/L4PYMW8G/Screenshot-2022-10-19-at-22-28-10.jpg)](https://postimg.cc/MXWK7dRY)

[![Screenshot-2022-10-19-at-22-24-44.jpg](https://i.postimg.cc/Gp9nnZdD/Screenshot-2022-10-19-at-22-24-44.jpg)](https://postimg.cc/SX0vW1XQ)


**Link to project:** https://translocate.cyclic.app/

## Technologies used for the project

Node.js || Express || EJS || MongoDB || Mongoose 

## Optimizations

If I had more time I would look into adding Socket.IO or WebSocket so that users could chat to eachother in realtime. I would also have liked to add mpa functionality so it would be possible to share your location with other users. 

## Lessons Learned:

This was one of the first times working with the MVC pattern to structure the various sections. I also gained experience working with modules in express to keep things nice and tidy. Mongoose made it easier to validate documents going into the app database which was another layer ontop of Mongo.  

# Make it your own 

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
