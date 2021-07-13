import React from 'react';
import {NavMatches} from './navMatches';
import {ModalCard, ModalRoot, View} from '@vkontakte/vkui';
import {Icon56MoneyTransferOutline} from '@vkontakte/icons';

export const MatchesLyaout = (props) => {
  const {activeModal, setActiveModal, activePanel} = props

  const matches = [{header: "match 0", id: "match_0"}, {header: "match 1", id: "match_1"}, {
    header: "match 2",
    id: "match_2"
  }, {header: "match 3", id: "match_3"}, {header: "match 4", id: "match_4"}];

  const modal =  (
        <ModalRoot
            activeModal={activeModal}>
          {matches.map((value, index) => (
              <ModalCard
                  key={index}
                  id={value.id}
                  onClose={() => setActiveModal(null)}
                  icon={<Icon56MoneyTransferOutline/>}
                  header={value.header}
                  subheader="0 : 0"
              >
              </ModalCard>
              ))}
        </ModalRoot>
    )

  return (
      <View activePanel={activePanel} modal={modal}>
        <NavMatches id={"nav"} obj={matches} setActiveModal={setActiveModal}/>
      </View>
  )
}
