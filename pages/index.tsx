import type { NextPage } from 'next';
import AppFooter from '../components/app-footer';
import AppJumbotron from '../components/app-jumbotron';
import Item from '../components/item';
import ItemCount from '../components/item-count';
import ItemList from '../components/item-list';


const Home: NextPage = () => {
  let item2 = <Item message="a new message" />;
  let item3 = <Item message="another message" />;
  let item4 = <Item message="one more task" />;

  let allTheThings = [item2, item3, item4];

  return (
    <div className="container">
      <AppJumbotron title="Stuff" />
        <ItemList allTheThings={allTheThings} />
        <br />
        <br />
        <br />
        <ItemCount allTheThings={allTheThings} />
        <hr />
      <AppFooter />
    </div>
  )
}

export default Home
