import Image from "next/image";
import { GitHubIcon, TwitterIcon } from "../components/icons";
import data from '../data.json';

function LinkCard({url, title, image} : {url: string; title: string; image?: string}){
  return(
    <a
      href={url}
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all border border-green-200 mb-3 bg-green-100'
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image 
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-center text-gray-700 -ml-10">{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
      <Image 
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
      />  
      <h1 className="font-bold mt-4 mb-8 text-xl text-gray-700">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link}/>
      ))}
      <div className="flex items-center gap-4 mt-8 text-green-200">
        {data.socials.map((link) => {
          if(link.url.includes('twitter')){
            return <TwitterIcon key="first"/>;
          }
          if(link.url.includes('github')){
            return <GitHubIcon key="second"/>
          }
        })}
      </div>
    </div>
  )
}