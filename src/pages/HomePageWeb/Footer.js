import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import LogoBoomerang from "../../assets/homepageweb/logo-typo.svg";
import LogoInsta from "../../assets/homepageweb/logo-insta.svg";
import LogoTiktok from "../../assets/homepageweb/logo-tiktok.svg";

const FooterStyle = styled.footer`
    padding: 50px 100px;
    font-size: 16px;
    font-weight: 500;

    .logoFooter {
        max-width: 200px;
        @media (max-width: 880px) {
            width: 150px;
            margin-bottom: 30px;
        }
    }
    .containerFlex {
        display: flex;
        align-items: start;
        justify-content: space-between;
        /* gap: 300px; */
        @media (max-width: 880px) {
            flex-direction: column;
            align-items: center;
        }
        p {
            margin-bottom: 3px;
            @media (max-width: 880px) {
                text-align: center;
            }
            a{
                text-decoration: none;
                color: black;
            }
        }
    }
    .redes {
        display: flex;
        justify-content: center;
        gap: 20px;
        font-weight: 600;

        img {
            width: 30px;
        }
    }
    @media (max-width: 1024px) {
        padding: 50px; 
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='containerFlex'>
                <img className="logoFooter" src={LogoBoomerang} alt="icon Boomerang" />
                <p><Link>Sobre nós</Link></p>
                <div>
                    <p><Link>Termos e Condições</Link></p>
                    <p><Link>Política de Privacidade</Link></p>
                    <p><Link>Política de Cookies</Link></p>
                </div>
                <form>
                    <p><Link>Contactar Suporte</Link></p>
                </form>
            </div>
            <hr />
            <p className='redes'>Segue-nos nas redes sociais</p>
            <div className='redes'>
                <Link to="https://www.instagram.com/app_boomerang?igsh=MW0ybGpzb2J0Nmtpdw==" target="_blank"><img src={LogoInsta} alt="ícone logo de instagram" /></Link>
                <Link to="" target="_blank"><img src={LogoTiktok} alt="ícone logo de tiktok" /></Link>
            </div>

        </FooterStyle>
    )
}

export default Footer
