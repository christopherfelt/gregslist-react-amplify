import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserAuth from '../components/UserAuth'
import CarsPage from "../pages/CarsPage"
import CarDetail from "../pages/CarDetail"

export default function Index() {

    const routes = [
        {
            path: '/user-auth',
            name: 'UserAuth',
            component: UserAuth
        },
        {
            path: '/cars',
            name: 'Cars',
            component: CarsPage
        },
        {
            path: '/car/:carId',
            name: 'CarDetail',
            component: CarDetail
        }
    ]

  return (
    <>
        <Switch>
            {
                routes.map((r, i) => (
                    <Route path={r.path} exact component={r.component} key={i} />
                ))
            }
        </Switch>
    </>
  )
}
