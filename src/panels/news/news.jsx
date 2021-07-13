import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';

export const News = (props) => {
  const { news, id, setActivePanel } = props;

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel('nav')} />}>
        {news}
      </PanelHeader>
      <h1>{news}</h1>
    </Panel>
  );
};

News.propTypes = {
  news: PropTypes.array,
  setActivePanel: PropTypes.func,
  id: PropTypes.string,
};
