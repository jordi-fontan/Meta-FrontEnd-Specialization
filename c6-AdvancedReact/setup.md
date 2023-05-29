# Setting up a React project in VS Code (Optional)

To complete the exercises in this course you have been provided with a dedicated lab environment set up specifically for you to apply the skills that you have learned.
You can find out more about Working with Labs in this course in the following reading.

You can also use VS Code to practice these exercises on your local machine as an alternative option.

To follow along in this reading, you need to have Node.js and VS Code already installed on your computer. 
If you don’t have this setup, please refer to the following resources in this course: Setting up VS Code and Installing Node and NPM.

In VS Code, you're ready to start a brand new React project.

You can do it using npm.



** An example npm module that can be useful for a new React developer is create-react-app. **

While this npm module comes with its own website, you can also find some info on the create-react-app project on GitHub. 

Whenever you run the npm command to add other people's code, that code, and all other Node modules that depend on it, get downloaded to your machine.

However, although it's possible to do so, this is not really necessary, at least in the case of the create-react-app Node module.

In other words, you can avoid installing the create-react-app package but still use it.
`
You can do that by running the following command:
npm init react-app example, where “example” is the actual name of your app. 
You can use any name you’d like, but it’s always good to have a name that is descriptive and short.
`
In the next section, you'll learn how to build a brand new app that you can name: firstapp.

Opening the built-in VS Code terminal and running npm init react-app command
In VS Code, click on View, Terminal to open the built-in terminal.

How to access the Terminal in Visual Studio Code
Now run the command to add a brand new React app to the machine:


**npm init react-app firstapp

The installation and setup might take a few minutes.


**If you follow the suggestions from the above output, you'll run: cd firstapp, and then npm start.

Following the instructions, opening a browser with the address bar pointing to http://localhost:3000, will show the following page in your browser:

React logo displayed on the browser
This means that you've successfully:

- Set up your local development environment 

- Run the create-react-app npm package (without installing it!) 

- Built a starter React app on your local machine 

- Served that starter React app in your browser 

After you've built your starting setup, in Module 2 you'll start working with the basic building blocks of React: components.
