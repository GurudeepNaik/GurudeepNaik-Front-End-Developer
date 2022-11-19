/**
 * 
 * @param {HTMLElement} element 
 * @param {number} speed 
 * @param {number} distance 
 * @param {number} step 
 */
 export const sideScroll = (element, speed, distance, step) => {
     let scrollAmount = 0;
     const slideTimer = setInterval(() => {
       element.scrollLeft += step;
       scrollAmount += Math.abs(step);
       console.log(scrollAmount,distance,element.scrollLeft);
       if (scrollAmount >= distance) {
           clearInterval(slideTimer);
         }
 
     }, speed);
   };