

export default function mergeSort(array) {
    if (array.length <= 1) {return array;}
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    function merge(left, right) {
        const array = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                array.push(left.shift());
            } else {
                array.push(right.shift());
            }
        }
        return array.concat(left.slice()).concat(right.slice());
    }

    return merge(mergeSort(left), mergeSort(right));
}