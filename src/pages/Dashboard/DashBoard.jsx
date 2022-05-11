import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import Media from 'react-media';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import HomeTab from 'components/HomeTab';
import DiagramTab from 'components/DiagramTab';
import s from './DashBoard.module.scss';

const Dashboard = () => {

  return (<>
    <h1>Dashboard page</h1><div className={s.Dashboard}>
    <Media queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px)",
    }}>
      {matches => (
            <Fragment>
          {matches.small &&
            <>
              <Navigation />
              <Routes>
                <Route path='*' element={<><Balance/><HomeTab /></>}/>
                <Route path="/currency" element={<Currency />}/>
                <Route path='/diagramtab' element={<DiagramTab />}/>
              </Routes>
            </>
          }
          {matches.medium && <>
            <div className={s.Dashboard__left}>
              <div className={s.Dashboard__nav}>
                <Navigation/>
                <Balance/>
              </div>
              <Currency/>
            </div>
            <div className={s.Dashboard__rigth}>
              <Routes>
                <Route path='*' element={<HomeTab />}/>
                <Route path='/diagramtab' element={<DiagramTab />}/>
              </Routes>
            </div>
          </>}
            </Fragment>
          )}
  </Media>
  </div>
  </>)
};
export default Dashboard;
