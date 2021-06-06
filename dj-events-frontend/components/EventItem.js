import Link from 'next/Link';
import Image from 'next/Image';
import styles from '@/styles/EventItem.module.css'
export default function EventItem({evt}){
    return(
        <div className={styles.event}>
            {/* Image */}
            <div className={styles.img}> 
            {/* if we have an image place the image down otherwise go into folder and post the default image as the one to use */}
            <Image src={evt.image ? evt.image :'/images/event-default.png'} width={170} height={100}/>
            </div>

            {/* Event info */}
            <div className = {styles.info}>
                <span>
                    {evt.date} at {evt.time}
                </span>
                <h3>{evt.name}</h3>
            </div>

            {/* Clickable links  */}
            <div className={styles.Link}>
                <Link href={ `/events/${evt.slug}`}>
                    {/* global class for the button */}
                    <a className='btn'>Details</a>
                </Link>
            </div>
        </div>
    )
}