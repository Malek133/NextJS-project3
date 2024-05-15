
import Link from 'next/link'

interface IProp{
     id: number, 
     title: string,
     description: string
}
async function getProducts(){
       const res = await fetch('http://localhost:3000/api/product');

 if(!res.ok){
  throw new Error("Error !");
 }
 return res.json()
 
}

const ProductPage = async() => {
const {products}=await getProducts()

  return (
 <>
 <h1 className='my-5 text-center text-4xl font-bold'>ProductLists ...</h1>

 <div className=' m-5 fix-height grid grid-cols-3'>
  { products.map(({ id, title, description }:IProp) => (
    <div key={id} className="container p-5 my-1 cursor-pointer rounded border-2 border-neutral-700 w-96 hover:bg-white">
      <h1 className="text-xl font-semibold line-clamp-1">
        {id} - {title}
      </h1>
      
      <p className="my-2 text-xl text-gray-700 p-1">
        {description}</p>
        
      <Link href={`/product/${id}`}>
        <p className="text-lg text-black hover:text-white font-medium m-2 p-2 w-full block text-center rounded bg-[#d9d8d8] hover:bg-[#171717]">
            Rade me
        </p>
        </Link>
        
    </div>
  ))}
</div>
 </>


  )
}

export default ProductPage