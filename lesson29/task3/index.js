/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

/**
 * @return {undefined}
 */
export const printing = () => {
  console.log(1);

  // eslint-disable-next-line prefer-arrow-callback
  setTimeout(function () {
    console.log(5);
  }, 1000);

  console.log(2);

  // eslint-disable-next-line prefer-arrow-callback
  setTimeout(function () {
    console.log(4);
  }, 0);

  // eslint-disable-next-line prefer-arrow-callback
  setTimeout(function () {
    console.log(6);
  }, 2000);

  console.log(3);
};
