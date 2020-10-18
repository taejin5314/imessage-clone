# Project Name: IMessage clone

This project is clone coding iMessage by using react JS, redux and firebase.

## 1. npx create-react-app --template redux

I used `npx create-react-app --template redux` command to make a new react project with redux.

## 2. Login Page

![loginpage](https://user-images.githubusercontent.com/21342802/96376159-3c7d5c00-114b-11eb-954b-b2141f9c2055.png)

Login page has iMessage logo and sign in button. By clicking sign in button, the user can be logged in with google account.

## 3. Main Page

Main page is divided by sidebar and chat component. Sidebar component has user information and chatrooms. Chat component contains the name of chatroom and messages.

![mainpage](https://user-images.githubusercontent.com/21342802/96376274-ef4dba00-114b-11eb-83c7-f26d8cfb0246.png)

## 4. Adding chat room

By clicking the button in left-up side, the user can create a new chat room.

![addchat](https://user-images.githubusercontent.com/21342802/96376311-245a0c80-114c-11eb-8af3-18903d2aee96.png)

## 5. Adding message

When the user type the message in the input box and press enter, the message will be sent to the firebase store, and it will be shown on the chat component immediately.

## 6. Firebase deploy

`firebase init`: Initialize firebase hosting server. <br />
`npm run build`: Build the project. <br />
`firebase deploy`: Deploy the project through firebase. <br />

## Project Link

Below is the link for my project. Go ahead and check this out!

https://imessage-clone-a8014.web.app/

## Thank you!
