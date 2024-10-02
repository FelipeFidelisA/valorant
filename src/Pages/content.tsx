import React from 'react'
import './../styles/content_style.css'

const Content: React.FC = () => {
    return (
        <div className='content'>
            <div className='container'>
                <header>
                    <div>
                        <img src="/riot-games.svg" width={52} height={26} alt="Riot Games Logo" />

                        <span />

                        <img src="/valorant.svg" width={32} height={26} alt="Valorant Logo" />
                        <nav className='nav'>
                            <a href="#">GAME</a>
                            <a href="#">CHAMPIONS</a>
                            <a href="#">NEWS</a>
                            <a href="#">PATCH NOTES</a>
                            <a href="#">SHOP</a>
                            <a href="#">SUPPORT</a>
                        </nav>
                        <div className='header_user'>
                            <img src="/user-icon.png" width={42} height={42} alt="User Icon" />
                        </div>
                    </div>
                </header>
            </div>
            
            <div className='personagens'>
                <h1>AGENTES</h1>
                Lista de personagens
            </div>
        </div>
    )
}

export default Content