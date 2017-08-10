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
This is the modal state of the modal page for the project.

![Image of Modal Page - Modal](https://github.com/KoltonG/Build-Server/raw/master/resources/Modal%20Page%20-%20Modal.png)

## Project Scope
Below will list all the required information for this project.

### General Information
This project will need to use Angular version 1.0.0 and should refrain from using jQuery(less is better) and Bootstrap(the grid system is accepted).

Please use the [7-1 SCSS folder architecture by Hugo Giraudel](https://sass-guidelin.es/#architecture) and we would like to see the use of:
- Mixins
- Placeholders
- Functions

This project is using the Muli font.

You can update any pre-written code in the project and add any needed server code.

### Header
The header will be sticky and contain five links.
The Home link will route to the Landing Page and the Modal Page link will route to the Modal Page.

The active and hover state of the links in the header share the same style.
Links entering this state should not push or break the position of the other links.

### Landing Page
This is the landing page for the project. 
This is the default route. 

### Modal Page
This is the modal page for the project.
This page route is `/modal`.

Please note that the `Open Modal` button has to be below the page fold so that a user will need to scroll down the page to click on it. **The dotted line is not part of the design. Its to show where the page fold would be.**

### Modal Page Modal State
When clicking on the `Open Modal` button, a modal should appear. The instructions below explains the desired opening and closing transitions.

#### Modal Appear Transition
1. When the user activates the Open Modal button.
> Dark overlay fades in  
> When dark overlay has completely faded in, have the modal fade in

2. When the user closes the modal by either clicking on the black overlay or by clicking on the x sign.
> Modal fades out
> When the modal has completely faded out, have the dark overlay fade out

The modal must be vertically and horizontally centered on the browser view.

The table in this modal will display data from the following endpoint:
```
URL: https://test-backend.azurewebsites.net/v1/properties
Header: Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1ZXN0aW9uQHNpbXB0ZWsuY2EiLCJpYXQiOjE1MDIyMzY0ODEsImV4cCI6MTUwMjI0NzI4MX0.C8hCDimD_qyNGe1_u8arV_xM_TEo-SiZ_pSINHls09E
```

Populate the table using ng-repeat. The table should have the following capabilites:
- A search bar that can filter by name and address
- Column filters when clicking on the column headers (for the name column, make it filter by name only and for the disconnected since make it filter by earliest time)

## How to run the server
To run the server for the first time, please run the following command.
`npm i`

Once all the dependencies have been installed. You can run the server using the following command.
`npm start`

## How to submit your solution
Please download this project and create a repo on your personal Github for your solution submission.


**This repo is a build server that runs a node server on port 3000 and compiles SCSS files into CSS to the resources folder. 
The resources folder in this projects acts at the public folder. You can use this as you wish.**

