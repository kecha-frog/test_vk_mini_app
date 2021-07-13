import { Icon28Game } from '@vkontakte/icons';
import {
  CellButton, Group, Header, Panel, SubnavigationButton,
} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useParams } from 'react-router-dom';


export const NavMatches = (props) => {
  const { obj, setActiveModal, id } = props;

  const {game} = useParams()

  return (
    <Panel id={id}>
      <Header mode="secondary">Nav Matches</Header>
      <Link to="/matches&dota">
        <SubnavigationButton selected={game === 'news'}>DOTA</SubnavigationButton>
      </Link>
      <Link to="/matches&csgo">
        <SubnavigationButton selected={game === 'news'}>CS GO</SubnavigationButton>
      </Link>
      <Link to="/matches&wot">
        <SubnavigationButton selected={game === 'news'}>WOT</SubnavigationButton>
      </Link>
      <Group>
        {
          obj.map((value, index) => {
            if(game === undefined || game === value.game){
              return <CellButton key={index} before={<Icon28Game />} onClick={() => setActiveModal(value.id)}>
                {value.header+ " " +  value.game}
              </CellButton>
            }
          })
        }
      </Group>
    </Panel>
  );
};

NavMatches.propTypes = {
  obj: PropTypes.array,
  setActiveModal: PropTypes.func,
  id: PropTypes.string,
};
