(function () {
    var app = angular.module('prototypeApps', ['application-directives']);
    app.controller('prototypeController', function () {
        this.applications = protoApp;
    });
    
    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (application) {
            this.review.createdOn = Date.now();
            application.reviews.push(this.review);
            this.review = {};
        };
    });

})();

var protoApp = [
   {
       "name": "Africa Land Cover Inventory",
       "description": "This is a prototype of land cover land use inventory for Africa.",
       "environment": "Linux / TETHYS",
       "status": "Active development",
       "language": "html, javascript",
       "href": "https://prototype.servirglobal.net/lulc/",
       "images": [
          "images/lclu.jpg"
       ],
       "reviews": [
          {
              "stars": 5,
              "body": "I really like the design and functionality of this application!",
              "author": "billy.ashmall@nasa.gov",
              "createdOn": "1494884075619"
          }
       ]
   },
   {
       "name": "Collect Earth Online",
       "description": "This is a demo of Collect Earth Online and Geo-Dash",
       "environment": "Linux",
       "status": "Active development",
       "language": "java, angular",
       "href": "http://ceo.sig-gis.com/",
       "images": [
          "images/ceo.jpg"
       ],
       "reviews": [
          {
              "stars": 5,
              "body": "What a cool idea to get crowdsourced data.",
              "author": "joe@thomas.com",
              "createdOn": "1397490980837"
          },
          {
              "stars": 5,
              "body": "Collect Earth is awesome!",
              "author": "timtom243@gmail.com",
              "createdOn": "1397490980837"
          }
       ]
   },
   {
       "name": "SERVIR Frost Monitor System",
       "description": "Prototype of the web viewer for the SERVIR Frost Monitor System",
       "environment": "Windows Server/ Android app",
       "status": "prototype",
       "language": "C#, Android",
       "href": "https://prototype.servirglobal.net/frost/",
       "images": [
          "images/frost_monitor.png"
       ],
       "reviews": [
          {
              "stars": 3,
              "body": "I wish I could see more of this app",
              "author": "Cliff@bigreddog.com",
              "createdOn": "1494954172875"
          }
       ]
   },
   {
       "name": "SERVIR Activity Database",
       "description": "SERVIR Activity Database",
       "environment": "Windows",
       "status": "Paused development",
       "language": "C# / asp.net, html, javascript",
       "href": "https://prototype.servirglobal.net/sad/",
       "images": [
          "images/sad.png"
       ],
       "reviews": [

       ]
   },
   {
       "name": "VIC Viewer",
       "description": "This is a prototype of the VIC hydrology model viewer.",
       "environment": "Windows",
       "status": "Prototype complete",
       "language": "C# / asp.net, html, javascript",
       "href": "https://prototype.servirglobal.net/vic/",
       "images": [
          "images/vic_viewer.jpg"
       ],
       "reviews": [

       ]
   }
];