'use strict';

const Header = () => {
    const header = $('<header></header>');
    const img    = $('<img src="images/logo.png"/>');

    header.append(img);
    return header;
}