import { spawn } from 'child_process';
import React, { useEffect, useState } from 'react';
import { useCoinRes } from '../../hooks/useCoinRes';
import StorageFavorite from '../../services/storage';

const FavList = () => {
  const { coins } = useCoinRes();
  const [favorite, setFavorite] = useState<string[]>([]);

  useEffect(() => {
    setFavorite(StorageFavorite.getFavorite());
  }, []);

  return (
    <div>
      {coins &&
        coins
          .filter((el) => favorite.includes(el.id))
          .map((el) => {
            return <span>{el.name}</span>;
          })}
    </div>
  );
};

export default FavList;
