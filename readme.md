# Rules Validation API

## Prerequisites

- NodeJS and NPM installed on system. If not find them [here](https://nodejs.org)
- Make `.env` file which is a copy of `.env.example` with your values

## Setup

- Clone the repo with `git clone <repo_name>.git`
- Open folder in terminal to run `npm install` to install all dependencies
- To see the API in action run `npm run build` then `npm start` to check all endpoints.

## Endpoints

- Get all information about me

```
GET /
```

- Validate a rule on data

```
POST /validate-rule

Sample payload [JSON]:

{
 "rule": {
   "field": "missions.count"
   "condition": "gte",
   "condition_value": 30
 },
 "data": {
   "name": "James Holden",
   "crew": "Rocinante",
   "age": 34,
   "position": "Captain",
   "missions": {
     count: 45,
     successful: 44,
     failed: 1
   }
 }
}
```

Made with ❤ by **Redjanvier**
