import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import MoreInfo from "./MoreInfo";

const Basket = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      //local;
      const response = await axios.get("baskets.json");
      setItems(response.data.baskets[props.basketNo]);

      setLoaded(true);
    })();
  }, [props.basketNo]);

  return (
    <React.Fragment>
      {loaded && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Basket;
