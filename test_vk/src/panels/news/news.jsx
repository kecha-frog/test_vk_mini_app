import React from 'react';
import {Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

export const News = (props) => {
  const {news, id, setActivePanel} = props

  return (
      <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActivePanel("nav")}/>}>
          {news}
        </PanelHeader>
        <h1>{news}</h1>
      </Panel>
  )
}