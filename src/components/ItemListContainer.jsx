import ItemList from './ItemList.jsx';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;