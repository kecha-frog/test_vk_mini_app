import React from 'react';
import {CellButton, Group, Header, Panel} from '@vkontakte/vkui';
import {Icon28Game} from '@vkontakte/icons';


export const NavMatches = (props) => {
  const {obj, setActiveModal, id} = props
  return (
      <Panel id={id}>
        <Header mode="secondary">Nav Matches</Header>
        <Group>
          {obj.map((value, index) => (
              <CellButton key={index} before={<Icon28Game />} onClick={() => setActiveModal(value.id)}>
                {value.header}
              </CellButton>
          ))}
        </Group>
      </Panel>)
}
