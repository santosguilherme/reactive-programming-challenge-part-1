import { IObservable, IObserver, IProducer, ISubscription } from "../types";

export class Observable implements IObservable {
    internalProducer: IProducer;

    constructor(producer: IProducer) {
        this.internalProducer = producer;
    }

    subscribe(observer: IObserver): ISubscription {
        return this.internalProducer(observer);
    }
}
