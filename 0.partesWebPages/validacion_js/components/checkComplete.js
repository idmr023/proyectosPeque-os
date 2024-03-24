const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-trash');
  i.addEventListener('click', completeTask);
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

export default checkComplete;
