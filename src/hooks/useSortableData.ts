import { useState, useMemo } from 'react';
import { sortByKeyAndDirection } from '../util';
import { Direction } from '../@types/enum';

interface SortConfig {
  key: string;
  direction: Direction;
}

const useSortableData = (items: any[], config = {} as SortConfig) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig.key) {
      sortableItems.sort((itemA, itemB) =>
        sortByKeyAndDirection(
          itemA,
          itemB,
          sortConfig.key,
          sortConfig.direction
        )
      );
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = Direction.Ascending;
    if (
      sortConfig.key === key &&
      sortConfig.direction === Direction.Ascending
    ) {
      direction = Direction.Descending;
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};

export default useSortableData;
