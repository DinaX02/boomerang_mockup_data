import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import onBoarding1 from '../assets/onBoarding/onboarding_1.svg'
import onBoarding2 from '../assets/onBoarding/onboarding_2.svg'
import onBoarding3 from '../assets/onBoarding/onboarding_3.svg'
import onBoarding4 from '../assets/onBoarding/onboarding_4.svg'
import onBoarding5 from '../assets/onBoarding/onboarding_5.svg'
import Button from '../components/Button'

const OnBoarding = () => {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.innerWidth < 600) {
        if (localStorage.getItem("downloadRedirect")) {
          return;
        }else{
          localStorage.setItem("downloadRedirect", true);
          return navigate("/download-page");
        }
      }
      });
    const array = [
        {
            icon: onBoarding1,
            titulo: "Adota um estilo responsável!",
            semiTitulo: "Aluga roupa e garante um crescimento da vida útil das tuas peças!"
        },
        {
            icon: onBoarding2,
            titulo: "Sabias que ...",
            semiTitulo: " ao reutilizar roupa em segunda mão, em vez de comprar uma nova, podes diminuir o desperdício em cerca de 50%?"
        },
        {
            icon: onBoarding3,
            titulo: "O teu armário consciente!",
            semiTitulo: "Adiciona as tuas peças favoritas e usa-as de forma mais acessível e sustentável."
        },
        {
            icon: onBoarding4,
            titulo: "Podes ganhar cupões de desconto!",
            semiTitulo: "Opta pelas opções sustentáveis e serás sempre recompensado."
        },
        {
            icon: onBoarding5,
            titulo: "Partilha com os teus amigos os teus melhores hábitos!",
            semiTitulo: "Ajuda a  fortalecer o compromisso coletivo com o consumo sustentável."
        },
    ]

    const handlers = useSwipeable({
        onSwiped: (eventData) => handleSwipe(eventData.deltaX),
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                navigate('/');
            }
        };

        // Adiciona um listener de redimensionamento
        window.addEventListener('resize', handleResize);

        // Verifica a largura do ecra quando o componente é montado
        handleResize();

        // Remove o listener de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navigate]);

    const handleSwipe = (deltaX) => {
        if (deltaX < -50 && page < array.length - 1) {
            // Swipe left
            setPage(page + 1);
        } else if (deltaX > 50 && page > 0) {
            // Swipe right
            setPage(page - 1);
        }
    };

    const handleClick = () => {
        // Navegar para uma rota específica quando o botão for clicado
        navigate('/');
    };

    const handleEllipseClick = (index) => {
        setPage(index);
      };

    return (
        <OnBoardingStyle  {...handlers}>
            <h1 className='boomerang'>Boomerang</h1>
            <img className="iconOnBoarding" src={array[page].icon} alt={`icon_${page}`} />
            <h5 className='titulo'>{array[page].titulo}</h5>
            <h5 className='semiTitulo'>{array[page].semiTitulo}</h5>
            <div style={
                page === array.length - 1   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
            }>
                <Button
                    onClick={handleClick}
                    text="Terminar">
                </Button>
            </div>
            {/* <img className="controlsOnBoarding" src={array[page].controls} alt={`controls_${page}`} /> */}
            <div className="controlsOnBoarding">
                {array.map((item, index) => (
                    <div 
                    key={index} 
                    className="ellipse"
                    // active={page === index} 
                    onClick={() => handleEllipseClick(index)}
                    style={{ backgroundColor: page === index ? '#00C17C' : '#484954' }}
                    ></div>

                ))}
            </div>
            <Link to={'/'} className='ignorar'>Ignorar</Link>
        </OnBoardingStyle >
    )
}
const OnBoardingStyle = styled.div`
    text-align: center;
    padding: 78px 24px 0;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
        margin-bottom: 0;
    }

    .boomerang {
        font-size: 36px;
        font-weight: bold;
        color: #00C17C;
    }

    .iconOnBoarding {
        margin-top: 58px;
        height: 134px;
    }

    .titulo {
        font-size: 14px;
        font-weight: 600;
        color: #00C17C;
        margin-top: 74px;
    }

    .semiTitulo {
        font-size: 12px;
        font-weight: 600;
        color: #484954;
        margin-top: 24px;
    }

    .ignorar {
        font-weight: normal;
        font-size: 13px;
        text-decoration: underline;
        color: #484954;
        display: block;
        position: absolute;
        bottom: 100px;
    }

    .btnComponent {
        position: absolute;
        bottom: 180px;
        transform: translateX(-50%);
    }

    .controlsOnBoarding {
        display: block;
        margin: auto;
        position: absolute;
        bottom: 140px;
        img {
            margin-right: 7px;
            margin-left: 7px;
        }
    }

    .ellipse {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        margin-right: 7px;
        margin-left: 7px;
        cursor: pointer;
        display: inline-block;
      }
`;

export default OnBoarding
