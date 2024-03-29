import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';

interface Props {
  show: boolean,
  onHide: () => void,
  children: JSX.Element,
  id: string
}

export default function Offcanvas({
  show,
  onHide,
  children,
  id
}: Props) {
  const offCanvasRef = useRef<HTMLDivElement>(null);
  const root = document.querySelector("#portal-root") as HTMLDivElement;

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.toggle("translate", show);
  }, [show]);

  return (
    <>
      <CSSTransition 
        nodeRef={offCanvasRef} 
        in={show} 
        timeout={200} 
        classNames="transition"
        unmountOnExit
      >
        <>
          {
            ReactDOM.createPortal(
              <>
                <div className="overlay-backdrop" onClick={onHide}></div>
                <div
                  id={id} 
                  className={[
                  "offcanvas"
                ].join(" ")}
                  ref={offCanvasRef}
                >
                  {children}
                </div>
              </>,
              root
            )
          }
        </>
      </CSSTransition>
    </>
  )
}