# React Solo Project Options

Choose from one of the following four options below.

1. [Travel Planner](#travel-planner)
1. [Weather App](#weather-app)
1. [Job Tracker](#job-tracker)
1. [Activity Planner](#activity-planner)

Each is broken up into three levels.

* **Level 1**: This level is **required**. Meets all the requirements for the React project.
* **Level 2**: This level is **optional**. It involves all of Level 1, and adds increased complexity.
* **Level 3**: This level is **optional**. It involves all of Levels 1 _and_ 2, as well as introducing the highest level of complexity.

You'll write an application that matches the criteria as outlined in the "User Story."

* Not all levels require a JSON API, nor do they all require any 3rd party APIs.
* Some levels require one _or both_ of those items, **read the requirements carefully**!
* Only apply the features that meet the requirements for a given level.

Project Options:

---

## Travel planner

**User Story**: As a user, I want to be able to plan a week long trip itinerary for a chosen destination.

Requires:

* React

Optional:

* User Authentication
* Express JSON API
* Redux _or_ Context

### Travel Planner Level 1

* Save a location to a database.
* Create a list of daily activities for the location.
* See a list of activities for each day.
* See the details about the activity for a given day.

### Travel Planner Level 2

* All of [Level 1](#travel-planner-level-1)
* Add Redux or Context

### Travel Planner Level 3

* All of [Level 2](#travel-planner-level-2)
* Incorporate a 3rd party API for information about the destination.

#### Possible APIs

* [Open Brewery DB](https://www.openbrewerydb.org/)

---

## Weather App

**User Story**: As a user, I want to be able to view the weather for a particular location.

Requires:

* React
* Third party API: [OpenWeatherMap API](https://openweathermap.org/api)

Optional:

* User Authentication
* Express JSON API
* Redux _or_ Context

### Weather App Level 1

* Use the [OpenWeatherMap API](https://openweathermap.org/api)
* Ask a user for a location.
* See the weather forecast for the week (list of all days, Sunday - Saturday).
* See the weather details for each day (view one day at a time).

### Weather App Level 2

* All of [Level 1](#weather-app-level-1)
* Add User Authentication
* Store a user's location in the database.

### Weather App Level 3

* All of [Level 2](#weather-app-level-2)
* Save _multiple_ of locations.
* Allow a user to tag a location as a "favorite."
* Display a list of favorite locations.

---

## Job Tracker

**User Story**: As a user, I want to be able to view a list of job postings and the job details from the [FindWork Jobs API](https://findwork.dev/developers/) page.

**Updated August 2nd, 2021** R.I.P. Github Jobs board. This one is on hold pending a replacement API. 😭

Requires:

* React
* Third party API: [FindWork Jobs API](https://findwork.dev/developers/) <br/>(requires free registration)

Optional:

* Redux _or_ Context
* Express JSON API
* It _might_ require a CORS Proxy (Express App, or a third party proxy)

### Job Tracker Level 1

* Use the [FindWork Jobs API](https://findwork.dev/developers/)
* Ask a user for a programming language, (i.e. Python, Ruby, JavaScript).
* See a list of all available jobs.
* See the details for a particular job.

### Job Tracker Level 2

* All of [Level 1](#job-tracker-level-1)
* Narrow searches based a location, (i.e. Atlanta, Houston, New York).

### Job Tracker Level 3

* All of [Level 2](#job-tracker-level-2)
* Add User Authentication.
* Allow a user to tag jobs as a "favorite," "applied," or both.

---

## Activity Planner

**User Story**: As a user, I want to be able to view a list of activities that need to be done, and keep track of the activities I have completed.

Requires:

* React

Optional:

* User Authentication
* Express JSON API
* Redux _or_ Context

### Activity Planner Level 1

* See a list of activities.
* See the details for a particular activity.
* Mark an activity as "complete."
* Add new activities.

### Activity Planner Level 2

* All of [Level 1](#activity-planner-level-1)
* Add User Authentication.
* Make a list of "favorite" activities for a user.

### Activity Planner Level 3

* All of [Level 2](#activity-planner-level-2)
* Tie an activity to a specific date.
* Flag activities as "overdue" if they're incomplete beyond a certain date.
* Allow a user to "clone" an activity to a _new_ date.
