import { faArrowUpRightFromSquare, faHandPointer, faHashtag, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function Cursor() {
  
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;
  
    function animateCursor(
      e: MouseEvent, 
      interactable: 
        HTMLAnchorElement | 
        HTMLButtonElement | 
        HTMLInputElement | 
        HTMLTextAreaElement |
        null
    ) {
      const x = e.clientX - cursor.offsetWidth / 2;
      const y = e.clientY - cursor.offsetHeight / 2;
  
      const keyframe = {
        transform: `translate(${x}px, ${y}px)`,
        opacity: 1
      }
  
      cursor.animate(keyframe, {
        fill: "forwards",
      });
  
      switch(interactable?.tagName) {
        case "A":
          const isInternLink = interactable.getAttribute("href")?.includes("#");
  
          if (isInternLink) {
            cursor.classList.add("cursor-intern-link");
          } else {
            cursor.classList.add("cursor-extern-link");
          }
          
          break;
  
        case "BUTTON":
          cursor.classList.add("cursor-button");
          break;
  
        case "INPUT" || "TEXTAREA":
          cursor.classList.add("cursor-input");
          break;
          
        case "TEXTAREA":
          cursor.classList.add("cursor-input");
          break;
  
        default:
          cursor.classList.remove("cursor-extern-link");
          cursor.classList.remove("cursor-intern-link");
          cursor.classList.remove("cursor-button");
          cursor.classList.remove("cursor-input");
      }
    }
  
    function handleCursorMove(e: MouseEvent) {
      if (e.target instanceof HTMLElement) {
        const interactable = 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.closest('input') ||
          e.target.closest('textarea');
  
        animateCursor(e, interactable)
      }
    }

    function handleCursorOutPage() {
      const keyframe = {
        opacity: 0
      }
  
      cursor.animate(keyframe, {
        fill: "forwards",
      });
    }

    if (window.innerWidth > 1024) {
      window.addEventListener("mousemove", handleCursorMove);
      window.addEventListener("mouseout", handleCursorOutPage);
    }
  }, [])

  return (
    <div className="cursor">
      <FontAwesomeIcon
        className="cursor-extern-icon"
        icon={faArrowUpRightFromSquare}
      />
      <FontAwesomeIcon
        className="cursor-intern-icon"
        icon={faHashtag}
      />
      <FontAwesomeIcon
        className="cursor-button-icon"
        icon={faHandPointer}
      />
      <FontAwesomeIcon
        className="cursor-input-icon"
        icon={faPen}
      />
    </div>
  )
}