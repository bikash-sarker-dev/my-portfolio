export let projects = [
  {
    id: 1,
    project_title: "Medical Camp Management system (MCMS)",
    image1: "https://i.ibb.co.com/WWcVmqxF/Screenshot-10.png",
    image2: "https://i.ibb.co.com/WWcVmqxF/Screenshot-10.png",
    description:
      "This web app works to manage a medical camp. This project was worked on with both Full stack Backend and frontend . In this application, we will see a landing page with many sections. Here we can see a heading, a carousel slider, and we can see popular games and we can see feedback from the camps. There is another route in this project called Anabel Ken, which means All Ken, which can be seen in this route. Here are some search implementations . There is also a shorting that we can do. Why is there another button above the high rating and above the high star? How will that layout column be displayed? .Clicking on the Columns button will bring up the options for Column One and Two. Clicking on Column Two will display two columns, and clicking on Three will display three columns. The selection option is placed at the bottom. Clicking on Next will take you to the next page, and clicking on it will take you to the previous page. There are numbers, and the number of pages we will show on this page is given through a selection. We can see a pic avatars icon, clicking on it will bring up a dropdown menu from where we can see the dashboard, view profiles, log out, and each . When we click on the dashboard, we will go to the dashboard layout. So here there is a condition, one is the Organize account and the other is the Participant account. He can do many things only. We have analyzed the dashboard, we can see how much money has been deposited and how many camps there are and how many participants are in the application and how many have correctly feedback this campbell. The organizer can create a camp, update it, and delete it if they want. If we go to the All Participants route, we will be able to see all the participants we have. From here, if we want, the organizer can make one of them an admin and delete anything else.",
    client: "Medical camp",
    project_duration: "15 day",
    technologies_used: [
      "HTML",
      "CSS",
      "tailwindcss",
      "JavaScript",
      "React",
      "react router dom",
      "firebase",
      "express.js",
      "Mongodb",
      "Json web token",
      "moment",
      "sweetalert2",
      "aos",
      "stripe/react-stripe-js",
      "tanstack/react-query",
      "material-tailwind/react",
      "heroicons/react",
    ],
    points_feature: [
      "I have an Aborts icon in this route. This is where we conditionally place Aborts and Character Names.",
      "We can see all statuses in the Organizer dashboard.For example, how much money have I received and how many camps are there and how many participating users are there and how many camps have successfully given feedback.",
      "The organizer can create a camp from the add-a-camera, delete it if they want, and update it if something needs to be renamed.",
      "We have uploaded the image here. We have added functionality to it through the Image DB API. It is working very well.",
      "In the All Participants route, we have registered all participants here. Only the organizer can see them. If the organizer wants, he can admin any participant from here.",
      "In the Profile Manager route, we have set up how to take the information from a participant's profile and through input, the information is directly stored in the database and can be displayed on the site in a very beautiful way.",
      "There is a Manage Register Joining round here and if we click there we can see a lot of information that we can see if a participant is making a set payment here and we can change its status if we want.Here we have implemented a search bar so that if we want to search for something, we can bring it up.",
      "There are two more routes here, they are log out and one is the home page because if we want, we can log out from here and if we want, we can go to Umm as per our need.",
      "A user, the organizer, can see if a participant is making a payment and can change the payment status and confirmation status if he wants to, and the person who is paying can be understood by clicking the correct button.",
      "We will be able to see some things in the analysis, such as how many camps they have joined, how many successful payments they have made, how many pending payments they have made, and a history of how much money they have deposited in total.",
      "In the participant join register route, we can see how many camps he has joined and which ones are typing or unpaid, we can see the status, and we can see the pending and confirmed statuses, and if the payment has been made, we can see the feedback option.",
      "If we haven't paid at the restart camp, there will be a payment button, clicking on that payment button will take me to the payment road, from there we can complete the payment with a Visa card.",
      "We have a payment history here, where we can see a history of the money we have paid, including the transaction ID, how much money we have received, and the confirmation status and the date we deposited it.",
      "We have implemented authentication. We are working with React very little authentication and we have used React in the forms on the login and register pages.",
      "We have used as a security measure that the WT token we used will automatically log us out after an hour and the token will expire.",
      "We created an instant and used Axios' most powerful future is inter-sector we created through custom hooks.",
    ],
    website_Live_link: "https://medicalcamps.netlify.app",
    github_link:
      "https://github.com/bikash-sarker-dev/medical-camp-management-system-server.git",
  },
  {
    id: 2,
    project_title: "Car Rental system application",
    image1: "https://i.ibb.co.com/KmpNKS8/project11-2.png",
    image2: "https://i.ibb.co.com/MBfGbS3/project11-1.png",
    description:
      "My application is for booking cars. There are many more functions in this application that one can do in this application. To enjoy Full Api Ki, you first need to log in, register, and after registering, you need to log in. Once you are logged in, you will find many features here. You can add a car here and show that car there. You can also delete this if you want or update it if you like something. There are many things here like in the subheader you will get login register with live date and time view . If you want, you can view the card details from here. There is a booking now button there, clicking on it will give you a prop. You need to select the property date and date line from which date you will rent it. Then once these bookings are confirmed, you will be able to see all the information that you have received the booking and you can edit it if you want, such as editing the booking status, then the date line, then clicking the cancel button. There are many more tasks that remain, you can see them while using the application.",
    client: "Car Rental system",
    project_duration: "10 day",
    technologies_used: [
      "HTML",
      "CSS",
      "tailwindcss",
      "JavaScript",
      "React",
      "react router dom",
      "firebase",
      "express.js",
      "Node.js",
    ],
    points_feature: [
      "Here you can see the recent cars and there is a button called Booking, clicking on it will take you to the booking page.",
      "You can update the status and date line if you want from the booking page.",
      "Authentication is used in this application, you have to register by logging in, then you can make bookings and make a card payment.",
      "Here is an image. If you click on the car certificate on this image, you will see your name and the number next to it. If you are not logged in, you will not be able to see all the navigation. If you are logged in, you will be able to see all the navigation.",
      "Here you can search from All and Cars as you like. This fisher has been created and if you want, you can filter from here and find the highest price and lowest price.",
      "Umbrella and here is a grid out and list layout is a future that you can see if you want to get it just click on the Grid icon.",
    ],
    website_Live_link: "https://cars-rental-systems.netlify.app",
    github_link:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-bikash-sarker-dev.git",
  },
  {
    id: 3,
    project_title: "Chill Gamer application",
    image1: "https://i.ibb.co.com/LPpBYmQ/project10-1.png",
    image2: "https://i.ibb.co.com/s3Ycs9J/project10-2.png",
    description:
      "The name of this application is chill Gamer . The purpose of this application is to thoroughly discuss and review games.Then we can add and delete game reviews if we want in this application and we can put them in the watch list. From here, we can see which tournament game we want and its description is given and from there we can give some concepts. We can see the top rated games in this application and we can also see if there are any new games. If we want, we can see all reviews and all user games from the All Reviews page. If we want, we can see the details from here and if we want from there, there is a button called Tag List. If we click here, we can become an watch list. This is what you hear about authentication and the future of this authentication is to login and register after that. Now we can add a review, update it, and even delete it. Here we have some map items in our member and on the right shirt we have an image of a user and when hovered over it will show the user's name. And is there an icon next to it for dark mode and light mode.",
    client: "Gamer application",
    project_duration: "8 day",
    technologies_used: [
      "HTML",
      "CSS",
      "tailwindcss",
      "JavaScript",
      "React",
      "react router dom",
      "firebase",
      "express.js",
      "Node.js",
    ],
    points_feature: [
      "In this application we can add, delete, update and show reviews if we want.",
      "We cannot add anything to the application even if we want to, so we have protected it through authentication by using protected routes.",
      "When we click on a review details page, we see it on the details page and there is a button called Add to List. By clicking on that, we can be added to the wait list.",
      "To further filter the All pages, we can extract and display reviews by any category through the James category.",
      "We can sort the reviews, we can see the latest reviews, we can see the old reviews, and we can see the previous generation ratings and the new generation settings, all of which we can see through the correct",
      "We can see the West Indies card from the West List, and from there we can go back to Explore Details and see the Review Hall again.",
    ],
    website_Live_link: "https://chil-game.netlify.app",
    github_link:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-bikash-sarker-dev.git",
  },
  {
    id: 4,
    project_title: "A Coupon Collecting Application",
    image1: "https://i.ibb.co.com/gdsZ0tz/project9-1.png",
    image2: "https://i.ibb.co.com/5kymyzn/project9-2.png",
    description:
      "The task of this project is to collect coupons from popular online e-commerce websites. There are many brands here, a secret code is created through this website to determine which brand can give the highest percentage among these brands. Using these coupons saves customers a lot of money. To collect secrets from this website, you must first become a user. To become a user, you need to register on this website. Once you complete the registration, you can log in and use this website. If you don't already have a secret, you will have to buy some new secrets, or if some secrets are free, you will have to use those secrets, then you will get discounts from major e-commerce websites. Then you can organize your profiles properly on this website and if you want, you can update the profile image and also update the username. If you don't log in, you won't be able to access the route that has a profile called My Profile because you haven't logged in. If you don't, you'll have to register and then log in.",
    project_duration: "6 day",
    technologies_used: [
      "HTML",
      "CSS",
      "tailwindcss",
      "JavaScript",
      "React",
      "react router dom",
      "firebase",
    ],
    points_feature: [
      "Home page welcome message",
      "Page route",
      "Private route",
      "Animation section",
      "Ratting show Dynamic",
      "Google with sign up",
      "profile Update",
      "toast alert message",
      "Reset password",
      "Sticky menu",
      "Click to auto Copy text",
      "Register",
      "Login",
    ],
    website_Live_link: "https://coupon-discounts.netlify.app/",
    github_link:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-bikash-sarker-dev",
  },
];
