# group5
# Link - http://198.16.175.249:3000


### Website Purpose
Our application is an online classified ad posting service, similar to Kijiji and Craigslist. Users can create accounts and be contacted either by the onsite comment section for each ad listing or by e-mail and phone, provided by the user.
### Website Flow Overview
##### Index 
Each page contains the navigation bar. This navigation bar allows users to search for both items and users. Once a user is signed in to an account they will also see the options to create a listing, go to their profile, and logout. If the user is an admin they will also see the option to go to the admin dashboard.
On the home page a non-user has the option to log in or signup. If they are already signed in they will be welcomed. Users will also see recent listings posted to the site.
##### Search
From any page, the user can search for other users by keywords and listings by full-text descriptions (matches multiple indexes). A results sorted by relevancy score will appear, and the number of results is modularized by pagination. The user can choose to sort user search results by username and relevancy, and listing search results by date, relevancy, and price. Sorts can be done in ascending or descending order. When a user clicks on one of the results they will be brought to either the listing page or user profile they clicked on. 
##### User Profiles
User profiles display all of the information for a single user, including their username, profile picture, e-mail, phone number (if they provided one), short profile message, and the date the user joined the site. If the user is looking at their own profile they will see a button that when clicked will allow them to edit their profile information, and if the user is an admin they will see a similar button on every profile. Below the users information is a list of the ad listings they have on the site, which link to the actual listing pages.
##### Ad Listings
Listing pages display a picture of the item being sold as well as a title, description, and price. The listing also contact information about the user selling the item. Users will have the ability to comment on a listing to ask questions and negotiate prices with the seller.
##### Admin Dashboard
The admin dashboard is accessed via the navigation bar by admins. In the dashboard admins can see some basic information about the database, including number of users and listings.  An admin can also delete the database purging it of all non-admin users and listings. An admin also has the option to inject raw json into the database for users.

### Not Implemented
We did not implement the ability to have users block other users or create tickets to report users and listings. We were able to allow users to comment, but were not able to have other users reply to a specific comment.

### Additional Features
We implemented a commenting function on user profiles as well as the most recent listings on the homepage. 
