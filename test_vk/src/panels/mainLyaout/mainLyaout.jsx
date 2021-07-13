import React from 'react';
import {useParams} from 'react-router-dom';


export const MainLyaout = (props) => {
  const {newsLyaout, chatLyaout, matchesLyaout, navigation} = props

  const {params} = useParams()

  return(
      <>
        {navigation}
        {params === "news" ? newsLyaout : null}
        {params === "chat" ? chatLyaout : null}
        {params === "matches" ?  matchesLyaout : null}
      </>

  )
}