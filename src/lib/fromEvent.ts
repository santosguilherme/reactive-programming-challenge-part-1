import { IObservable, IObserver, IProducer } from "../types";
import { Observable } from "./observable";

export function fromEvent(
  nodeEl: HTMLElement,
  eventName: "error" | "click" | "change" | "input"
): IObservable {
  const producer: IProducer = (observer: IObserver) => {
    const eventHandler = (event: MouseEvent) => observer.next(event);

    if (typeof nodeEl.addEventListener === 'function') {
      nodeEl.addEventListener(eventName, eventHandler);
    } else {
      observer.error('You should provide a valid html element');
    }

    observer.complete();

    return {
      unsubscribe: () => nodeEl.removeEventListener(eventName, eventHandler)
    };
  };

  return new Observable(producer);
}
