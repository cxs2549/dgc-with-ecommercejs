import commerce from "../../lib/commerce"
// import { useCartDispatch } from "../../context/cart"
import CategoryList from "../../components/CategoryList"
// import Layout from "../../components/Layout"
import { BsBag } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { Menu, Transition } from "@headlessui/react"
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

export async function getStaticProps({ params }) {
  const { permalink } = params
  const { data: cats } = await commerce.categories.list()

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  })
  return {
    props: {
      product,
      cats,
    },
  }
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list()
  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}

export default function ProductPage({ product, cats }) {
  const [grams, setGrams] = useState(product.variant_groups[0].options[0].name)
  const [price, setPrice] = useState(product.price.raw)
  // const { setCart } = useCartDispatch()
  const { image } = product
  const handleClick = (variant, price) => {
    setGrams(variant)
    setPrice(price)
  }
  // const addToCart = () =>
  //   commerce.cart.add(product.id).then(({ cart }) => setCart(cart))
  return (
    <div>
      <div className="px-5">
        <CategoryList categories={cats} />
        <div className="py-5 flex flex-col gap-4 grid-cols-2">
          <img src={image.url} className="rounded-lg" alt="" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h3 className="text-2xl">{product.name}</h3>
              <h3 className=" -mt-0.5 opacity-80 text-xs">
                {product.categories[1] && product.categories[1].slug
                  ? product.categories[1].slug
                  : product.categories[0].slug}
              </h3>
            </div>
            <div className="flex mt-4 justify-end">
              <button className="font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                <AiOutlineHeart size={16} />
              </button>
              <button
                className="font-[500] flex items-center gap-2 text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all whitespace-nowrap duration-150"
              >
                <BsBag size={16} />
                Add to bag
              </button>
            </div>
            {product.variant_groups.length > 0 && (
              <Menu className="relative z-30 mt-2" as="div">
                <Menu.Button className="flex items-center justify-between w-full">
                  <div className="flex text-xs gap-0.5 font-normal">
                    <span>{grams}</span>
                    <MdKeyboardArrowDown />
                  </div>
                  <h3 className="font-medium text-xl">${price}</h3>
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="flex gap-2 surface rounded absolute top-inset text-sm -left-[7px] flex-wrap bg-transparent overflow-hidden z-20">
                    {product.variant_groups[0].options.map((option, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <div
                            onClick={() =>
                              handleClick(
                                option.name,
                                option.price.raw + product.price.raw,
                                option.id
                              )
                            }
                            className={`${active && "bg-slate-100"} px-2 py-2 ${
                              option.name === grams ? "hidden" : "flex"
                            } justify-between border rounded flex items-center gap-4 z-20`}
                          >
                            <span>{option.name}</span>
                            <span>${option.price.raw + product.price.raw}</span>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
