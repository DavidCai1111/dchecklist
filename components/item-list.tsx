export default function ItemList({ allTheThings }) {
  const items = allTheThings.map(thing => thing);

  return (
    <h4>{items}</h4>
  )
}
