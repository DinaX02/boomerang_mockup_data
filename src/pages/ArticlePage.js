import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ProfileLink from "../components/ProfileLink";
import { useNavigate } from "react-router-dom";
import arrowBack from "../assets/icons/back_arrow.svg";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import Button from '../components/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import artigosJSON from '../data/artigos.json'
import mockupprofile from '../assets/perfil/user_mockup_image.jpg'
import InfoIconTaxa from "../assets/icons/infoIcon.svg"
import Modal from "../components/Modal"
import Vermelho from "../assets/cores/vermelho.svg";
import Azul from "../assets/cores/azul.svg";
import Amarelo from "../assets/cores/amarelo.svg";
import Rosa from "../assets/cores/rosa.svg";
import Verde from "../assets/cores/verde.svg";
import Roxo from "../assets/cores/roxo.svg";
import Preto from "../assets/cores/preto.svg";
import Multicolor from "../assets/cores/multicolor.svg";
import Laranja from "../assets/cores/laranja.svg";
import Branco from "../assets/cores/branco.svg";
import ImgMesuresModal from "../assets/icons/overlay_dress_mesures.svg";
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import { MenuList } from "@mui/material";
import denunciarIcon from "../assets/icons/denunciar.svg";
// import notificarIcon from "../assets/icons/notificar-me.svg";

const ArticlePage = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [fecharModal, setFecharModal] = useState(true);
  const message1 = "<span>Esta taxa de proteção (<strong>2€ + 5% do valor total do aluguer</strong>) é <strong>obrigatória</strong> e permite que <strong>todos os danos até 25€</strong> causados à peça durante o período de aluguer sejam <strong>cobertos pela Boomerang</strong>.</span>"
  const [modalMessage, setModalMessage] = useState(message1);

  const messages = [
    (<span>O <strong>valor estimado</strong> traduz a avaliação pessoal que o utilizador atribui à sua peça.</span>),

    (<span>Esta taxa de proteção (<strong>2€ + 5% do valor total do aluguer</strong>) é <strong>obrigatória</strong> e permite que <strong>todos os danos até 25€</strong> causados à peça durante o período de aluguer sejam <strong>cobertos pela Boomerang</strong>.</span>),

    (<span><strong>Muito Bom</strong><br></br> Uma peça pouco usada que pode ter ligeiras
      imperfeições, mas que está em bom estado. Inclui fotografias e
      descrições de quaisquer defeitos no teu anúncio.
      <br></br>
      <br></br>
      <strong>Bom</strong><br></br> Uma peça usada que pode apresentar imperfeições
      e sinais de desgaste. Inclui fotografias e descrições de quaisquer
      defeitos no teu anúncio.
      <br></br>
      <br></br>
      <strong>Satisfatório</strong> <br></br>Uma peça usada com frequência, com
      imperfeições e sinais de desgaste. Inclui fotografias e descrições
      de quaisquer defeitos no teu anúncio.</span>),

    (<img src={ImgMesuresModal} alt='Imagem exemplo de medidas' />)
  ]

  const colorImages = {
    Vermelho,
    Azul,
    Amarelo,
    Rosa,
    Verde,
    Roxo,
    Preto,
    Multicolor,
    Laranja,
    Branco,
  };



  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      handleClose();
    } else if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    artigosJSON.forEach(artigo => {
      if (artigo.id === parseInt(id)) {
        setItem(artigo);
        // setTimeout(() => { console.log('Image Path:', colorImages[item.color]) }, 1000)
      }
    });
  }, [item, id])

  const handleIconClick = (index) => {
    setFecharModal(false);
    setModalMessage(messages[index])
  };

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
  }, []);

  return (
    <ArticlePageStyle>
      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message={modalMessage}
      />
      <div className={'headerBoomerang'}>
        <div onClick={() => { navigate(-1) }} className={'back'}>
          <button style={{ background: "transparent", border: 'none' }} >
            <img data-testid="svg-icon" src={arrowBack} style={{ cursor: "pointer" }} alt="seta para voltar à página anterior" /></button>
          <h3>Voltar</h3>
        </div>
        <div className={'icons'}>
          <IconButton
            id="article-menu-button"
            aria-controls={anchorEl ? 'article-menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            aria-label="Botão Definições do Artigo"
          >
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
          {/* <Menu
            className={'articleDropdown'}
            id="article-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem style={{ fontSize: 14 }} onClick={handleClose}>Denunciar</MenuItem>
          </Menu> */}
          <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            style={{ width: '140px' }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={Boolean(anchorEl)}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      {/* <MenuItem onClick={handleClose}><img src={notificarIcon} alt="ícone de notificar-me" style={{margin: "0 10px 0 0", padding: 0}}/>Notificar-me</MenuItem>
                      <hr style={{margin: "5px 0", color: "#CACACA"}}/> */}
                      <MenuItem onClick={handleClose}><img src={denunciarIcon} alt="ícone de denunciar" style={{ margin: "0 10px 0 0", padding: 0 }} />Denunciar</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      {item.images && item.images.length > 0 &&
        <div className={'carousel'}>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            {item.images.map((image, index) => (<div key={index} style={{ position: 'relative', zIndex: '-1', height: '40vh' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `url(${image})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  filter: 'blur(15px)',
                }}
              ></div>
              <img
                style={{
                  objectFit: 'contain',
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  zIndex: '1',
                }}
                src={image}
                alt={`imagem do artigo ${index}`}
              />
            </div>
            ))}
          </Carousel>
        </div>
      }

      <div className={'articleHeader'}>
        <div className={'user'}>
          <ProfileLink zoom={1.1} image={mockupprofile} />
          <div>
            <div>mariacarmo</div>
            <div className={'stars'}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarOutlineIcon />
            </div>
          </div>
        </div>
        <div className={'articleButtons'}>
          <Button text="Alugar" onClick={() => navigate(`/rentdate-page/${item.id}`)}></Button>
          <Button text="Chat" onClick={() => navigate(`/chat`)}></Button>
        </div>
      </div>
      <div className={'articleSection'}>
        <p className={'title'}>Título da Peça</p>
        <p>{item.title}</p>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Valor Estimado do Artigo
          <button
            onClick={() => { handleIconClick(0) }}
            className='buttonInfo'>
            <img
              style={{ marginLeft: "0.5em", marginBottom: "5px" }}
              src={InfoIconTaxa} alt='icone de informação' />
          </button>
        </div>
        <div style={{ marginBottom: "24px" }}>60€</div>
        <div className={'title'}>Preço do Aluguer por dia</div>
        <div style={{ marginTop: "10px" }}>{item.dailyRentalPrice}€ / dia</div>
        <button className={'title buttonInfo'} style={{ fontWeight: "500", textDecoration: "underline" }} onClick={() => { handleIconClick(1) }}>Taxa de Proteção Obrigatória <img style={{ marginLeft: "0.5em", marginBottom: "5px" }} src={InfoIconTaxa} alt='icone de informação' /></button>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Descrição</div>
        <div>{item.description}</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Tamanho</div>
        <div>{item.size}</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Cor</div>
        <div className={'articleColor'}><img src={colorImages[item.color]} alt='cor da imagem' />{item.color}</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Categoria</div>
        <div>Vestido</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Marca</div>
        <div>{item.brand}</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Estado <button onClick={() => { handleIconClick(2) }} className='buttonInfo'><img style={{ marginLeft: "0.5em", marginBottom: "5px" }} src={InfoIconTaxa} alt='icone de informação' /></button></div>
        <div>{item.condition}</div>
      </div>
      <div className={'articleSection'}>
        <div className={'title'}>Medidas da Peça <button onClick={() => { handleIconClick(3) }} className='buttonInfo'><img style={{ marginLeft: "0.5em", marginBottom: "5px" }} src={InfoIconTaxa} alt='icone de informação' /></button></div>
        {item.measurements && Object.entries(item.measurements).map(([propertyName, propertyValue]) => (
          <div key={propertyName}>
            {propertyName}: {propertyValue}
          </div>
        ))}

      </div>

    </ArticlePageStyle>
  )
}

const ArticlePageStyle = styled.div`
  
  
  .headerBoomerang{
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back{
      display: flex;
      align-items: center;
      img{
        margin-left: 0;
      }
    }
    .icons{
      button{
        padding: 0;
      }
      svg{
        font-size: 30px;
      }
      display: flex;
      gap: 20px;
    }
  }
    
    .carousel{
      height: 40vh;
      object-fit: cover;
      width: 100%;
      margin-top: 60px;
    }
  
  .articleHeader{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 24px 0;
    margin: 0 24px;
    .user{
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      gap: 20px;
      .stars svg{
        font-size: 15px;
      }
    }
    .articleButtons{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      flex: 1;
      text-align: center;
      button{
        border: 1px solid rgb(0,0,0,0.1);
        background-color: white !important;
        color: #2e2e2e;
        &:first-child{
          background-color: #00C17C !important;
          color: white;
        }
      }
    }
  }
  
  .articleSection{
    font-weight: 500;
    font-size: 14px;
    padding: 24px 0;
    margin: 0 24px;
    border-top: 1px solid rgb(0,0,0,0.1);
    .buttonInfo{
      border: none;
      background: none;
      padding: 0;
    }
    .title{
      font-weight: 700;
      font-size: 13px;
    }
    .articleColor{
      display: flex;
      align-items: center;
      gap: 10px;
      div{
      }
    }
  }
  

`

export default ArticlePage