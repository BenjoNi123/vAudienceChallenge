# vaudiencechallenge

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Json-server install

```
npm install -g json-server
```

### Json-server use

```
json-server --watch db.json
```
### Starting UP the APP
* get inside cloned directory use <b><u>"npm install"</u></b> to install all dependencies
* use <b><u>npm run serve</u></b> to serve the app on localhost
* in a new terminal run the JSON-Server via <b><u>"json-server --watch db.json"</u></b> command
* Go to the link given to you at step 2 
* Enjoy!
### Steps in creating this app

    1. Create all HTML and components
    2. Create decent amount of CSS so everything fits into its place
    3. create functions and logic of the app
    4. use remaining time to polish things and improve features.

    I started making this app begining at simple navbar and with Login and Home component.

    The idea was to create its functionality first embedding the API you provided. Unfortunately I could not get it to work.

    I do test APIs through Postman first. At first I've got a 500 Internal Server Error.

    After exchanging emails with Johannes he straight went into fixing that and soon after I've got a mail where he said it was fixed.

    I still had issues with it so I decided to transfer my work on something that could get done.


    This is why I started creating components and all of their HTML first.

    Bear in mind that I did start making this expecting everything to be right with API so at the beginning you have Auth.ts and ApiCenter.ts

    Those are "backbone" of this app.

    Since the complexity of this app is at this level I believe my file structure is okay. If the app were to be bigger, changes would be made.


____________________________
### Let's go through the app
____________________________

### Sign In
![image](https://user-images.githubusercontent.com/7386253/96390869-d9c1aa00-11b6-11eb-94c3-101dab4f1568.png)


This is the first screen you will see if you are NOT Logged In.
This contains a form with 2 fields
<ul>
<li>Username: Enter a username</li>
<li>Password: Enter your password</li>
</ul>

Other routes included are <b>Sign Up</b>
__________________________________  

### Sign Up
![image](https://user-images.githubusercontent.com/7386253/96390888-fb229600-11b6-11eb-9b60-1c9460f8817d.png)

Again a <b>Form</b> containing 3 fields now:
<ul>
<li>Username: Enter a username</li>
<li>Password: Enter your password</li>
<li>Email: Enter your email</li>
</ul>

This form contains <b>Custom validation</b> purely functional.
![image](https://user-images.githubusercontent.com/7386253/96390987-62404a80-11b7-11eb-8351-270fb1675084.png)
_______________________________

### LogedIn State
Both Sign up and Sign in are placing a token inside localStorage which is used to recognise logged in user. Upon refresh the page will hold it's state.

### Navigation Guard

I should mention that Navigation guard exists which blocks user from entering random urls and/or accesing other page routes if certain conditions are not met. This was done in <b>routes.ts</b> file.
______________________

### Home View

After a successful Login or Register you will be taken to Home view.

![image](https://user-images.githubusercontent.com/7386253/96391284-7a649980-11b8-11eb-9e0e-5f013ed56b6d.png)

Here we are presented with few things:
* Navigation burger button on the top left side used to open and close navigation.
* Log Out button now appears on right side of TopBar
* <b>VideoList</b> component is shown on Home view.
VideoList component renders video images from the API (In this case the list was hardcoded).

By <b>clicking</b> on any of the images a modal with payment process pops up:
![image](https://user-images.githubusercontent.com/7386253/96391527-5190d400-11b9-11eb-938b-5da8576ff600.png)

Here user has to select from available payment options. Here I mocked that payment is "verified" only if user selects payment method. In real world things go differently with calls to API to process data and payment information.

___________________________________

### Watch Video Screen

After sucessful payment user is taken to another screen which contains selected video and its comments.

![image](https://user-images.githubusercontent.com/7386253/96392282-e5fc3600-11bb-11eb-893e-33991ec14a8f.png)

Comments are called via API and rendered with v-for.

Video starts playing at click on it. 

___________________________________

That's it for the usage of this app.




Time taken to finish this task is greatly impacted by the issues I've had at the beginning. All in all I think 3-4 days is good time for such a task to be completed. I believe with checking the actual code you will understand everything.

Most time spent was onto mocking Login, Register and its validations. Then I would say creating the flow of the app. Least time consumed was with the HTML and CSS.

There were really no "hardest" parts of this challenge only those more and less time consuming. 





























