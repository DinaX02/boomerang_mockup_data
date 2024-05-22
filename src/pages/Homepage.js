import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Article from "../components/Article";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import ProfileLink from "../components/ProfileLink";
import Chip from '../components/chip';
import LoginRegistar from '../components/LoginRegistar';
import artigosJSON from '../data/artigos.json';
// import person1 from '../assets/homepage_people/person1.jpg'
// import person2 from '../assets/homepage_people/person2.jpg'
// import person3 from '../assets/homepage_people/person3.jpg'
// import person4 from '../assets/homepage_people/person4.jpg'
// import person5 from '../assets/homepage_people/person5.jpg'
import mockupprofile from '../assets/icons/user_unknown.svg'
import usersJSON from '../data/users.json';

const Homepage = () => {
  const navigate = useNavigate();
  // const [showLoginRegistar, setShowLoginRegistar] = useState(true);

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
    if (window.innerWidth < 600) {

      if (localStorage.getItem("redirect")) {//entrado antes
        return;
      } else {
        localStorage.setItem("redirect", true);
        // setShowLoginRegistar(false);
        return navigate("/onBoarding");
      }
    }
  });

  return (
    <div>
      <HomepageStyle>
        {/*<NavbarWeb/>
        <p>Bem Vindos ao Boomerang</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>*/}
        <div className={'top'}>
          <div>
            <h1 style={{ fontSize: "12px", fontWeight: "600", marginBottom: "5px" }}>Bem-Vindo</h1>
            <h2 style={{ fontSize: "20px", fontWeight: "800" }}>O teu guarda-roupa ilimitado começa aqui</h2>
          </div>
          {/* <ProfileLink className={'profileLink'} image={mockupprofile}/> */}
          <Link to={"/profile-page"} aria-label="Link para visitares o teu perfil"><div className={'profileLink'} ></div></Link>
        </div>
        <div>
          <h3 className={'sectionTitle'}><span>Categorias Populares</span></h3>
          <div className={'articles'}>
            <Chip category={'Homem'} />
            <Chip category={'Mulher'} />
            <Chip category={'Gala'} />
            <Chip category={'Cerimónia'} />
          </div>
        </div>
        <div>
          <h3 className={'sectionTitle'}><span>Promotores Populares</span></h3>
          <div className={'articles'}>
            {usersJSON
              .sort((a, b) => b.rating - a.rating) // Ordena os users pelo rating em ordem decrescente
              .slice(0, 5) // Pega os primeiros 5 users após a ordenação
              .map((user) => (
                <ProfileLink className={'profileLink'} name={user.username} image={user.avatar} id={user.id}/>
              ))}

          </div>

        </div>
        <div>
          <h3 className={'sectionTitle'}><span>Os teus favoritos</span><Link to={'/ver-tudo'} aria-label="Ver Tudo dos favoritos">Ver tudo</Link></h3>
          <div className={'articles'}>
            {artigosJSON.slice(0, 5).map((artigo) => {
              return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} title={artigo.title} />
            })}
            <Article more={true} ariaLabel={"Ver Todos os teus favoritos"} />
          </div>
        </div>
        <div>
          <div className={'sectionTitle'}><span>Novidades</span><Link to={'/ver-tudo'} aria-label="Ver Tudo das novidades">Ver tudo</Link></div>
          <div className={'articles'}>
            {artigosJSON.slice(6, 11).map((artigo) => {
              // console.log(artigo.id);
              return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} title={artigo.title} />
            })}
            <Article more={true} ariaLabel={"Ver Todas as novidades"} />
          </div>
        </div>
        <MenuMobile></MenuMobile>
        {!localStorage.getItem("login") && <LoginRegistar></LoginRegistar>}
      </HomepageStyle>
    </div>
  )
}

const HomepageStyle = styled.div`
  
  padding-bottom: 115px;
  
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  

  .top {
    padding: 25px;
    display: flex;
    justify-content: space-between;

    div:first-child {
      font-size: 20px;
      font-weight: 800;
      flex: 1;

      h1 {
        font-size: 20px;
        font-weight: 800;
        flex: 1;
      }

      div:first-child {
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }

    .profileLink {
      margin-left: 10px;
      margin-top: 10px;
      height: 50px;
      width: 50px;
      border-radius: 100%;
      border: 1px black solid;
      background-image: url(${mockupprofile});
      background-size: auto;
      background-repeat: no-repeat;
      background-position: bottom center;
    }
  }
  
  .articles{
    margin: 5px 0;
    padding: 10px 25px;
    display: flex;
    gap: 15px;
    overflow: scroll;
    *{
      flex-shrink: 0;
    }
  }


  .sectionTitle {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 800;
    a{
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      color: #008052;
    }
  }
`

export default Homepage