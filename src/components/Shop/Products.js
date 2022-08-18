import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEM = [
  {
    id: "p1",
    price: 100,
    title: "first book",
    description: "my first book",
  },
  {
    id: "p2",
    price: 80,
    title: "second book",
    description: "my second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
