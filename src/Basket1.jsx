import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Item from './Item';

const Basket1 = () => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [readMoreDiv, setReadMoreDiv] = useState(false);

  useEffect(() => {
    (async () => {
      // const response = await axios.get('baskets.json');
      const response = await axios.get('https://carecosts-sg.herokuapp.com/');
      setItems(response.data[0].baskets.basket1);
      setLoaded(true);
    })();
  }, []);

  const readMore = () => {
    !readMoreDiv ? setReadMoreDiv(true) : setReadMoreDiv(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

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
          <p className="px-4 mt-8 text-light">
            Your loved one is generally well, and other than the usual medical
            follow-ups, the following services/ items may be useful for you.
          </p>
          <p className="mb-4 px-4 text-light cursor-pointer" onClick={readMore}>
            Read More
          </p>
        </Fade>
      )}

      {readMoreDiv && (
        <Fade>
          <p className="px-4 text-light">Oxygen concentrator</p>
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Basket1;
