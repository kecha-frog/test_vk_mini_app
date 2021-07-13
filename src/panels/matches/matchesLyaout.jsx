import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { ModalCard, ModalRoot, View } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React from 'react';
import { NavMatches } from './navMatches';

export const MatchesLyaout = (props) => {
  const { activeModal, setActiveModal, activePanel } = props;

  const matches = [{ header: 'match 0', id: 'match_0', game:"wot" }, { header: 'match 1', id: 'match_1', game:"csgo" }, {
    header: 'match 2',
    id: 'match_2', game:"dota"
  }, { header: 'match 3', id: 'match_3', game:"csgo" }, { header: 'match 4', id: 'match_4', game:"wot" }];

  const modal = (
    <ModalRoot
      activeModal={activeModal}
    >
      {matches.map((value, index) => (
        <ModalCard
          key={index}
          id={value.id}
          onClose={() => setActiveModal(null)}
          icon={<Icon56MoneyTransferOutline />}
          header={value.header +" " + value.game}
          subheader="0 : 0"
        />
      ))}
    </ModalRoot>
  );

  return (
    <View activePanel={activePanel} modal={modal}>
      <NavMatches id="nav" obj={matches} setActiveModal={setActiveModal} />
    </View>
  );
};

MatchesLyaout.propTypes = {
  activeModal: PropTypes.string,
  setActiveModal: PropTypes.func,
  activePanel: PropTypes.string,
};
