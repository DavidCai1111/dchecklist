import type { NextPage } from 'next';
import { useState } from "react";
import AppFooter from '../components/app-footer';
import AppJumbotron from '../components/app-jumbotron';
import Item from '../components/item';
import ItemCount from '../components/item-count';
import ItemList from '../components/item-list';

declare const window: any;

const CONTRACT_ADDRESS = "0xB3A128fBDDF0Ba3197fe4eBB71bD9cEd3A0f79FE";

const Home: NextPage = () => {
  let [user, setUser] = useState('');
  // let [tasks, setTasks] = useState([]);

  let item2 = <Item key={0} message="a new message" />;
  let item3 = <Item key={1} message="another message" />;
  let item4 = <Item key={2} message="one more task" />;

  const tasks = [item2, item3, item4];

  return (
    <div className="container">
      <AppJumbotron title={`Hello, ${user}`} />
        <ItemList allTheThings={tasks} />
        <br />
        <br />
        <br />
        <ItemCount allTheThings={tasks} />
        <hr />
      <AppFooter />
    </div>
  )
}

export default Home
