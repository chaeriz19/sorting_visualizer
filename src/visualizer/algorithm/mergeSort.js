export default function mergeSort(array, animations) {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    const sortedLeft = mergeSort(left, animations);
    const sortedRight = mergeSort(right, animations);
    const mergedArray = merge(sortedLeft, sortedRight, animations);
  
    return mergedArray;
  }
  
  function merge(left, right, animations) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      const animation = [];
      if (left[i] <= right[j]) {
        animation.push(i, j, left[i]);
        mergedArray.push(left[i]);
        i++;
      } else {
        animation.push(i, j, right[j]);
        mergedArray.push(right[j]);
        j++;
      }
  
      animations.push(animation);
    }
  
    while (i < left.length) {
      const animation = [i, j, left[i]];
      mergedArray.push(left[i]);
      animations.push(animation);
      i++;
    }
  
    while (j < right.length) {
      const animation = [i, j, right[j]];
      mergedArray.push(right[j]);
      animations.push(animation);
      j++;
    }
  
    return mergedArray;
  }