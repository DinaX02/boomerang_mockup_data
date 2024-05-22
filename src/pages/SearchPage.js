import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TabsComponent from '../components/TabsComponent';
import Chip from '../components/chip';
import SearchIcon from '@mui/icons-material/Search';
import MenuMobile from "../components/MenuMobile";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SearchPage = () => {
    const navigate = useNavigate(); // Use useNavigate hook
    const [searchInput, setSearchInput] = useState('');

    const categories = [
        'Calças', 'Casacos', 'Sapatos', 'Acessórios', 'Saias', 'Bonés', 'Camisas',
        'Vestidos',
    ];

    const brands = [
        'Nike', 'Gucci', 'H&M', 'Tommy Hilfiger', 'Calvin Klein', 'Versace',
        'Ralph Lauren', 'Chanel', 'Vans', 'Balenciaga', 'Louis Vuitton', 'Converse',
    ];

    const inputRefs = useRef({
        category: null,
        brand: null,
    });

    const resetInputs = (tabIndex) => {
        if (tabIndex === 1) {
            inputRefs.current.article.value = '';
        } else if (tabIndex === 2) {
            inputRefs.current.member.value = '';
        }
    };

    const handleSearch = (e, tabIndex) => {
        e.preventDefault();
        const searchUrl = tabIndex === 1 ?
            `/results?type=articles&query=${encodeURIComponent(searchInput)}` :
            `/results?type=members&query=${encodeURIComponent(searchInput)}`;
        navigate(searchUrl);
    };


    return (
        <div>
            <SearchStyle>
                <TabsComponent
                    title1={'Artigos'}
                    firstComponent={
                        <div>
                            <form className={'searchInput'} onSubmit={(e) => handleSearch(e, 1)}>
                                <SearchIcon />
                                <input
                                    placeholder="Procura artigos"
                                    maxLength='64'
                                    ref={(ref) => (inputRefs.current.article = ref)}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                            </form>
                            <div className={'sectionTitle'}>Categorias Populares</div>
                            <div className={'chips'}>
                                {categories.map((category, index) => (
                                    <Chip key={index} category={category} />
                                ))}
                            </div>
                            <div className={'sectionTitle'}>Marcas Populares</div>
                            <div className={'chips'}>
                                {brands.map((brand, index) => (
                                    <Chip key={index} brand={brand} />
                                ))}
                            </div>
                        </div>
                    }
                    title2={'Membros'}
                    secondComponent={
                        <form className={'searchInput'} onSubmit={(e) => handleSearch(e, 2)}>
                            <SearchIcon />
                            <input
                                placeholder="Procura membros"
                                maxLength='64'
                                ref={(ref) => (inputRefs.current.member = ref)}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </form>
                    }
                    onTabChange={resetInputs}
                />
            </SearchStyle>
            <MenuMobile />
        </div>
    );
};

const SearchStyle = styled.div`
  .sectionTitle {
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 800;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .searchInput{
    height: 50px;
    /* border: 1px solid rgb(0,0,0,0.1); */
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 8px;
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    
    input{
      max-width: calc(100% - 20px);
      font-size: 14px;
      font-weight: 500;
      flex: 1;
      padding: 8px;
      border: none;
      &:focus{
        outline: none;
      }
      &:placeholder-shown{
        text-overflow: ellipsis;
      }
    }
    svg{
      margin: 5px;
      color: #00C17C;
      font-size: 30px;
    }
    
  }
`



export default SearchPage;
