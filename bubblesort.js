// PseudoCode:

// 1. declare a function that takes an array as parameter
// 2. define variable 'swapped' without assisgning any value to it. it will be used to track whether any swaps were made during the iteration.
// 3. using 'do while' loop to ensure that the algorithm runs at least once and continues as long as swaps are made.
// 4. set 'swapped' variable to false at the befginning of each iteration. if no swaps occur during iteration, it will remain false, and the loop will terminate.
// 5. start a 'for' loop to go over elements of array.
// 6. inside the loop, 'if' statement check if the current element is greater then next element. If it is, swap is needed.
// 7. performing a swap
// 8. 'swapped=true', indicating that a swap has been made during the current iteration.
// 9. '}while(swapped)' closes the loop and checks the value of 'swapped'. if its;s true, the loop continues, indicating that at least one swap was made in the current iteration.
//10. If it;s false, the loop terminates as the array considered sorted.
//11. return sorted array
//12. execute function with array as an argument and console.log

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([4, 8, 5, 2, 9]));

// Diagram:

// First sort:
//   arr[4,8,5,2,9]

//  i   element     'if'    swap?   Array
//  0      4        false    no     [4,8,5,2,9]
//  1      8        true     yes    [4,5,8,2,9]
//  2      8        true     yes    [4,5,2,8,9]
//  3      8        false    no     [4,5,2,8,9]

// Second sort:
//   arr[4,5,2,8,9]
//
//  i    element     'if'    swap?   Array
//  0      4          false   no    [4,5,2,8,9]
//  1      5         true     yes   [4,2,5,8,9]
//  2      5         false    no    [4,2,5,8,9]
//  3      8         false    no    [4,2,5,8,9]

// Third sort:
//  arr[4,2,5,8,9]

// i      element    'if'    swap?   Array
// 0       4         true    yes     [2,4,5,8,9]
// 1       4         false    no     [2,4,5,8,9]
// 2       5         false    no     [2,4,5,8,9]
//  3      8         false    no     [2,4,5,8,9]

//  Fourth sort:
//   arr[2,4,5,8,9]

//   i    eleement    'if'   swap?    Array
//   0      2         false   no     [2,4,5,8,9]
//   1      4         false   no     [2,4,5,8,9]
//   2      5         false   no     [2,4,5,8,9]
//   3      8         false   no     [2,4,5,8,9]

//   swapped = false;
//    return array [2,4,5,8,9]
