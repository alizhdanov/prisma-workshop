We are going to implement very basic version of [RealWorld API Spec](https://github.com/gothinkster/realworld/tree/master/api)

Models

`User`

- fields - id, username (required, unique), email (required, unique), bio, image
- relations - articles, comments

`Article`

- fields - id, title, body, createdAt, updatedAt
- relations - author, comments

`Comment`

- fields - id, body, createdAt, updatedAt
- relations - author, article

`Tag`

- fields - id, name
- relations - article

`Queries and Mutations`

- Get User
- Create/Update/Delete User
- Get Article
- List Articles
  - Articles by tag
  - Articles by user
- Create/Update/Delete Article
- Add Comments to an Article
- Get Comments from an Article
- Get Tags
