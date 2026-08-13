import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {articles} from '@/data/articles';

type Params = Promise<{slug:string}>;

export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}

export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{
  const {slug}=await params;
  const a=articles.find(x=>x.slug===slug);
  return a?{title:a.title,description:a.excerpt}:{title:'Knowledge JPN',description:'Artikel dan pengetahuan teknis CV. Jaya Prima Nusantara.'};
}

export default async function Article({params}:{params:Params}){
  const {slug}=await params;
  const a=articles.find(x=>x.slug===slug);
  if(!a)notFound();
  return <article className="section"><div className="breadcrumb">Home / Knowledge / {a.category}</div><div className="sectionHead"><div className="eyebrow">{a.category}</div><h1>{a.title}</h1><p className="muted">{a.excerpt}</p></div><div style={{maxWidth:780}}>{a.content.map((p,i)=><p className="muted" key={`${a.slug}-${i}`}>{p}</p>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Article','headline':a.title,'description':a.excerpt,'author':{'@type':'Organization','name':'CV. Jaya Prima Nusantara'}})}}/></article>;
}
