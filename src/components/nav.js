import React from 'react'
import {Link} from 'gatsby'
import navStyles from './nav.module.scss'

const Nav = ({open,setOpen}) => {


  
        return (
        
            <nav className={navStyles.container}>
                <ul className={navStyles.list}>        
                    <li className={navStyles.listItem}><Link class={navStyles.link} activeClassName={navStyles.active}  to="/about">Find us</Link></li>
                    <li className={navStyles.listItem}><Link class={navStyles.link} activeClassName={navStyles.active}   to="/blog">Blog</Link></li>
                    <li className={navStyles.listItem}><Link class={navStyles.link} activeClassName={navStyles.active}  to="/product">Products</Link></li>
                    <li className={navStyles.listItem}><a class={navStyles.link} activeClassName={navStyles.active}   href="www.snakeswag.com">Merch</a></li>
                    <li className={navStyles.listItem}><Link class={navStyles.link} activeClassName={navStyles.active}  to="/events">Events</Link></li>
                    <li className={navStyles.listItem}><Link class={navStyles.link} activeClassName={navStyles.active}  to="/retailers">Info for Retailers</Link></li>
                    <li className={navStyles.listItem} ><Link class={navStyles.link}   to="/franchise">Lisencing and Franchising</Link></li>
                    <li><button className={navStyles.navclose} copen={open} onClick={() => setOpen(!open)}>Close</button></li>
                </ul>  
            </nav>  
        )
    

 
}



export default Nav;