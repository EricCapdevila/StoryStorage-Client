# StoryStorage

## Description

A desktop app to help writers store their ideas and plan their projects, list their characters, locations, relationships, timeline etc. Other users can rate and comment these projects and advice the user.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform, download, rate and comment other user's stories.
-  **Login:** As a user I can create new projects, store them.
-  **Logout:** As a user I can logout so noone sees my ideas not modifies my projects.
-  **Add Idea** As a user I can store ideas for future projects.
-  **List ideas** As a user I can check my ideas and make them into a project.
-  **Add Project** As a user I can create a new project and make it public so others can see and rate it.
-  **See ratings** As a user I can see what others think of my project.
-  **Edit my Project** As a user I can edit any part of the project, characters, plot, timeline, etc.
-  **List Stories** As a user I can check out other user's projects.
-  **Rate Stories** As a user I can rate and comment other projects.
-  **Search Stories** As a user I can search stories by author and genre.


## Backlog

- **mobile version** Since it is an app for writers it makes more sense to make it desktop first.
- **friend list** You can befriend users.
- **Co-authoring** Two or more users can have acces to the same project and modify it, each writing in distinctive colors.
- **file upload** So users can upload their files with the actual story in a pdf file.

  
# Client

## Routes
|      Path     | Component | Permissions | Behavior | 
|---------------|-----------|-------------| -------- |
|   `/`         | HomePage  | public      | shows all projects
| `/signup`     | Signup| anon only| signup form, link to login, to homepage after signup|
| `/login`      | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
|  `/logout`    | n/a| anon only | navigate to homepage after logout, expire session |
|  `/main`      | main | anon / user | see all user projects
|  `/Projects/` | Projects | user only | see user projects
| `/myProject/:id/`| project | user only | se one of the user projects
|  `/myIdeas/`  | Ideas | user | comment a project
|  `/myProjects`| MyProjects | user only | see all current projects
|  `**`         | NotFoundPageComponent | public | 


## Components

- Projects Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- HomePage Service
  - Project.list()
  - Project.search(terms)
- MyProject Service
  - MyProject.list()
  - MyProject.create(data)
  - MyProject.details(id)
  - MyProject.remove 

# Server

## Models

const userSchema = new Schema({
  username: String,
  password: String,
  stories: [{type: Schema.Types.ObjectId, ref:'Story'}],
  // ideas:[{title: String, description:String}],
  friends: [{type: Schema.Types.ObjectId, ref:'Users'}],
  // color: String
})

const storySchema = new Schema({
  title: String,
  genre:{type: String, enum: ['Historical', 'Crime.', 'Science Fiction', 'Romance', 'Horror', 'Other']},
  Summary: String,
  chapters:[{title:String, plot:String }],
  characters:[{type: Schema.Types.ObjectId, ref: 'Characters'}],
  locations:[String],
  timeline:[String],
  misc:[{title: String, description:String}],
  // author: [{type: Schema.Types.ObjectId, ref:'User'}],
  opinions:[{user: Schema.Types.ObjectId, rating: Number, comment: String }],
  // file: String,
  private: { type: Boolean, default: false }
});

const characterSchema = new Schema({
  story: {type: Schema.Types.ObjectId, ref:'Story'},
  name: String,
  bio: String,
  drives:[String],
  relationships:[{character: String, description: String}],
  timeline:[String],
  misc:[{title: String, description:String}],
});
```

## API Endpoints (backend routes)

-------------Session-----------------------

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204

    -------------Main -----------------------
  
- GET /user/projects
  - 200 with array of user projects.
- POST /user/projectid:/comments
  - body:
    - project id
    - me userId if logged in.
    - comment
  - validation
    - id is valid (404)
    - id exists (404)
  - updates user project
- DELETE /user/:projectid/:commentId:
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the usercomments are already stored in the collection)
  - remove from comments array

  -------------My Projects-----------------------

- GET /user/me/projects
  - 200 with array of user projects.
- POST /user/me/projects
  - body:
    - projectId
    - project object{ title, plot, etc.}
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- PUT /user/me/:projectId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: Whatever is changed; title, summary, characters...
  - update story and characters collection if needed.
  - updates user in session
- DELETE /user/me/:projectId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from projects array
  - updates user in session

    -------------My Ideas-----------------------
  
- GET /user/me/ideas
  - 200 with array of user ideas.
- POST /user/me/projects
  - body:
    - ideaId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- PUT /user/me/:ideaId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: Whatever is changed; title, description...
  - updates user in session
- DELETE /user/me/:projectId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from projects array
  - updates user in session

    

## Links

### Trello/Kanban
MyProject
[Link to your trello board](https://trello.com/b/qkPLfzWC/storystorage) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)