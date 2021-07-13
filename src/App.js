import bridge from '@vkontakte/vk-bridge';
import {
  AdaptivityProvider,
  AppRoot,
} from '@vkontakte/vkui';
import React, { useState, useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChatLyaout } from './panels/chat/chatLyaout';
import { MatchesLyaout } from './panels/matches/matchesLyaout';
import { Navigation } from './panels/navigation/navigation';
import { NewsLyaout } from './panels/news/newsLyaout';

export const App = () => {
  const [activePanel, setActivePanel] = useState('nav');
  const [activeModal, setActiveModal] = useState(null);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null); /* <ScreenSpinner size='large' /> */

  useEffect(() => {
    bridge.subscribe(({
      detail: {
        type,
        data
      }
    }) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }

    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <BrowserRouter>
      <AdaptivityProvider>
        <AppRoot>
          <Route path={['/:params', '/']}>
            <Navigation/>
          </Route>
          <Switch>
            <Route path={'/chat'}>
              <ChatLyaout/>
            </Route>
            <Route path={'/news'}>
              <NewsLyaout activePanel={activePanel} setActivePanel={setActivePanel}/>
            </Route>
            <Route path={['/matches', '/matches&:game']}>
              <MatchesLyaout activePanel={activePanel} activeModal={activeModal}
                             setActiveModal={setActiveModal}/>
            </Route>
          </Switch>
        </AppRoot>
      </AdaptivityProvider>
    </BrowserRouter>
  );
};


