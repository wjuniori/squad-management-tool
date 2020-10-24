import { Direction } from '../@types/enum';

export const sortByKeyAndDirection = (
  itemA: any,
  itemB: any,
  key: string,
  direction: Direction
): number => {
  if (itemA[key] < itemB[key]) {
    return direction === Direction.Ascending ? -1 : 1;
  }

  if (itemA[key] > itemB[key]) {
    return direction === Direction.Ascending ? 1 : -1;
  }

  return 0;
};
