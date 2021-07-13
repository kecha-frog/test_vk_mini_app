import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  AdaptivityProvider,
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Route, Switch} from "react-router-dom"
import {Navigation} from './panels/navigation/navigation';
import {MatchesLyaout} from './panels/matches/matchesLyaout';
import {ChatLyaout} from './panels/chat/chatLyaout';
import {NewsLyaout} from './panels/news/newsLyaout';
import {MainLyaout} from './panels/mainLyaout/mainLyaout';


const App = () => {
  const [activePanel, setActivePanel] = useState("nav");
  const [activeModal, setActiveModal] = useState(null);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null); /*<ScreenSpinner size='large' />*/

  useEffect(() => {
    bridge.subscribe(({detail: {type, data}}) => {
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

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
      <AdaptivityProvider>
        <AppRoot>
          <Switch>
            <Route path={["/:params","/"]}>
              <MainLyaout navigation={<Navigation/>}
                          chatLyaout={<ChatLyaout/>}
                          newsLyaout={<NewsLyaout activePanel={activePanel} setActivePanel={setActivePanel}/>}
                          matchesLyaout={<MatchesLyaout activePanel={activePanel} activeModal={activeModal} setActiveModal={setActiveModal}/>}/>
            </Route>
          </Switch>
        </AppRoot>
      </AdaptivityProvider>
  );
}

export default App;


