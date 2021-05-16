import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Item from './Item';

const Basket4 = () => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get('baskets.json');
      setItems(response.data.basket4);
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
            Your loved one is generally well, and other than the usual medical
            follow-ups, the following services/ items may be useful for you.
          </p>
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Basket4;
