import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Item from './Item';

const Basket2 = () => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://carecosts-sg.herokuapp.com/');
      setItems(response.data[0].baskets.basket2);
      setLoaded(true);
    })();
  }, []);

  return (
    <React.Fragment>
      {loaded && (
        <Fade up>
          {items.map((i) => (
            <Item
              frequency={i.frequency}
              item={i.item}
              description={i.description}
              cost={i.cost}
            />
          ))}
          <p className="mb-4 p-4 text-light">
            Your loved one may need some support and may have difficulties
            living alone.
          </p>
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Basket2;
