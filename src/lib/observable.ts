import { IObservable, IObserver, IProducer, ISubscription } from "../types";

export const Observable = (producer: IProducer): IObservable => {
    const subscribe = (observer: IObserver): ISubscription => {
        return producer(observer);
    };

    return {
        subscribe
    }
};
