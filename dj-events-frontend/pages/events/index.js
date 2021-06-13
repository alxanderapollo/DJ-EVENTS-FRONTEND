import Layout from '@/components/Layout' // look at the jsconfig file --> allows us to use just @ instead of all the ../../ routing to access files 
import { API_URL } from '@/config/index' //load in index file form the config folder which contains api url and env varaibles
import EventItem from '@/components/EventItem' // look at the jsconfig file --> allows us to use just @ instead of all the ../../ routing to access files 

//catch events as a prop
export default function EventsPage({events}) {
  return (
    <Layout>
      <h1>Events</h1>
      <h1>Events</h1>
      <h1>Events</h1>
      {/* if the length of events is 0 meaning, not more to show then display as a header 'No Events to ADD' */}
      {events.length === 0 && <h3>No Events to ADD</h3>}

      {/* make a list with map, for each id print out the name */}
      {events.map((evt) =>(
         
        <EventItem key={evt.id} evt={evt}/>

      ))}
    </Layout>
  )
}
//fetch pass events as a prop
//server side rendering
//renders at build time
export async function getStaticProps(){
  //make a request to our backend/server side routes
  //this gets the object
  const res = await fetch (`${API_URL}/api/events`)
  //store the object inside of events
  const events = await res.json()

  console.log(events)//since this is server side rendering the information appears in the terminal rather than on the client side

  //props is the events being passed from the API_URL
  //revalidate,1 means revalidate the information every second if the data is changed
  return{
    props:{events},
    revalidate:1,
  }
}
