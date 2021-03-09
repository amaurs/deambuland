import React, { Fragment } from 'react';

import { Outlet } from 'react-router-dom'

export default function Main(props: any) {
    return <Fragment>
            <h1>DEAMBULAND/0</h1>
            <Outlet />
            </Fragment>
}