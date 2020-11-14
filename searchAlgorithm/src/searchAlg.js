function binarySearch(value, array) {
    let start = 0;
    let end = array.length - 1;
    let mid
    let index = null;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === value) {
            index = mid
            return index;
        } else if (value > array[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return index;
}