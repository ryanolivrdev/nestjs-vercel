# Sex Adapt - Back End

## Links:
- [Diagrama UML](https://www.figma.com/file/Cd2JEqC6xwE6xUdFibFOoG/Back-end-Diagrama-ER?node-id=0%3A1)
- [Diagrama de Rotas](https://www.figma.com/file/V9Jp8f1AIjtT0KH4WPcwsm/Back-End-Routes)

## Dependencies:

- [Docker](https://www.docker.com/)
	- [PostgreSQL](https://hub.docker.com/_/postgres) -> if you want to run without docker compose
- [NodeJS](https://nodejs.org/)
- [NestJS/cli](https://docs.nestjs.com/cli/overview)
- [Bash](https://git-scm.com/downloads)

## Setup after installing [docker](https://www.docker.com/):
### If you want to load on docker:
	1.  `sudo docker compose up` or `docker compose up`
### If you want to start local:
	1. `bash ./start.sh` (Check [Known Errors](#known-errors))
	2. `yarn install @nestjs/cli && yarn`

## Docker infos:
	Docker will be running on port 5432 (default)
	Docker container default name is sex-adapt-backend-db

## Known Errors:

1. ECONNREFUSED ::1:5432
	- Docker might not be running
		- Solution 1: `sudo service run docker`;
		- Solution 2: Check your firewall;
2. error: database "sex_adapt" does not exist
	- Database wasn't created
		- Solution: 
			1. Execute `docker exec -it postgres-sex-adapt psql -U postgres`;
			2. Execute `CREATE DATABASE "sex_adapt"`;
			3. Quit with \q and try again;
3. error: database "sex_adapt" already exists
	- Database is duplicated
		- Solution: 
			1. Restart sex-adapt-backend-db container with: `docker run sex-adapt-backend-db`
