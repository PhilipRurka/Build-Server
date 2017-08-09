# SimpTek Technologies Front End Test

## Introduction
You will be creating a single page application using Angular and Node. The application design is below.

### Landing Page
This is the landing page for the project

![Image of Landing Page](https://github.com/KoltonG/Build-Server/raw/master/resources/Home%20Page.png)

### Modal Page
This is the modal page for the project.

![Image of Modal Page](https://github.com/KoltonG/Build-Server/raw/master/resources/Modal%20Page.png)

### Modal Page - Modal
This is the modal state of the modal page. When clicking on the `Open Modal` button a modal will appear. Please follow these steps for the proper modal appear animation.

![Image of Modal Page - Modal](https://github.com/KoltonG/Build-Server/raw/master/resources/Modal%20Page%20-%20Modal.png)

## Project Scope
Below will list all the required information for this project as well as any requirements.

### General Information
This project will need to use Angular version 1.0.0 and should refrain from using jQuery(less is better) and Bootstrap(the grid system is accepted).

Please use the [7-1 SCSS folder architecture by Hugo Giraudel](https://sass-guidelin.es/#architecture) and we would like to see the use of:
- Mixins
- Placeholders
- Functions

This project is using the Muli font

You can update any pre-written code in the project and add any needed server code.

### General Page Details
The header will be sticky and will contain five links.

When clicking on any header link, they become active. The images above shows this state

### Landing Page
This is the landing page for the project. You can get to this page via `localhost:3000` and by clicking on the `Home` link in the header.

### Modal Page
This is the modal page for the project. You can get to this page via `localhost:3000/modal` and by clicking on the `Modal Page` button.

Please note that the `Open Modal` button has to be below the page fold so that a user will need to scroll down the page to click on it. **The dotted line is to show where the page fold would be. Please exclude this from the design**

### Modal Page Modal State
When clicking on the `Open Modal` button a modal should appear following this animation.

#### Modal Appear Animation
1. When the user wants to open the modal
> Dark overlay fades in  
> When dark overlay has faded in, have the modal fade in

2. When the user wants to close the modal
> When clicking on the dark overlay, or the X sign, have the modal fade out  
> Once the modal has faded out, have the dark overlay fade out

The modal will be centered vertically and horizontally centered.

There is a table that is shown on this page that presents the information from the following endpoint:
```
URL: https://test-backend.azurewebsites.net/v1/properties
Header: Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1ZXN0aW9uQHNpbXB0ZWsuY2EiLCJpYXQiOjE1MDIyMzY0ODEsImV4cCI6MTUwMjI0NzI4MX0.C8hCDimD_qyNGe1_u8arV_xM_TEo-SiZ_pSINHls09E
```

Using ng-repeat, create a table that displays this information as shown in the design from the endpoint. The table should have the following capabilites:
- A search bar that can filter by name and address
- Column filters when clicking on the column headers (for the name colunm, have it filter alphabetically and for the disconnected since have it filter by earliest time)

## How to run the server
To run the server for the first time, please run the following command  
`npm i`

Once all the dependencies have been installed. You can run the server using the following command  
`npm start`

## How to submit your solution
Please download this project and create a repo on your personal Github for your solution submission.


**This repo is a build server that runs a node server on port 3000 and compiles SCSS files into CSS to the resources folder. 
The resources folder in this projects acts at the public folder. You can use this as you wish.**

