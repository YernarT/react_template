export default function debounce(fn, delay) {
  var timer = null;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
