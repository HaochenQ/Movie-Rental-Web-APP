//import propsType from "prop-types";
//for movies object
export default function filtering(items, keyword) {
  return items.filter((c) => {
    if (c.genres.name === keyword) {
      return c;
    }
  });
}

// filtering.propsType = {
//   items: propsType.array.isRequired,
//   keyword: propsType.string.isRequired,
// };
