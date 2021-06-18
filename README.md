# results![firefox_R1gXrt25jj](https://user-images.githubusercontent.com/43553695/120933824-92723480-c719-11eb-9b89-05b06dfe0123.png)


Perequisites to run this project:
1. Software: Vs code, Node js
2. The node modules of the project needs to installed after adding the folders frontend and  backend to the vs code workspace using command: "npm install". Now to run the project get into both the directories in seperate terminals using command: "npm start".

Componets of frontend:
1. App.js: Search.js component runs from here.
2. index.css: Contains css which is being used in search.js
3. index.js: Responsible for rendering all the components of my react project.
4. search.js: This is the main file which contains all the logic of my front-end. Here I take a string from the text input and split it at ',' and store in array ( for arrays i have used react hook named useState ) and send that array to backend using axios and post method. After all result is fetched from api in backend its recieved in array named 'data' and then roll no and result is displayed in table.

Components of backend:
1. index.js: It contains code used to create a local server to serve as backend for our project. Here i have created a server using Express js library. I've creted a async function Then i've taken array recieved from front-end and I've used axios library to fetch data from api in a loop using dynamic value of roll no in url and pushed result in rdata array and sent it to the front-end.

Plugins Used:
1. Axios
2. Cors
3. Express
4. UseState
5. Json
