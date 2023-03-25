export default function ProductItem({img, title, price}) {
  return (
    <div className="divProductItem">
      <img src={img}/>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
}
