import { View } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import { NavNews } from './navNews';
import { News } from './news';

export const NewsLyaout = (props) => {
  const { activePanel, setActivePanel } = props;

  const newsJson = [{ header: 'News 1', id: 'news_1' }, { header: 'News 2', id: 'news_2' }, { header: 'News 3', id: 'news_3' }];

  return (
    <>
      <View activePanel={activePanel}>
        <NavNews id="nav" obj={newsJson} setActivePanel={setActivePanel} />
        {newsJson.map((value, index) => (
          <News key={index} news={value.header} id={value.id} setActivePanel={setActivePanel} />))}
      </View>
    </>
  );
};

NewsLyaout.propTypes = {
  activePanel: PropTypes.func,
  setActivePanel: PropTypes.func,
};
