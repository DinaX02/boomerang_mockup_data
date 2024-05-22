import articlesJSON from '../data/artigos.json';
import usersJSON from '../data/users.json';
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import Article from "../components/Article";
import noResultsIcon from "../assets/icons/noResultsIcon.svg";
import SearchIcon from "@mui/icons-material/Search";
import FilterButtons from "../components/FilterButtons";
import ordenarIcon from "../assets/icons/ordenar.svg";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {CircularProgress, MenuList} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import galeriaIcon from "../assets/icons/galeria.svg";
import mosaicoIcon from "../assets/icons/mosaico.svg";
import ProfileLink from "../components/ProfileLink";

const Results = () => {
    const navigate = useNavigate();
    const [queryParams,setQueryParams] = useSearchParams();
    const [singleColumnGrid, setSingleColumnGrid] = useState(false);
    const [articles, setArticles] = useState(articlesJSON);
    const type = queryParams.get('type') || '';
    const sortingCriteria = queryParams.get('sorting') || 'mostRecent';
    const [users, setUsers] = useState(usersJSON);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentParams, setCurrentParams] = useState(queryParams);
    const [searchInput, setSearchInput] = useState( queryParams.get('query') || '');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeFilters, setActiveFilters] = useState({});
    const [viewOption, setViewOption] = useState('mosaico'); // Estado para armazenar a opção selecionada

    useEffect(() => {
        setIsLoading(true);
        // Filter articles based on search query and parameters
        const query = queryParams.get('query') || '';
        const size = queryParams.get('size') || null;
        const category = queryParams.get('category') || null;
        const color = queryParams.get('color') || null;
        const brand = queryParams.get('brand') || null;

        if (type === 'articles'){

            setActiveFilters({
                size: size,
                color: color,
                category: category,
                brand: brand,
            })

            const filtered = articles.filter(article =>
                article.title.toLowerCase().includes(query.toLowerCase()) &&
                (size ? article.size.toLowerCase() === size.toLowerCase() : true) &&
                (category ? article.category.toLowerCase() === category.toLowerCase() : true) &&
                (color ? article.color.toLowerCase() === color.toLowerCase() : true) &&
                (brand ? article.brand.toLowerCase() === brand.toLowerCase() : true)
            );
            if (sortingCriteria === 'lowToHigh') {
                filtered.sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
            } else if (sortingCriteria === 'highToLow') {
                filtered.sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
            } else if (sortingCriteria === 'mostRecent') {
                filtered.sort((a, b) => a.id - b.id);
            } else if (sortingCriteria === 'oldest') {
                filtered.sort((a, b) => b.id - a.id);
            }

            setFilteredArticles(filtered);

        } else if (type === 'members'){
            const filteredUsers = users.filter(user =>
                user.username.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(filteredUsers);
        }
        setIsLoading(false);
    }, [queryParams]);


    const addFilters = (filterObj) => {
        const newParams = new URLSearchParams(currentParams);

        // loop through the object and add filters that are not null
        for (const [filterType, value] of Object.entries(filterObj)) {
            if (value !== null) {
                newParams.set(filterType, value);
            } else {
                newParams.delete(filterType);
            }
        }

        setCurrentParams(newParams);
        navigate(`?${newParams.toString()}`);
    };

    const deleteFilter = (key) => {
        activeFilters[key] = null;
        addFilters(activeFilters);
        console.log('delete')
    };

    const handleSort = (criteria) => {
        const newParams = new URLSearchParams(currentParams);
        newParams.set('sorting', criteria);
        setCurrentParams(newParams);
        navigate(`?${newParams.toString()}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const newParams = new URLSearchParams(currentParams);
        newParams.set('query', searchInput);
        setCurrentParams(newParams);
        navigate(`?${newParams.toString()}`);
    };

    const handleClick = (event) => {
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

    const handleViewOption = () => {
        // setViewOption(option);
        // handleClose();
        if(viewOption==='mosaico'){
            setSingleColumnGrid(true);
            setViewOption('galeria');
        }
        else{
            setSingleColumnGrid(false);
            setViewOption('mosaico');
        }
    };

    const getViewIcon = () => {
        switch (viewOption) {
            // case 'lista':
            //     return listaIcon;
            case 'galeria':
                return galeriaIcon;
            case 'mosaico':
                return mosaicoIcon;
            default:
                return mosaicoIcon;
        }
    };

    const handleTabClick = (typeOf) => {
        switch (typeOf) {
            case 'articles':
                localStorage.setItem('activeTab', '1');
                navigate(`/search-page`);
                break;
            case 'members':
                localStorage.setItem('activeTab', '2');
                navigate(`/search-page`);
                break;
            default:
                return;
        }
    };

    return (
        <ResultsStyle>
            <div className={'resultsHeader'}>
                <div className="tab-buttons">
                        <button
                            onClick={() => handleTabClick('articles')}
                            className={type === 'articles' ? 'active' : ''}
                        >
                            Artigos
                        </button>
                    <button
                        onClick={() => handleTabClick('members')}
                        className={type === 'members' ? 'active' : ''}
                    >
                        Membros
                    </button>
                </div>
                <div className={'headerPadding'}>
                    <div className={'search'}>
                        <form className={'searchInput'}  style={{ maxWidth: type === 'members' ? 'none' : null }} onSubmit={handleSearch}>
                            <SearchIcon />
                            <input
                                placeholder={type === 'articles' ? 'Procura artigos' : 'Procura membros'}
                                maxLength='64'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </form>
                        { type === 'articles' && <FilterButtons applyFilters={addFilters}/>}
                    </div>
                    {type === 'articles' ? (
                        <div className={'sectionTitle'}>
                            <div className='resultadosTitle'>Resultados</div>
                            <div>
                                <img
                                    src={ordenarIcon}
                                    alt="ordenar icon"
                                    id="article-menu-button"
                                    aria-controls={anchorEl ? 'article-menu' : undefined}
                                    // aria-haspopup="true"
                                    onClick={handleClick}
                                    style={{ cursor: 'pointer', height: '18px', display: 'flex', marginRight: '20px' }}
                                ></img>

                                <Popper
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                    style={{ width: '180px' }}
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
                                                        <MenuItem className={sortingCriteria === 'mostRecent' ? 'selected' : ''} onClick={() => handleSort('mostRecent')}>Mais recente</MenuItem>
                                                        <MenuItem className={sortingCriteria === 'oldest' ? 'selected' : ''} onClick={() => handleSort('oldest')}>Mais antigo</MenuItem>
                                                        <MenuItem className={sortingCriteria === 'lowToHigh' ? 'selected' : ''} onClick={() => handleSort('lowToHigh')}>Preço: baixo para alto</MenuItem>
                                                        <MenuItem className={sortingCriteria === 'highToLow' ? 'selected' : ''} onClick={() => handleSort('highToLow')}>Preço: alto para baixo</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                            <div>
                                <img
                                    src={getViewIcon()}
                                    alt="view icon"
                                    id="view-menu-button"
                                    // aria-controls={anchorElView ? 'view-menu' : undefined}
                                    // aria-haspopup="true"
                                    onClick={handleViewOption}
                                    style={{ cursor: 'pointer', width: '18px', display: 'flex' }}
                                />
                            </div>
                        </div>) : (<div className={'sectionTitle'}>
                        <div className='resultadosTitle'>Resultados</div>
                    </div>)}
                    <Stack style={{paddingTop: '10px'}} direction="row" spacing={1}>
                        {Object.keys(activeFilters).map(key => {
                            if (activeFilters[key] !== null) {
                                return (
                                    <Chip
                                        key={key}
                                        label={activeFilters[key]}
                                        onDelete={() => deleteFilter(key)}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Stack>
                </div>

            </div>

            {isLoading && <CircularProgress className={'loader'} color="success" />}

            {!isLoading && type === 'articles' && <div className={'resultsContent'}>
                {filteredArticles.length !== 0 ? (
                    <div className={'resultsArticles'} style={{ flexDirection: singleColumnGrid ? 'column' : 'row' }}>
                        {filteredArticles.map((artigo) => {
                            return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} scale={1.25} width={singleColumnGrid ? '100%' : '120px'} />;
                        })}
                    </div>
                ) : (
                    <div className='zeroResults'>
                        <img src={noResultsIcon} alt="search icon for no results" />
                        <p>Nenhum resultado encontrado</p>
                    </div>
                )}

            </div>}

            {!isLoading && type === 'members' && <div className={'resultsContent'}>
                {filteredUsers.length !== 0 ? (
                    <div className={'resultsUsers'} style={{ flexDirection: singleColumnGrid ? 'column' : 'row' }}>
                        {filteredUsers.map((user) => {
                            return <div key={user.id} className={'userRow'}>
                                <ProfileLink image={user.avatar} key={user.id} zoom={0.7} />
                                <div>{user.username}</div>
                                {/*<div style={{marginLeft: 'auto',opacity: 0.6, display: 'flex', alignItems: 'center'}}>{user.rating} <StarIcon/></div>*/}
                            </div>
                        })}
                    </div>
                ) : (
                    <div className='zeroResults'>
                        <img src={noResultsIcon} alt="search icon for no results" />
                        <p>Nenhum resultado encontrado</p>
                    </div>
                )}

            </div>}


            <MenuMobile />
        </ResultsStyle>
    );
};

const ResultsStyle = styled.div`

  .loader{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width: 40px;
    height: 40px;
  }
  
  .resultsContent{
    padding-bottom: 115px;
    margin: 0 25px;
    text-align: center;
    .resultsArticles {
      /* gap: 20px 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
      justify-items: center; */
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 25px 25px;
      flex-direction: row;
      .description {
        text-align: left;
      }
    }
    .resultsUsers{
      font-size: 14px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .userRow{
        gap: 15px;
        padding: 10px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
        width: 100%;
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
      }
    }
  }



  .resultsHeader{
    z-index: 10;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
    
    .headerPadding{
      padding: 25px 25px 25px;
    }

    .tab-buttons {
      padding-top: 25px;
      position: sticky;
      top: 0;
      background-color: #F8F8F8;
      z-index: 1;
      display: flex;
      gap: 10px;
      border-bottom: 3px solid rgb(0,0,0,0.05);
      button {
        &:first-child{
          margin: 0 0 -3px 35px;
        }
        margin: 0 35px -3px 0;
        padding-bottom: 10px;
        background-color: transparent;
        font-weight: 600;
        border: none;
        flex: 1;
        color: rgb(0, 0, 0, 0.4);
        border-bottom: 3px solid rgb(0,0,0,0);
        &.active {
          color: black;
          border-color: #00c17c;
        }
        :not(.active):hover {
          color: rgb(0, 0, 0, 0.7);
        }
      }
    }

    .search{
      width: 100%;
      display: flex;
      gap: 10px;
    }

    .sectionTitle {
      margin-top: 25px;
      display: flex;
      justify-content: right;
      font-size: 14px;
      font-weight: 800;
      .resultadosTitle {
        flex-grow: 10;
        text-align: left;
      }
      .ordenar{
        font-weight: 600;
      }
      .selected{
        font-weight: 800;
      }
      li:not(.selected){
        opacity: 0.7;
      }
    }

    .searchInput{
      max-width: calc(100% - 60px);
      height: 50px;
      border: 1px solid rgb(0,0,0,0.1);
      padding: 8px;
      background-color: white;
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 8px;

      input{
        max-width: calc(100% - 40px);
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

  }

  .zeroResults{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    P{
      width: max-content;
      margin-top: 1em;
      font-weight: 500;
    }
  }

`;

export default Results;