# blockchain-elections
A Decentralized Voting platform built on the ethereum blockchain which uses face recognition to authenticate voters


<img src="https://user-images.githubusercontent.com/76650090/170690698-a2ef7870-32fd-4123-beef-3011e3837a03.png" width="500" height="400">

## Why use Blockchain for elections?
Online voting is a trend that is gaining momentum in modern society. It has great potential to decrease organizational costs and increase voter turnout. It eliminates the need to print ballot papers or open polling stations-voters can vote from wherever there is an Internet connection. Despite these benefits, online voting solutions are viewed with a great deal of caution because they introduce new threats. A single vulnerability can lead to large-scale manipulations of votes. Electronic voting systems must be legitimate, accurate, safe, and convenient when used for elections. Nonetheless, adoption may be limited by potential problems associated with electronic voting systems. Blockchain technology came into the ground to overcome these issues and offers decentralized nodes for electronic voting and is used to produce electronic voting systems mainly because of their end-to-end verification advantages. This technology is a beautiful replacement for traditional electronic voting solutions with distributed, non-repudiation, and security protection characteristics. Keeping these points in mind, I have built this Decentralized Voting platform on the Ethereum blockchain which authenticates voters using Face Recognition.

## Features of the Application

![features](https://user-images.githubusercontent.com/76650090/170691859-30efc7a1-5b41-4796-8bba-5f6767b9b38b.png)

## Working of the Application
![2020-04-22-21](https://user-images.githubusercontent.com/76650090/170700439-a7abf2a8-7c0f-4e4d-8800-8cdae3c1c930.png)



## Technologies Used
Backend: Node.js <br />
Database: MongoDB <br />
Frontend: Ejs <br />
Blockchain: Ethereum Blockchain(Test Network) <br />
Face Recognition: Microsoft Azure Face API <br />

## Getting Started
### Requirements
1. Node.js(https://nodejs.org/en/download/) (Please use version ^13.9.0 for this application)
2. Web3 and Testrpc
```
npm install ethereumjs-testrpc web3@0.20.1
```

### Installation
1. Clone the repo from GitHub
2. Run the following command to install all the dependencies for the project
```
npm install
```
I have explained the steps from here onward in the video as well, the link to which I have attatched at the end

3. Open 3 terminals parallelly. In one of the terminals type the following command
```
npm run testrpc
```
  This will start the test network blockchain on the local machine

4. In another terminal, run the following command:
```
node
```
  This will start the node console

5. Go to ```deploy_script.js``` inside the ```blockchain``` directory. Copy line 1-16 from this file and paste it inside the node terminal. This will give the address of the deployed contract. Copy this address.

6. Go to ```blockchain.js``` within ```public > javascripts``` directory. In this file on line 7, replace the already existing address within ``VotingContract.at()`` and paste the new address which you had copied in Step 5. Save the file.

7. In another terminal, run the following command:
```
npm start
```
  This will deploy on the applicatin on localhost:3000

8. You can now access the application by going to http://localhost:3000/ in the browser

### Additional Information
1. Link to explaination video: <br />
https://www.youtube.com/watch?v=Q3s7Qqa0BxI

2. Login credentials for admin panel:<br />
Login_id: admin <br />
Password: testing123 <br />

3. You do not need to provide any MongoDB URL or Microsoft Face API Key as I have provided mine in the ```config.js``` file


## Additonal Features
1. The votes are not stored in a central backend server but are stored on the blockchain which enhances security and privacy.
2. The User is provided with a QR Code on successful registration so that they do not have to enter their credentials every time they vote. They can vote by just providing their QR Code.
3. A physical KYC feature has been provided to the Admin for enhanced security.


## Remarks
Since transactions on Blockchain take a longer time as compared to centralized backend servers, hence the execution time of the application will be slower as compared to an application which uses centralized backend servers for storing the votes, but Blockchain gives us the privilege of enhanced security and privacy.



