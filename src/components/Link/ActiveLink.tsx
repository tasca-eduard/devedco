import { MouseEvent } from "react";

interface Props {
  href: string,
  hash: string,
  setHash: (hash: string) => void,
  children: JSX.Element | string,
  className: string
}

export default function ActiveLink(props: Props) {
  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    props.setHash(e.currentTarget.hash);
  } 

  return (
    <a 
      onClick={handleAnchorClick} 
      href={props.href} 
      className={`${props.className} ${props.hash === props.href && 'active'}`}
    >
      {props.children}
    </a>
  )
}