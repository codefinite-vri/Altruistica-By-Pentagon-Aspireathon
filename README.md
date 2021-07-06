# Altruistica by Pentagon
“Giving is not just about making a donation, it is about making a difference” – Kathy Calvin

Covid-19 is spreading like a wildfire globally. The world is constantly being rebuilt over the ashes of the pandemic. As we walk on the path of shaping a better future for people, we need to gather resources, people and expertise to help communities and businesses recover.

Our panacea proposes you a well-functioning and efficient way to end the vicious cycle of sufferings! Altruistica, acts as an intermediate between the haves and have-nots ensuring that people get what they require. We wish to bring the world to a state of prosperity by uplifting humanity and eradicating sufferings. 

Having witnessed all the ravages that the global pandemic has brought to the mankind, we were inspired by the motive of creating an all-in-one platform to meet the needs of the people. With a simple UI and a Virtual Assistant, out platform aims at being accessible to all. While building the solution, we considered the following challenges with the existing system:
-	No common platform for crowdfunding, crowdsourcing, fundraising and individual support
-	Lack of trust due to non-transparency of platforms
-	Illiteracy of people causing lack of use by the needy
-	Helpless situation for both those who are suffering and those who want to relieve the suffrage
-	Lack of Motivation to help Humanity
-	Improper Verification Processes

As we know there persist economic inequalities across the globe wherein there are some with ample resources and on the other hand ones who cannot even make their both ends meet. Altruistica is the one-stop where not only beneficiaries will demand for what they need, but the donors will also let people know what they wish to donate. 

## So, what do we provide?
<ul>
<li>Covid-19 Support: A special section devoted for the Covid-19 related needs, resources and blogs to help people feel more empowered in this aspect.</li>
<li>Fundraising in all forms: Funds for social causes, medical needs, projects, ideas and everything that’s needed.</li>
<li>Crowdsourcing: Why donate only in cash, when you can donate in kind! As a donor, you can also register what goods you wish to donate, so that a done can connect with you through the platform.</li>
<li>Donor Match: Why donate the old way, when you can be unique. The Donor match helps you match with the donations that you might require, adding them to your view list and then connect accordingly.</li>
<li>Gamified crowdfunding with personalized dashboard: The gamified system serves as a constant source of motivation, ensuring that you come again to donate. The leaderboard keeps a track of the most Altruistic people ensuring that they are rewarded based on their achievements. The AL Coins gained based on donations can be further redeemed as vouchers or be used for another donation.</li>
<li>Ava- the Virtual Assistant: Introducing Ava, your support assistant to ensure that you have a more pleasant experience!</li>
</ul>
Let’s empower the world together, one step at a time.

## Project Inspiration
“Every revolution begins with a great initiative.”  

The 'compassion to serve humanity' is a reflection of benevolence while the capability to emerge from sufferings reflects hardihood and adaptability. Seeing the suffrages caused by the persisting situation of the pandemic strikes our conscience. In such challenging times, we can see people all around the world including some eminent personalities come up selflessly to offer help to mankind. Thus, benevolence has become 'a cure for the sufferings of thousands of people'. This thought motivated us to craft up innovative ideas to make the process of serving humanity as fluent as possible so that our motion to serve humanity can reach every nook and corner of the globe.

After thorough brainstorming and studying various use cases, we decided to create a platform that eases the raising of funds, making it more transparent and accessible, while motivating even more people to carry on this noble deed. We aim to connect donors and beneficiaries in a way that no one ever suffers due to the lack of any item. Our objective is to light a spark of generosity across the globe so that every individual supports each other with their compassion. We crafted this project with a zeal to revolutionize the world into such 'prosperous heaven'.

## How does the system work?
Altruistica is a one-stop platform for fundraising, crowdfunding, crowdsourcing and supporting individuals. An accessible platform, Altruistica ensures a safe and reliable system for donors and donees.

TO CREATE FUNDRAISERS:
1)	Sign Up and fill in your details.
2)	Create a fundraiser.
3)	Wait for fundraiser to be verified.
4)	Share your fundraiser with people.

TO REGISTER YOUR DONATION:
1)	If you have something to donate to people, add it to Altruistica’s Donor Page.
2)	Wait for donation to be verified.
3)	The donation will be visible on the platform and someone interested will match with you.

TO DONATE:
1)	Select a Fundraiser that you want to donate to.
2)	Sign Up
3)	Choose whether or not to be anonymous and complete Payment

## Project Trailer
You can view the project trailer <a href="https://drive.google.com/file/d/1Gy6IQiHtX2nzlCoekT2UY5Z9yAG2EnXm/view?usp=sharing">here</a>.


## Architecture

### Use-Case Diagram
![WhatsApp Image 2021-07-06 at 22 33 11 (1)](https://user-images.githubusercontent.com/37243156/124660584-06902b80-dec4-11eb-85b2-34b666155aa2.jpeg)

A user can be either unregistered or registered. While an unregistered user can only access the Virtual Assistant, SignUp, Leaderboard and Covid-19 Resources functionality, the registered user can access a lot more in addition to these. He can access his individual dashboard, create, update, delete fundraisers, donate to people, redeem AL coins and chat with donors. The administrator will be responsible for verification of fundraisers.

### Activity Diagram - Login / Sign Up
![WhatsApp Image 2021-07-06 at 22 33 12](https://user-images.githubusercontent.com/37243156/124660994-8ddd9f00-dec4-11eb-9088-047d4aa82d6c.jpeg)

If the user visits for the first time, he needs to sign up to Altruistica by giving his basic identity details which will be stored in the database, post which he can use his credentials to login. Users who already have registered with Atruistica can directly login using their id and password, and can see their dashboards and have access to a variety of features.

### Activity Diagram - Creating Fundraisers
![WhatsApp Image 2021-07-06 at 22 33 13](https://user-images.githubusercontent.com/37243156/124660719-34757000-dec4-11eb-95cc-409cd9cc8c96.jpeg)

On logging in, a person can create fundraisers based on various categories and sub-categories. Furthermore, a person can also create crowdfunding for products and ideas. On completion of details and submission of required documents, the administrator will verify the fundraiser. Once verified, it will be visible on the platform. If it was a product-based fundraiser with promise for a product, the goods need to be delivered to the donors accordingly.

### Activity Diagram - Donation
![WhatsApp Image 2021-07-06 at 22 33 10](https://user-images.githubusercontent.com/37243156/124660753-3fc89b80-dec4-11eb-9fb1-c45910badb70.jpeg)

Here you can see how the donation process takes place. It starts with opening the website. You can search funds using various categories eg: in fundraisers, we can search based on categories like Medical, Education, Environment, Education or any social cause. Similarly, funds can be searched based on other categories in Crowdfunding, Crowdsourcing or Covid19 support. The search is followed by logging into portal, updating details for payment and if the donor wants to stay anonymous, that is also updated and then re-directing to payment completion and updation of dashboard. 

### Activity Donation - Donor Match
![WhatsApp Image 2021-07-06 at 22 33 11](https://user-images.githubusercontent.com/37243156/124660744-3b9c7e00-dec4-11eb-809f-2d051e8fa542.jpeg)

A donor who wants to donate any resource can get themselves added here. This page applies a gamified approach where the donee can swipe right if they need a product and left otherwise. You can view all the matched products by clicking the view match button and can further contact the donor. If its appropriately matched, the deal can be sealed.


## Running the Project
This project was bootstrapped with [Create React App] (https://github.com/facebook/create-react-app). It is a 4-in-1 donation system which includes Crowdfunding, Fundraising, Crowdsourcing and Covid-19 Support. 

### Steps to follow:

1. Fork the repository and clone to your local system
2. Connecting to Database - Import the `funddb.sql` into your MySQL server.
3. `npm install` - Installs all the dependencies into your folder.
4. `npm start` - Runs the app in the development mode. Open [http://localhost:8001](http://localhost:8001) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
5. In a separate terminal, type `node server.js` to get the server running. 
