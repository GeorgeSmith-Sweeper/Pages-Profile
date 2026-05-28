/* eslint-disable class-methods-use-this */
// Stubs for browser APIs jsdom doesn't implement, exercised on mount by
// Cursor (matchMedia + requestAnimationFrame) and useScrollReveal (IntersectionObserver).
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

class IntersectionObserverStub {
  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() { return []; }
}
global.IntersectionObserver = IntersectionObserverStub;

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() { return false; },
  });
}

if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
}
