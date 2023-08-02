class EventService {
    private listeners: { [key: string]: Function[] } = {};
  
    on(event: string, listener: Function) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
  
    emit(event: string, data: any) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(listener => listener(data));
      }
    }
  }

  export default new EventService();
  