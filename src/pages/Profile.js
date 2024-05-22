import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import Modal from '../components/Modal'
// import Button from '../components/Button';
import LogoutIcon from "../assets/icons/logout.svg";
// import SettingsIcon from '../assets/icons/settings.svg';
import UserUnknownIcon from "../assets/icons/user_unknown.svg";
import EditarPerfilIcon from "../assets/icons/editar_perfil.svg";
import FavoritosIcon from "../assets/icons/coracao.svg";
import CertoIcon from "../assets/icons/certo.svg";
import ClosetIcon from "../assets/icons/closet.svg";
import FavoritosEmptyIcon from "../assets/icons/favoritos.svg";
import EncomendasIcon from "../assets/icons/encomendas.svg";
import MenuMobile from "../components/MenuMobile";
import articleMockupImage from "../assets/perfil/article_mockup_image.jpg";
import casaco1 from "../assets/perfil/casaco_preto_1.png"
import vestido1 from "../assets/perfil/vestido_preto_1.png"
import vestidoImportant from "../assets/perfil/user_mockup_image.jpg"
import casaco2 from "../assets/perfil/casaco_preto_2.png"
import casaco3 from "../assets/perfil/casaco_preto_3.png"
import vestidopreto3 from "../assets/perfil/vestido_preto_3.png"
import camisolaVerde from "../assets/perfil/camisolaverdeImg.JPG"
import coletePreto from "../assets/perfil/coleteImgEncomenda.JPG"
import casacoCastanho from "../assets/perfil/casacoCastanho.JPG"
import camisolaAzul from "../assets/perfil/camisolaMalhaAzul.JPG"

//Pagina do perfil
const Profile = () => {
    const navigate = useNavigate();
    const numArmario = 3;
    const numFav = 3;
    const numEncomendas = 5;
    const hasArmarioPecas = true;
    const hasFavoritos = true;
    const hasEncomendas = true;
    // const [fecharModal, setFecharModal] = useState(true);

  const articleSections = [
    // Array para a seção "Armário"
    [
        { image: vestidoImportant },
        { image: articleMockupImage },
        { image: vestido1},
    ],
    // Array para a seção "Favoritos"
    [
      { image: casaco1, icon: FavoritosIcon },
      { image: casaco2, icon: FavoritosIcon },
      { image: vestidopreto3, icon: FavoritosIcon },
    ],
    // Array para a seção "Encomendas"
    [
      { image: casaco3, icon: CertoIcon },
      { image: coletePreto, icon: CertoIcon },
      { image: casacoCastanho, icon: CertoIcon },
      { image: camisolaVerde, icon: CertoIcon },
      { image: camisolaAzul, icon: CertoIcon },
    ],
  ];

    const handleClickLogout = () => {
        localStorage.removeItem('login');
        navigate('/');
    }

    useEffect(() => {
      // dar reset ao scroll quando se entrar aqui :)
      window.scrollTo(0, 0);
    }, []);

  return (
    <ProfileStyle>
      <div className="containerFixo">
        <div className="perfilIconsContainer">
          <div className="editarPerfil">
            <div className="containerUserEdit">
              <Link to={"/edit-profile-page"}>
                <img
                  className="userUnknownIcon"
                  src={UserUnknownIcon}
                  alt="icon_user_unknown"
                />
                <img
                  className="editarPerfilIcon"
                  src={EditarPerfilIcon}
                  alt="icon_editar_perfil"
                />
              </Link>
            </div>
            <span className="nomeUtilizador">mariacarmo</span>
          </div>

          <div className="iconesDireita">           
            {/* <Link to={'/settings-page'}>
                            <img className="settingsIcon" src={SettingsIcon} alt="icon_settings" />
                        </Link> */}
                        <img className="logoutIcon" src={LogoutIcon} alt="icon_logout" onClick={handleClickLogout}/>
                    </div>
                </div>

               <Link to={"/convidar-amigos"}><div className='containerBtn'><button className='btnAddFriends'>Convidar amigos</button></div></Link> 

                <div className='detalhesCentraisPerfil'>
              
                    <div className='contagemContainer'>
                        <div className='contagem'>
                            <span>25</span>
                            <p>Artigos</p>
                        </div>
                        <div className='contagem'>
                            <span>4.8</span>
                            <p>Estrelas</p>
                        </div>
                    </div>
                    <hr className='divisorPerfil'></hr>
                    <div className='editarBiografia'>
                        <div className='tituloBiografiaContainer'>
                            <span className='tituloBiografia'>Biografia</span>
                        </div>
                        <p className='textoBiografia'>Sou apaixonada por moda e tenho sempre em conta opções mais sustentáveis no meu dia-a-dia.</p>
                    </div>
                </div>
                <hr className='divisorPerfil fundo'></hr>
            </div>
            <div className="sectionsContainer">
        <div className="sectionArmario">
          <div className="sectionTitulo">
            <span>Armário</span>
            {hasArmarioPecas && (
              <Link to={"/profile-page"}>Total ({numArmario})</Link>
            )}
          </div>
          {hasArmarioPecas ? (
            <div className="articles">
    {articleSections[0].map((article, index) => (
  <div className="pecaContainer" key={index} style={{ width: '113.55px', height: '144px' }}>
    <img
      src={article.image}
      alt={`article_image_${index}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '5px',
      }}
    />
  </div>
))}
            </div>
          ) : (
            <div className="emptyState">
              <img src={ClosetIcon} alt={"closetIcon"} />
              <p className="emptyStateText">
                Ainda não publicaste nenhuma peça
              </p>
            </div>
          )}
        </div>

        <div className="sectionFavoritos">
          <div className="sectionTitulo">
            <span>Favoritos</span>
            {hasFavoritos && <Link to={"/profile-page"}>Total ({numFav})</Link>}
          </div>
          {hasFavoritos ? (
            <div className="articles">
              {articleSections[1].map((article, index) => (
                <div className="pecaContainer" key={index} style={{ width: '113.55px', height: '144px' }}>
                  {article.image ? (
                                   <img src={article.image} alt="article" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                  }}/>
                  ) : (
                    <span>Imagem não disponível</span>
                  )}
                  {article.icon && (
                    <img
                      className="iconPeca"
                      src={article.icon}
                      alt={`heart_icon_${index}`}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="emptyState">
              <img src={FavoritosEmptyIcon} alt={"closetIcon"} />
              <p className="emptyStateText">
                Ainda não tens nenhuma peça nos favoritos
              </p>
            </div>
          )}
        </div>

        <div className="sectionEncomendas">
          <div className="sectionTitulo">
            <span>Encomendas</span>
            {hasEncomendas && (
              <Link to={"/profile-page"}>Total ({numEncomendas})</Link>
            )}
          </div>
          {hasEncomendas ? (
            <div className="articles">
              {articleSections[2].map((article, index) => (
                <div className="pecaContainer" key={index} style={{ width: '113.55px', height: '144px' }}>
                  {article.image ? (
                                     <img src={article.image} alt="article" style={{
                                      width: "100%",
                                      height: "144px",
                                      objectFit: "cover",
                                      borderRadius: "5px",
                                    }}/>
                  ) : (
                    <span>Imagem não disponível</span>
                  )}
                  {article.icon && (
                    <img
                      className="iconPeca"
                      src={article.icon}
                      alt={`icon_${index}`}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="emptyState">
              <img src={EncomendasIcon} alt={"closetIcon"} />
              <p className="emptyStateText">
                Ainda não fizeste nenhuma encomenda
              </p>
            </div>
          )}
        </div>
      </div>

      <MenuMobile></MenuMobile>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
.containerFixo {
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

  .containerFixo {
    position: relative;
    background-color: #f8f8f8;
    z-index: 100;
    width: 100%;
    padding: 0 24px;
  }

  .perfilIconsContainer {
    display: flex;
    justify-content: space-between;
    /* Adiciona espaço entre .editarPerfil e .iconesDireita */
    padding-top: 27px;
    margin-bottom: 18px;
  }

  .editarPerfil {
    width: max-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .containerUserEdit {
    position: relative;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
  }

  .editarPerfilIcon {
    position: absolute;
    right: 0;
  }

  .nomeUtilizador {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
  }

  .iconesDireita {
    position: relative;
    width: max-content;
    // margin-right: 24px;
  }

  .containerFixo a {
    text-decoration: none !important;
  }

  .settingsIcon {
    display: block;
    margin-bottom: 8px;
  }

  .logoutIcon {
    display: block;
    // margin-top: 8px;
  }

  .detalhesCentraisPerfil {
    background-color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    // margin: 0 24px;
    /* top | left and right | bottom */
    padding: 18px 24px 12px;
  }

  .contagemContainer {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .contagem p {
    font-size: 10px;
    font-weight: 500;
    margin: 0;
  }

  .contagem span {
    font-size: 20px;
    font-weight: 600;
  }

  hr.divisorPerfil {
    border-top: 0.5px solid #cacaca;
    border-radius: 5px;
    opacity: 1;
  }

  .detalhesCentraisPerfil .divisorPerfil {
    margin-bottom: 9px;
    margin-top: 18px;
  }

  .editarBiografia {
    font-size: 12px;
    text-align: center;
  }

  .editarBiografiaIcon {
    position: relative;
    bottom: 3px;
  }

  .tituloBiografiaContainer {
    margin-bottom: 7px;
  }

  .tituloBiografia {
    font-weight: 600;
    display: inline-block;
    margin-right: 3px;
  }

  .textoBiografia {
    margin: 0;
  }

  .biografiaInput {
    border: 0;
    text-align: center;
    width: 100%;
  }

  .divisorPerfil.fundo {
    margin: 18px 0 0;
    width: 100%;
  }

.sectionsContainer {
    padding-top: 18px;
    overflow-y: auto;
    margin: 1em 24px 100px;

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

  }

  .sectionTitulo {
    display: flex;
    justify-content: space-between;
    // padding: 0 24px;
    font-size: 13px;
    font-weight: 500;

    a {
      font-weight: 500;
      font-size: 12px;
      text-decoration: none;
      color: #00c17c;
    }
  }
  
  .btnAddFriends {
    border-radius: 20px;
    padding: 0.8em;
    border: none;
    background-color: #C6F6E5;
    font-size: 13px;

    &:active {
      background-color: #A4E9D8; }
  }

.containerBtn {
  display:flex;
  justify-content: center;
  margin-bottom: 1em;
}
  .articles {
      margin-top: 0.6em;
      margin-bottom: 0.6em;
      padding: 10px 0px;
      display: flex;
      gap: 10px;
      overflow: scroll;
      *{
        flex-shrink: 0;
    }
  }

  .articles img {
    /* width: 84px;
    // height: 100px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1); */
  }

  .pecaContainer {
    position: relative;
  }

  .articles .iconPeca {
    position: absolute;
    width: max-content;
    // height: auto;
    object-fit: none;
    border-radius: 0;
    box-shadow: none;
    right: 0;
    padding: 7px 11px 0 0;
    top: 0;
  }

  .emptyState {
    text-align: center;
    padding: 25px 24px;
  }

  .emptyStateText {
    font-size: 12px;
    margin: 10px 0 0;
  }
  @media only screen and (min-width: 375px) {
    .articles {
      justify-content: normal;
      /* gap: 5px; */
    }
  }
  @media only screen and (min-width: 768px) {
    width: 600px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .containerFixo {
      width: 672px;
    }
    .sectionsContainer {
      margin-bottom: 50px;
    }
  }

  @media only screen and (min-width: 600px) {
    .contagem p {
      font-size: 16px;
    }
    .contagem span {
      font-size: 26px;
    }

    .sectionsContainer {
      padding-top: 2em;
    }
    .editarBiografia {
      font-size: 18px;
    }
    .sectionTitulo {
      font-size: 19px;

      a {
        font-size: 18px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .articles img {
      /* width: 170px; */
    }
    .articles .iconPeca {
      width: 30px;
    }
    .nomeUtilizador {
      font-size: 21px;
    }
  }
`;

export default Profile;
