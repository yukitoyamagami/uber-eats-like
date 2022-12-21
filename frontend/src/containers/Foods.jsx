import React, { Fragment, useEffect } from 'react';
import { fetchFoods } from '../apis/foods';

export const Foods = ({
  match
}) => {
  // 初回のみAPIを叩き、データの取得を行う
  useEffect(() => {
    fetchFoods(match.params.restaurantsId)
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      フード一覧
    </Fragment>
  )
}
