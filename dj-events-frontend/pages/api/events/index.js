//the purpose of this page is to get all the events
// http://localhost:3000/api/events to access the API
//the data we are using is from data.json file which is located inside of this folder
const {events} = require('./data.json')
//this function limits the web verbs
//this function says, if we get a GET request return the data.json
//otherwise anything else such as a PUT POST, ETC is not allowed
export default (req, res) => {
  if(req.method === 'GET') {
      res.status(200).json(events)
  }else{
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not supported`})
  }
}
