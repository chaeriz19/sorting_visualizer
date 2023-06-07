export default function mergesorttest(array, animations) {

    // If array is 1 or lower return
    if (array.length <= 1) {return array;}

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);


    const sorted_left = mergesorttest(left, animations);
    const sorted_right = mergesorttest(right, animations);

    // Merge left and right side
    const mergedArray = merge(sorted_left, sorted_right, animations);
    return mergedArray;
}
function merge(left, right, animations) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
    let animation = [];
      
    if (left[i] <= right[j]) {
        animation = [i, j, left[i]];
        mergedArray.push(left[i]);
        i++;
    } else {
        animation = [i + j, i, right[j]];
        mergedArray.push(right[j]);
        j++;
    }
    
        animations.push(animation);
    }
    
    while (i < left.length) {
        let animation = [i + j, i, left[i]];
        mergedArray.push(left[i]);
        i++;
        animations.push(animation);
    }
    
    while (j < right.length) {
        let animation = [i + j, i, right[j]];
        mergedArray.push(right[j]);
        j++;
        animations.push(animation);
    }
    
    return mergedArray;
}