import { useLoaderData } from "react-router-dom"
import { getProduct } from "../services/api"

export async function loaderProduct ({ params }) {
    const product = await getProduct(params.id)
    return {product}
}

export default function Details() {
   const {product} = useLoaderData
    return(
        <div>
            <img src="" alt="" />
            <span>{product}</span>
            <span></span>
            <p></p>
        </div>
    )
}