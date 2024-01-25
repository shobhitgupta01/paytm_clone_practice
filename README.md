## Paytm cline app

This project contains a simple paytm clone with transfer feature.


## How to run the Backend
1. Install the node dependencies
```
    cd backend
    npm install
```
2. Create a .env file in the backend folder with the mongo path as follows:
```
	MONGO_URL=<your_mongo_url>
```
3. Run the index.js in the backend folder (I used nodemon)
```
	npx nodemon index.js
```
OR
```
	node index.js
```
4. Test it using the postman collection provided under **backend/postman_collection**