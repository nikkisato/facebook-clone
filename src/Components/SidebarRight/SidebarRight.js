import React from 'react';
import './SidebarRight.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import Sponsored from '../Sponsored/Sponsored';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import StoreIcon from '@material-ui/icons/Store';
import CakeIcon from '@material-ui/icons/Cake';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
function SidebarRight() {
  return (
    <div className='sidebarRight'>
      <Sponsored
        className='sidebarRight__sponsored'
        description={'Clever Programmer'}
        url={
          'https://www.cleverprogrammer.com/5-day-react-javascript-challenge-mar?utm_source=facebook&utm_medium=ad&utm_campaign=reactjs-challenge-2021-march&utm_content=qazi-waqas-studio-screen&ad_id=23847010704320420&utm_ad_id=23847010704320420&utm_audience=hot-us-checkout-init-30&utm_term=hot&fbclid=IwAR1aZrlleU0WDI8-Iw74ftzzCd35vrxW6RxaWBrs75MGSr1PQ3qlR3ODRy8'
        }
        title={'Free Live React Javascript Training'}
        image={
          'https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0E'
        }
      />
      <Sponsored
        className='sidebarRight__sponsored'
        description={'Clever Programmer'}
        url={
          'https://www.cleverprogrammer.com/5-day-react-javascript-challenge-mar?utm_source=facebook&utm_medium=ad&utm_campaign=reactjs-challenge-2021-march&utm_content=qazi-waqas-studio-screen&ad_id=23847010704320420&utm_ad_id=23847010704320420&utm_audience=hot-us-checkout-init-30&utm_term=hot&fbclid=IwAR1aZrlleU0WDI8-Iw74ftzzCd35vrxW6RxaWBrs75MGSr1PQ3qlR3ODRy8'
        }
        title={'Free Live React Javascript Training'}
        image={
          'https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0E'
        }
      />
      <hr />
      <SidebarRow title={'Your Pages'} />
      <SidebarRow Icon={BusinessCenterIcon} title={'Developer'} />
      <SidebarRow Icon={NotificationsActiveIcon} title={'Notifications'} />
      <SidebarRow Icon={StoreIcon} title={'Create Promotion'} />
      <hr />
      <SidebarRow
        Icon={CakeIcon}
        title={'Peter Parker and Clint Barton have birthdays today.'}
      />
      <hr />
      <SidebarRow title={'Contacts'} Icon={RecentActorsIcon} />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
      <SidebarRow
        src='https://scontent-sea1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/c0.49.296.296a/p296x100/118836257_23845477410390420_3931119781904450886_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=67cdda&_nc_ohc=GXXOVzb0KLgAX98r32Q&_nc_ht=scontent-sea1-1.xx&_nc_tp=31&oh=aa734e6df9c65357c09ae51070065fa1&oe=607C8F0'
        title={'Testing'}
      />
    </div>
  );
}

export default SidebarRight;
