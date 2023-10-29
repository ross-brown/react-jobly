
# Jobly Frontend

A fullstack web application that mocks a job and company search platform. Users can create accounts to browse/search for companies and jobs. Logged in users can apply and unapply for jobs.

Demo: https://rbrown-jobly.surge.sh/

Link to backend repo: https://github.com/ross-brown/express-jobly
## Tech Stack
![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![alt text](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


## Features

- Users can create accounts and/or log in with an existing account to be authenticated
- Authenticated users have access to browse companies and jobs, apply/unapply for jobs, and edit their profile.
- Ability to filter/search for jobs and companies by name
- JSON Web Tokens are stored in local storage to keep users logged in after closing browser and/or after page refresh.


## Run Locally

Go to the project directory after cloning the repo

```bash
cd react-jobly
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```


## Future Features

- Custom hooks to encapsulate and reuse logic (useLocalStorage)
- Pagination for the companies and jobs list pages
- Edit form for companies
- Live search using debounce


## Authors

- [Ross Brown](https://www.github.com/ross-brown)
- [John Almodovar](https://www.github.com/johnalmodovar)

