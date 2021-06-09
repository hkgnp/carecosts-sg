import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Item from './Item';
import MoreInfo from './MoreInfo';

const Basket = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      //api
      const response = await axios.get('https://carecosts-sg.herokuapp.com/');
      setItems(response.data[0][baskets][props.basketNo]);

      //local
      // const response = await axios.get('baskets.json');
      // setItems(response.data[props.basketNo]);

      setLoaded(true);
    })();
  }, [props.basketNo]);

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

export default Basket;
