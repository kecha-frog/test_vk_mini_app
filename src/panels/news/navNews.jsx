import { Icon28Game } from '@vkontakte/icons';
import {
  Group, Header, Panel, SimpleCell,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';


export const NavNews = (props) => {
  const { obj, setActivePanel, id } = props;
  return (
    <Panel id={id}>
      <Group>
        <Header mode="secondary">Nav Matches</Header>
        {obj.map(((value, index) => (
          <SimpleCell
            key={index}
            onClick={() => setActivePanel(value.id)}
            expandable={true}
            before={<Icon28Game />}
          >
            {value.header}
          </SimpleCell>
        )))}
      </Group>
    </Panel>
  );
};

NavNews.propTypes = {
  obj: PropTypes.array,
  setActivePanel: PropTypes.func,
  id: PropTypes.string,
};
