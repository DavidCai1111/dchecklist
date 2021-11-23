import Item from "./item";

export default function ItemList({ allTheThings }) {
  const items = allTheThings.map(thing => <Item key={thing.key} message={thing.title} rawChecked={thing.isDone} />);

  return (
    <h4>{items}</h4>
  )
}
