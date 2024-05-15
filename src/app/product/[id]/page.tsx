import Link from "next/link";
import Image from 'next/image';

import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description:product.description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

 interface IProp {
    params:{id:string}
}

const  ProductPageSingle = async ({params}:IProp) => {

    const res = await fetch(`https://dummyjson.com/products/${params.id}`);

  if(!res.ok){
    throw new Error("Error !");
   }

  const  {id,title,description,thumbnail}:
  { id: number, title: string,description: string,thumbnail: string} = await res.json(); 
  return (
    <>
    <div className="flex justify-center items-center my-5">
      <span></span>
      <Link href={`/product`}>
        <p className="text-lg text-white  font-medium m-2 p-2
         w-fit text-center rounded bg-[#171717]">
            Home
        </p>
        </Link>
        <span></span>
      </div>
    

        <div className='flex justify-center items-center my-8
      fix-height'>
       <span></span>
     
    <div className=" p-5 cursor-pointer 
    rounded  w-96 bg-gray-100">
    <h1 className="text-xl font-semibold my-2">
        {id} - {title}</h1>
        <Image src={thumbnail} alt='' width={300} 
        height={300} />
    <p className="py-4 my-4">{description}</p>

    <button className="text-lg text-black hover:text-white font-medium m-2 p-2 w-full block text-center rounded bg-[#c8c6c6] hover:bg-[#171717]">
            Save
        </button>
    
    
  </div>

  <span></span>

    </div>
    </>
    
  )
}

export default ProductPageSingle
