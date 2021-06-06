// dynamic routing to add dynamic pages we must create a file with brackets [slug].js
//now when i try accessing events/1 or events/2 this component will appear on the screen with the written message

//router can be used for redirecting, or to pass Id's
//its also provides more information about the obect, such as pass name, as well as query
//and slug

//this is a hook
import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'


//edit and delete icons
import {FaPencilAlt, FaTimes} from 'react-icons/fa'
//send the payload
export default function EventPage({evt}) {
    const router = useRouter();
    console.log(router)

    const deleteEvent = (e) =>{
        console.log('DeletePlease')
    }

    return (
        <Layout>
{/*             
             routes the name of the query as the heading event in this page,
            whiever event is chosen the title name will be the header here  
            <h2>{router.query.slug}</h2>
             */}
            {/* edit link and delete event */}
            <div className ={styles.event}>
                <div className={styles.controls}>
                    {/* Edit Event */}
                <Link href= {`/events/edit/${evt.id}`}>
                    <a>
                        <FaPencilAlt/> Edit Event
                    </a>
                </Link>

                {/* Delete Event */}
                <a href ="#"  className={styles.delete} onClick={deleteEvent}>
                    <FaTimes/>Delete Event
                </a>
                </div>
                {/* Date and Time  */}
                <span>
                    {evt.date} at {evt.time}
                </span>

            {/* event name */}
            <h1>{evt.name}</h1>
            {/* if an image exists then print out the image on the screen */}
            {evt.image && (
                <div className={styles.image}>
                    <Image src={evt.image} width={960} height={600}/>
                </div>
            )}
            {/* Perfromers for the evening */}
            <h3>Perfromers:</h3>
            <p>{evt.perfromers}</p>
            <h3>Description:</h3>
            <p>{evt.description}</p>
            <h3>Venue: {evt.venue}</h3>
            <p>{evt.address}</p>

            {/* Go Back button */}
            <Link href='/events'>
                {/* adds a go back arrow */}
                <a className={styles.back}>  {'<'}Go Back</a>
            </Link>


            </div>
        </Layout>
    )
}


//for static paths its required to have all the data, so that
//the function can dynamically build routes at build time 
//so the first function getStaticPaths fetches all the data
//the second function getStaticPaths receives all the dat and does stuff with it
export async function getStaticPaths() {
    //1.first get all of our events
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    //2.set up the paths using a map
    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    })) 

    return {
        paths,
        //setting fall back to false will show a 404 if a resource or path isnt found (for static pages)
        //if you want it to look for a path even if it doesnt exist at build time and to even to make 
        fallback:true
    }
}

export async function getStaticProps({params:{slug}}){
    console.log({slug})
    //fetch the slug from the api
    //this will return an array events, with the one event
    const res = await fetch(`${API_URL}/api/events/${slug}`)
    // now we have our event
    const event = await res.json()
    //since there is only object within in the array
    //send back the first item in th event array
    //revalidate every second 
    return {
        props: {
            evt:event[0]
        },
        revalidate:1
    }
}









// //server side props 
// //need to return an object or else an error
// export async function getServerSideProps({query:{slug}}){
//     console.log({slug})
//     //fetch the slug from the api
//     //this will return an array events, with the one event
//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     // now we have our event
//     const event = await res.json()
//     //since there is only object within in the array
//     //send back the first item in th event array
//     return {
//         props: {
//             evt:event[0]
//         }
//     }
// }