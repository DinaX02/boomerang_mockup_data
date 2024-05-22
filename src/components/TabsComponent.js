import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TabsComponent = (props) => {
    const storedActiveTab = localStorage.getItem('activeTab');
    const [activeTab, setActiveTab] = useState(storedActiveTab ? parseInt(storedActiveTab, 10) : 1);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab.toString());
        if (props.onTabChange){props.onTabChange(activeTab);} // Call the function when the tab changes
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <TabsStyle>
            <div className="tab-buttons">
                {[1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        aria-label={`Categoria de pesquisa por ` + props[`title${index}`]}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {props[`title${index}`]}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>{props.firstComponent}</div>
                <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>{props.secondComponent}</div>
            </div>
        </TabsStyle>
    );
};

const TabsStyle = styled.div`
  .tab-buttons {
    padding-top: 25px;
    margin-bottom: 25px;
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
  .tab-content {
    padding: 0 25px;
  }
`;

export default TabsComponent;
