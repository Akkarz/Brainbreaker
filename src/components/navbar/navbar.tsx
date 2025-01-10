import stl from "./navbar.module.css"
import Image from "next/image"
import logo from "@/image/logo.png"
import Link from "next/link"
import Search_logo from "@/image/search-logo.png"

export const NavBar = () => {
    return(
        <div>
            <Image className={stl.logo} src={logo} width={150} height={40} alt="logo"/>
            <Link href="/" className={stl.home_butt}>Домой</Link>
            <Link href="#" className={stl.page_butt}>Страница</Link>
            <Link href="#" className={stl.about_butt}>О нас</Link>
            <button className={stl.login_butt}>Войти</button>
            <div className={stl.search_box}>
                <input type="text" placeholder="Введите свой поисковой запрос..." />
                <label htmlFor="" className={stl.search_icon}>
                    <Image className={stl.search_logo} src={Search_logo} width={15} height={15} alt=""/>
                </label>
            </div>
        </div>
    )
}

