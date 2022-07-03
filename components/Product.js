const Product = ({ product }) => {
  return (
    <div className="grid grid-cols-[1.5fr,2fr] gap-2 mb-5 lg:px-0">
      <div className="bg-slate-500 rounded-lg h-32 w-32">
        <img src={product.image.url} className="rounded-lg object-cover h-full" alt="" />
      </div>
      <div className="text-sm py-1 rounded-lg bg-green-400">
        <p>{product.name}</p> <p>strain</p> <p>weight</p>
        <p>price</p>
      </div>
    </div>
  )
}
export default Product
