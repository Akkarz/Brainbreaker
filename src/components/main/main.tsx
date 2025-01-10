import stl from "@/components/main/main.module.css"
import "./main.module.css"
import Image from "next/image"
import Section from "@/image/background_one.png"
import Vector from "@/image/Vector.png"

export const Main = () => {
    return(
        <div>
            <div>
                <Image className={stl.background_main} src={Section} width={1910} height={550} alt=""/>
                <p className={stl.description_main}>Хотелось ли тебе когда-нибудь проверить свои</p>
                <Image className={stl.vector} src={Vector} width={275} height={70} alt=""/>
                <p className={stl.word}>знания?</p>
                <button className={stl.start_button_main}>Начать сейчас	→</button>
            </div>
            <div>
                <p className={stl.description_two}>Все наши сервисы предоставляются абсолютно бесплатно и будут доступны вам после регистрации</p>
                <p className={stl.choose_text}>Или</p>
                <button className={stl.registration_button}>Зарегистрироваться</button>
                <button className={stl.login_button}>Войти</button>
            </div>
            <div className={stl.statistics}>
                <p className={stl.tests}>Тестов</p>
                    <p className={stl.tests_num}>0</p>
                <p className={stl.polls}>Опросов</p>
                    <p className={stl.polls_num}>0</p>
                <p className={stl.crosswords}>Кросвордов</p>
                    <p className={stl.crosswords_num}>0</p>
                <p className={stl.users}>Пользователей</p>
                    <p className={stl.users_num}>0</p>
            </div>
            <div className={stl.role_choose}>
                <p className={stl.roles_description}>Возможности нашего сайта</p>
                <div className={stl.creator}>
                    <p className={stl.creator_name}>Разработчик тестов</p>
                    <p className={stl.creator_description}>Наш сайт не имеет ограничений для вашей фантазии. Только вы в праве решить, что именно вы хотите создать!</p>
                    <button className={stl.creator_start}>Начать!</button>
                </div>
                <div className={stl.user}>
                    <p className={stl.user_name}>Пользователь</p>
                    <p className={stl.user_description}>Не обязательно что-то создавать на нашем сайте, вы всегда можете проходить тесты других пользователей или посмотреть уже созданные нами тесты</p>
                    <button className={stl.user_start}>Начать!</button>
                </div>
            </div>
        </div>
    )
}