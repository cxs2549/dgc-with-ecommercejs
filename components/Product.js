import Link from "next/link"

const Product = ({ product }) => {
  return (
    <div id="product" className="flex flex-col grid-cols-[1.5fr,2fr] mb-2 w-full">
      <Link href={`/products/${product.permalink}`}>
        <a className="bg-slate-500 rounded-lg h-28 w-full">
          <img
            src={product.image.url}
            className="rounded-lg object-cover w-full h-full"
            alt=""
          />
        </a>
      </Link>
      <div className="text-sm p-2 h-[100px]">
        <h3 className="leading-4">{product.name}</h3> <p>strain</p> <p>weight</p>
        <p>price</p>
      </div>
    </div>
  )
}
export default Product
