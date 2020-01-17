const withoutDebounce = document.getElementById("1");
const withDebounce = document.getElementById("2");

callCount = 1;
const callAPI = () => {
  withoutDebounce.innerHTML = callCount++;
};

callCount2 = 1;
const callAPI2 = () => {
  withDebounce.innerHTML = callCount2++;
};

//debounce function
const addDebounce = function(orignalFn, delay) {
  let timer;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      orignalFn.apply(context, args);
    }, delay);
  };
};

const callDebounceAPI = addDebounce(callAPI2, 400);
