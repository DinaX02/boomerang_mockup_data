import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import styled from "styled-components";
import mockupprofile from '../assets/icons/user_unknown.svg';
import Article from '../components/Article';
import artigosJSON from '../data/artigos.json';
import starIcon from '../assets/icons/start.svg';
import usersJSON from '../data/users.json';
import { useParams } from 'react-router-dom';

const ProfileOthersViewPage = () => {
    const starIconsArray = new Array(5).fill(null); // Array com 5 elementos nulos
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        usersJSON.forEach(user => {
            if (user.id === parseInt(id)) {
                setItem(user);
            }
        });
    }, [item, id])
    return (
        <ProfileOthersViewStyle>
            {item.name ? <Header name={`Perfil de ${item.name ? item.name.split(' ')[0] : ''}`} share={true} /> : <Header name={`Perfil`} share={true} />}
            <div className='headerProfile'></div>
            {item.avatar ? <img src={item.avatar} alt={`Imagem de perfil de ${item.name}`} className='profileLink' />: <img src={mockupprofile} alt={`Imagem de perfil de ${item.name}`} className='profileLink' />}
            <div className='infoPerfil'>
                <div>
                    {item.name ? <h6 style={{ fontSize: "14px", fontWeight: 700, display: "inline-block", color: "black" }}>{item.name}</h6> : <h6 style={{ fontSize: "14px", fontWeight: 700, display: "inline-block", color: "black" }}>Utilizador da Boomerang</h6>}
                    <div style={{ display: "inline-block", position: "absolute", right: "0", marginRight: "24px" }} >
                        {starIconsArray.map((_, index) => (
                            <img key={index} src={starIcon} alt="Star Icon" />
                        ))}
                    </div>
                </div>
                {item.username ? <p className='info'>{item.username}</p> : <p className='info'>-</p>}
                <hr className='divisor' />
                <p className='titulo'>Biografia</p>
                {item.biografia ? <p className='info'>{item.biografia}</p> : <p className='info'>-</p>}
                <hr className='divisor' />
                <p className='titulo'>Membro da Boomerang desde</p>
                <p className='info' style={{ marginBottom: 0 }}>24/03/2024</p>
            </div>
            <div className='armarioSection'>
                {item.name ? <h5 className='armarioTitle'>Armário de {item.name ? item.name.split(' ')[0] : ''}</h5> : <h5 className='armarioTitle'>Armário</h5>}
                <div className='articles'>
                    {artigosJSON.slice(6, 11).map((artigo) => {
                        // console.log(artigo.id);
                        return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} title={artigo.title} width={"160px"} />
                    })}
                </div>
            </div>
        </ProfileOthersViewStyle>
    )
}

const ProfileOthersViewStyle = styled.div`
    .headerProfile {
        background-color: #343541;
        height: 12vh;
    }
    .profileLink {
        position: absolute;
        transform: translateY(-50%);
        margin-left: 24px;
        height: 78px;
        width: 78px;
        border-radius: 100%;
        border: 1px #343541 solid;
        /* background-image: url(${mockupprofile});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom center; */
        z-index: 10;
    }
    .infoPerfil {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
        border-radius: 5px;
        background-color: white;
        padding: 24px;
        margin: 48px 24px 24px 24px;
    }
    .divisor {
        color: #cacaca; 
        margin: 0 0 12px 0;
    }
    .info {
        font-size: 13px;
        margin: 0 0 12px 0;
        color: black;
    }
    .titulo{
        font-size: 13px;
        font-weight: 600;
    }
    .armarioTitle {
        font-size: 14px;
        font-weight: 800;
        margin-bottom: 24px;
        color: black;
    }
    .armarioSection {
        padding: 0 24px;
    }
    .articles{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 25px 25px;
        flex-direction: row;
  }
`

export default ProfileOthersViewPage
