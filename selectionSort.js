// Selection Sort
// how does it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

//PseudoCode:

//1. declare a function that takes an array as parameter
//2. using 'for' loop, go over elements  of array.
//3. iniitialize 'minIndex' to to current index i.
//4. Inner loop that starts from i+1 and goes up to the last element of the array.
//5. it compares each element with the current lowest element 'arr[minIndex]' and if a smaller element is found, it updates 'minIndex' to the index of that element.
//6. after inner loop, we swap the elements at indices 'i' and 'minIndex' ,ensuring that the lowest element is moved to its correct position.
//7. return sorted array.
//8. console.log applying the function with given array.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([34, 8, 12, 80, 1]));

// Diagram:

//   i    j     element   'if'  minIndex  Swap  Array

//   0            34               34
//        1        8       true    8
//        2        12      false   8
//        3        80      false   8
//        4        1       true    1       yes  [1,8,12,80,34]
//  1              8               8
//        2        12     false    8
//        3        80     false    8
//        4        34     false    8    yes(same) [1,8,12,80,34]
//  2              12              12
//        3        80     false    12
//        4        34     false    12   yes(same)  [1,8,12,80,34]
//  3              80              80
//        4        34     true     34   yes       [1,8,12,34,80]

//  return arr [1,8,12,34,80]
