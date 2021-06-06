// setting our api url to the file within our prject
//envorinment varaibles
//process.env.NEXT_PUBLIC_API_URL is an enviornment varaible that will be sought out
//when the project is deployed, the reason is, you dont want the project to seek out localhost:3000
//what this says is if doesnt find the env varaible it will load localhost:3000
//the reason for next public before api url on the envir var is because we want this to be visable for our client 
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
