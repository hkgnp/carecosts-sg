import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";

const MoreInfo = () => {
  const [loaded, setLoaded] = useState(false);
  const [readMoreDiv, setReadMoreDiv] = useState(false);
  const [specialItems, setSpecialItems] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get("qns.json");
      setSpecialItems(response.data[0].specialitems);
      setLoaded(true);
    })();
  }, []);

  const readMore = () => {
    !readMoreDiv ? setReadMoreDiv(true) : setReadMoreDiv(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <React.Fragment>
      <p className="px-4 mt-8 pb-8">
        Depending on the medical condition, your loved one may need{" "}
        <span onClick={readMore} className="underline cursor-pointer">
          one or more of the following equipment or services
        </span>
        .
      </p>
      {readMoreDiv && (
        <React.Fragment>
          {loaded && (
            <React.Fragment>
              {specialItems.map((i) => (
                <Item
                  key={i.item}
                  frequency={i.frequency}
                  item={i.item}
                  description={i.description}
                  cost={i.cost}
                />
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MoreInfo;
