export const getSection = (num)=>document
.querySelector(`span[data-number="${num}"]`)
.parentElement.getAttribute('data-section');

