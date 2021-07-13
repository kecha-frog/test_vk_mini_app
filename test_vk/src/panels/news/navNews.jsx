import React from 'react';
import {Group, Header, Panel, SimpleCell} from '@vkontakte/vkui';
import { Icon28Game } from '@vkontakte/icons';

export const NavNews = (props) => {
  const {obj, setActivePanel, id} = props
  return (
      <Panel id={id}>
        <Group>
          <Header mode="secondary">Nav Matches</Header>
          {obj.map(((value, index) => (
              <SimpleCell key={index} onClick={() => setActivePanel(value.id)} expandable
                          before={<Icon28Game/>}>{value.header}</SimpleCell>)))}
        </Group>
      </Panel>)
}
