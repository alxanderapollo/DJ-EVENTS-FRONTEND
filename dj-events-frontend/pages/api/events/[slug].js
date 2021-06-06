//The purpose of this page is to get individual events
// this page will allow us to use any slug in the data data much like the pages
// the focus is to get single events rather than whole ones
const {events} = require('./data.json')
export default (req, res) => {
    const evt = events.filter(ev => ev.slug === req.query.slug) //single event
  //200 status code if works
  if(req.method === 'GET') {
      res.status(200).json(evt)
  }else{
    res.setHeader('Allow', ['GET']) 
    //400 status what was sent was not right 
    res.status(405).json({message: `Method ${req.method} is not supported`})
  }
}
