import { faArrowUpRightFromSquare, faHandPointer, faHashtag, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { INTERACTION_MAP, LINK_OBJ } from "../../common/constants/interaction";
import { MAX_TABLET_WIDTH } from "../../common/constants/units";
import { TInteractable } from "../../common/types";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  function animateCursor(
    e: MouseEvent, 
    interactable: TInteractable
  ) {
    if (!(cursorRef.current instanceof HTMLDivElement)) return;

    const x = e.clientX - cursorRef.current.offsetWidth / 2;
    const y = e.clientY - cursorRef.current.offsetHeight / 2;

    const keyframe = {
      transform: `translate(${x}px, ${y}px)`,
      opacity: 1
    }

    cursorRef.current?.animate(keyframe, {
      fill: "forwards",
    });

    const linkType = 
      interactable?.getAttribute("href")?.includes("#") 
        ? LINK_OBJ["intern"] 
        : LINK_OBJ["extern"];
    
    Array.from(INTERACTION_MAP.values()).forEach((value: string) => {
      // have to make sure both intern and extern links are removed
      // might be a better way - will revisit sometime
      cursorRef.current?.classList.remove(value.replace("<TYPE>", LINK_OBJ["intern"]));
      cursorRef.current?.classList.remove(value.replace("<TYPE>", LINK_OBJ["extern"]));
    })

    if (interactable?.tagName) {
      cursorRef.current?.classList.add(INTERACTION_MAP.get(interactable?.tagName).replace("<TYPE>", linkType))
    } 
  }

  function handleCursorMove(e: MouseEvent) {
    if (!(e.target instanceof HTMLElement)) return;

    const interactable = 
      e.target.closest('a') || 
      e.target.closest('button') ||
      e.target.closest('input') ||
      e.target.closest('textarea');

    animateCursor(e, interactable)
  }

  function handleCursorOutPage() {
    const keyframe = {
      opacity: 0
    }

    cursorRef.current?.animate(keyframe, {
      fill: "forwards",
    });
  }

  useEffect(() => {
    if (window.innerWidth < MAX_TABLET_WIDTH) return;
    window.addEventListener("mousemove", handleCursorMove);
    window.addEventListener("mouseout", handleCursorOutPage);
  }, [cursorRef])

  return (
    <div 
      className="cursor"
      ref={cursorRef}
    >
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