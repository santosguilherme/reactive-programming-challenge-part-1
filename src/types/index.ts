export interface IObserver<T = any> {
  next?(value: T): any;
  error?(error: any): any;
  complete?(): any;
}

export interface ISubscription {
  unsubscribe(): void;
}

export interface IProducer {
  (observer: IObserver): ISubscription;
}

export interface IObservable {
  subscribe(observer: IObserver): ISubscription;
}
