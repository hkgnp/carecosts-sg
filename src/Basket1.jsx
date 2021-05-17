import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Item from './Item';
import MoreInfo from './MoreInfo';

const Basket1 = () => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://carecosts-sg.herokuapp.com/');
      setItems(response.data[0].baskets.basket1);
      setLoaded(true);
    })();
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <Fade>
          {items.map((i) => (
            <Item
              key={i.item}
              frequency={i.frequency}
              item={i.item}
              description={i.description}
              cost={i.cost}
            />
          ))}
          <MoreInfo />
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Basket1;
