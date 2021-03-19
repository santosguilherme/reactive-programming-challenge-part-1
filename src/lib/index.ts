import { IObservable, IObserver, IProducer } from "../types";
import { Observable } from "./observable";

export * from "./observable";

// TODO: find a type from evenType param
export const fromEvent = (element: HTMLElement, eventType: string): IObservable => {
    const producer: IProducer = (observer: IObserver) => {
        const eventHandler = (event: MouseEvent) => observer.next(event);

        element.addEventListener(eventType, eventHandler);

        return {
            unsubscribe: () => element.removeEventListener(eventType, eventHandler)
        };
    };

    return new Observable(producer);
};
