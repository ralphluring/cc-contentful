import React,{ useState }from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'
import Logos from '../components/logos'
import Nav from '../components/nav'
import Navtoggle from '../components/navtoggle'


const Header = () => {

    const data = useStaticQuery(graphql`
      query  {
          site {
            siteMetadata {
              title
            }
          }
      }
    `)

    const [open, setOpen] = useState(false);

    return (
        <header className={headerStyles.container}>
            <Logos/>
            {open ? 
              <Nav open={open} setOpen={setOpen}/>
             : 
             <Navtoggle open={open} setOpen={setOpen} />}
            
            
        </header>
    )
}

export default Header;