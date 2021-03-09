import { Observable } from "./observable";
import { IObserver, IProducer } from "../types";

describe("Observable", () => {
  let producer: IProducer = null;

  beforeEach(() => {
    producer = (observer: IObserver) => {
      observer.next(12);
      return {
        unsubscribe() {
          observer.complete();
        },
      };
    };
  });
  it("should be a function or a class", () => {
    expect(typeof Observable).toBe("function");
  });

  it("should be able to call with new", () => {
    const instance = new Observable(producer);
    // Ensure constructor created the object:
    expect(instance).toBeTruthy();
  });

  it("should contain a property subscribe that is a function and takes 1 argument", () => {
    // Given
    const observable = new Observable(producer);

    // then
    expect(observable.subscribe).toBeDefined();
    expect(typeof observable.subscribe).toBe("function");
  });

  describe("subscribe function", () => {
    it("should be called with 1 argument", () => {
      // Given
      const observable = new Observable(producer);
      const subscribe = jest.spyOn(observable, "subscribe");
      const observer = { next: () => {} };

      // When
      observable.subscribe(observer);

      // then
      expect(subscribe).toHaveBeenCalled();
      expect(subscribe).toHaveBeenCalledWith(observer);
    });

    it("should return a subscription object that contains a subscription function", () => {
      // Given
      const observable = new Observable(producer);
      const observer = { next: () => {} };

      // When
      const subObject = observable.subscribe(observer);

      // Then
      expect(typeof subObject).toBe("object");
      expect(typeof subObject.unsubscribe).toBe("function");
    });
  });
});
