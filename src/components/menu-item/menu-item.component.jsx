import React from 'react';
import {withRouter} from 'react-router-dom'

import {MenuItemContainer, MenuSubTitle, MenuTitle, MenuContent, MenuBackgroundImage} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <MenuBackgroundImage imageUrl={imageUrl} 
     />
        <MenuContent>
            <MenuTitle>{title.toUpperCase()}</MenuTitle>
            <MenuSubTitle>SHOP NOW</MenuSubTitle>                    
        </MenuContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);