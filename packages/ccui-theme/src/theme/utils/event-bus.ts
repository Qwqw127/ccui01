import { Theme } from '../theme';
import { IEventBus } from './interface';

export class EventBus implements IEventBus {
  private eventBusCore = [];
  private areFuncEqual(a: { toString: () => any }, b: { toString: () => any }) {
    return a.toString() === b.toString();
  }
  private isKeyValueObjInArr(arr: any[], key: string, val: any) {
    const filteredArr = arr.filter((entry: { [x: string]: any }) => {
      return entry[key] === val;
    });
    return filteredArr.length > 0;
  }
  private removeFuncInFuncArr(arr: any[], fn: any) {
    for (let z = 0; z < arr.length; z++) {
      if (this.areFuncEqual(arr[z], fn)) {
        arr.splice(z, 1);
      }
    }
    return arr;
  }
  private getKeyValueObjInArr(arr: any[], key: string, val: any) {
    const filteredArr = arr.filter((entry: { [x: string]: any }) => {
      return entry[key] === val;
    });
    return filteredArr[0];
  }
  private addEvent(eventName: any, eventFunc: any) {
    if (!this.isKeyValueObjInArr(this.eventBusCore, 'eventName', eventName)) {
      this.eventBusCore.push({
        eventName: eventName,
        eventFuncArr: [eventFunc]
      });
    } else {
      this.eventBusCore = this.eventBusCore.map((event) => {
        if (event['eventName'] === eventName) {
          event.eventFuncArr.push(eventFunc);
        }
        return event;
      });
    }
  }
  public add(eventName: string, callbacks: () => void) {
    if (!eventName) {
      return;
    }
    if (typeof callbacks === 'function') {
      for (let i = 1; i < arguments.length; i++) {
        this.addEvent(eventName, arguments[i]);
      }
    }
    if (typeof callbacks === 'object' && callbacks.forEach) {
      callbacks.forEach((fn: any) => {
        this.addEvent(eventName, fn);
      });
    }
  }
  public remove(eventName: string, callbacks: () => void) {
    if (!eventName) {
      return;
    }
    for (let i = 0; i < this.eventBusCore.length; i++) {
      if (this.eventBusCore[i].eventName === eventName) {
        if (arguments.length === 1) {
          return this.eventBusCore.splice(i, 1);
        }
        const removedEvent = this.eventBusCore.splice(i, 1)[0];
        if (typeof callbacks === 'function') {
          for (let k = 1; k < arguments.length; k++) {
            removedEvent.eventFuncArr = this.removeFuncInFuncArr(
              removedEvent.eventFuncArr,
              arguments[k]
            );
          }
        }
        if (typeof callbacks === 'object' && callbacks.length) {
          for (let x = 0; x < callbacks.length; x++) {
            removedEvent.eventFuncArr = this.removeFuncInFuncArr(
              removedEvent.eventFuncArr,
              callbacks[x]
            );
          }
        }
        this.eventBusCore.push(removedEvent);
      }
    }
  }
  public trigger(eventName: string, data: Theme) {
    const event = this.getKeyValueObjInArr(
      this.eventBusCore,
      'eventName',
      eventName
    );
    if (event) {
      (event.eventFuncArr || []).forEach((fn) => {
        fn.apply(this, data);
      });
    }
  }
}
