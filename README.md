# group5
# Link - http://198.16.175.249:3000


## Instructions
### Website Purpose
Our application is an online classified ad posting service, similar to Kijiji and Craigslist. Users can create accounts and be contacted either by the onsite comment section for each ad listing or by e-mail and phone.
### Website Flow Overview
##### Index 
Each page contains the navigation bar. This navigation bar allows users to search for both items and users. Once a user is signed in to an account they will also see the options to create a listing, go to their profile and logout. If the user is an admin they will also see the option to go to the admin dashboard.
On the home page a user has the option to log in or signup. If they are already signed in they will be welcomed. Users will also see resent listings posted to the site.
##### Search
When a user searches for either a user or an ad listing they will be brought to a results page where they can choose how they want to order the results. When a user clicks on one of the results they will be brought to either the listing page or user profile they clicked on.
##### User Profiles
User profiles display all of the information for a single user, including their username, profile picture, e-mail, phone number (if they provided one), short profile message, and the date the user joined the site. If the user is looking at their own profile they will see a button that when clicked will allow them to edit they profile information, and if they user is an admin they will see a similar button on every profile. Below the users information is a list of the ad listings they have on the site, which link to the actual listing pages.
##### Ad Listings
Listing pages display a picture of the item being sold as well as a title, description, and price. The listing also shows some information about the user selling the item. Users will have the ability to comment on a listing to ask questions and negotiate prices with the lister.
##### Admin Dashboard
The admin dashboard is accessed via the navigation bar by admins. In the dashboard admins can see some basic information about the database, including number of users and listings.  An admin can also delete the database purging it of all non-admin users and listings. An admin also has the option to inject raw json into the database for users.

### Not Implemented
We did not implement the ability to have users block other users or create tickets to report users and listings.

### Database

If not installed, you will first need to install MongoDB Community edition.  Download information and instructions are [here](https://docs.mongodb.com/manual/installation/?jmp=footer).

Create a directory to store the database in.

```
mkdir database
```

Run an instance of the database server.

```
mongod --dbpath=$PWD/database
```

### Seed the database

The next step is to populate the database with data.  We will [import the JSON file](https://www.zaiste.net/2012/08/importing_json_into_mongodb/) into the database.

```
mongoimport --db <db_name> --collection <schema_name> --type json --file <json_file> --jsonArray
```

For our sake, you will import the `user` and `listing` schemas.

### Run the server

```node server.js```
