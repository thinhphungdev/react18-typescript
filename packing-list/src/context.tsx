import { useState, createContext, PropsWithChildren } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from './lib/items';

const ItemsContext = createContext(null);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(getInitialItems());

  return <ItemsContext.Provider value={null}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
