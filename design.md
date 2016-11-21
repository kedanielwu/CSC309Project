#CSC309 Project

##High Level Structure

- Client to Server to Database
- 1 user module (auth, signup, management)
- 1 listing module (modify, sorting, updating)
- 1 search module
- 1 message module (email as well?)

##Objects

- user
	- ID
	- Name
	- Email/Phone #
	- Password
	- Picture
	- Profile description
	- Listing history (to server)
	- Report history
	- Type (admin or regular user)
- listing
	- User object reference (the seller)
	- ID
	- Title
	- Picture
	- Listing description
	- Comments
	- Status (open/pending/closed)
- ticket(low priority)
	- ID
	- 2 user IDs or a listing ID
	- Description

##Abstract API

1. user module
	1. GET /user?id=id 
		- return user object
	2. POST /user?id=id 
		- create new user with this id, other info will be packed as json object, redirect on success and error message on failure
	3. PUT /user?id=id&
		- modify the user object and update database 
	4. Authorization
	5. Third party login
2. listing module
	1. GET /listing?id=id
	2. POST /listing?id=id
	3. PUT /listing?id=id&
3. search module
	1. GET /listing?id=id
	2. GET /user?id=id
4. message module
