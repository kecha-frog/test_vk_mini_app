import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {SubnavigationBar, SubnavigationButton} from '@vkontakte/vkui';

export const Navigation = () => {
  const {params} = useParams()

  return <>
    <SubnavigationBar>
      <SubnavigationButton selected={params === "news"}>
        <Link  to="/news">
          news
        </Link>
      </SubnavigationButton>
      <SubnavigationButton selected={params === "chat"}>
        <Link  to="/chat">
          chat
        </Link>
      </SubnavigationButton>
      <SubnavigationButton selected={params === "matches"}>
        <Link  to="/matches">
          matches
        </Link>
      </SubnavigationButton>
    </SubnavigationBar>
  </>
}