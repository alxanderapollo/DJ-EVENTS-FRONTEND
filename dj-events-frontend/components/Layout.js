import Head from 'next/Head'
import {useRouter} from 'next/Router'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
//wraps all the page content
export default function Layout({title, keywords, description, children}) {
    const router = useRouter()
    return (
        <div>
            {/* {title,  meta information for the page tab} */}
            <Head>
                <title>{title}</title>
                <meta name ='description' content = {description}/>
                <meta name ='keywords' content = {keywords}/>
            </Head>
            
            {/* {top of the page header} */}
            <Header/>
            {/* if we are one the home page, then showcase the big picture, otherwise dont && is short for then */}
            {router.pathname === '/' && <Showcase/>}
            <div className={styles.container}>
                {children}  
            </div>
            <Footer/>     
        </div>
    )
}
//Layout props project, all of this is data for the meta tags
//each page will have meta information and display the below information
Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: ' music, dj, edm'
}


