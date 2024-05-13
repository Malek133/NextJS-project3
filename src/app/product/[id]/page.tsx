import Link from "next/link";

interface IProp {
    params:{id:string}
}
const  ProductPageSingle = async ({params}:IProp) => {

    const res = await fetch(`https://dummyjson.com/products/${params.id}`);

  if(!res.ok){
    throw new Error("Tnak Kho !");
   }

  const  {id,title,description,thumbnail}:
  { id: number, title: string,description: string,thumbnail: string} = await res.json(); 
  return (
    <div className='flex justify-center items-center my-8
      fix-height'>
       <span></span>
     
    <div className=" p-5 cursor-pointer 
    rounded  w-96 bg-gray-100">
    <h1 className="text-xl font-semibold my-2">
        {id} - {title}</h1>
        <img src={thumbnail} alt='' />
    <p className="py-4 my-4">{description}</p>
    <Link href={`/product`}>
        <p className="text-lg text-black hover:text-white font-medium m-2 p-2 w-full block text-center rounded bg-[#d9d8d8] hover:bg-[#171717]">
            retour --
        </p>
        </Link>
    
  </div>

  <span></span>

    </div>
  )
}

export default ProductPageSingle
