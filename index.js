const inputData1 = document.getElementById('input-data-1');
const inputData2 = document.getElementById('input-data-2');
const result = document.getElementById('result');
const output = document.getElementById('output');
const mergeLinkedListInfo = document.getElementById('merge-linkedlist-info');
const mergeLinkedListBtn = document.getElementById('merge-linkedlist-info-button');
const heading = document.getElementById('heading')


function isArraySorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i + 1] > arr[i]) {
        continue;
      } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
        return false;
      }
    }
    return true;
  }


mergeLinkedListBtn.addEventListener('click', () => {
    mergeLinkedListInfo.style.display = 'block';
})


mergeLinkedListInfo.addEventListener('click', () => {
    mergeLinkedListInfo.style.display = 'none';
})

heading.addEventListener('click', () => {
    window.location.reload();
})


class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}


// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);
 
        // to store current node
        var current;
 
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
 
            // add node
            current.next = node;
        }
        this.size++;
    }
 
 
    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }
 
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }
 
 
    // returns the list items
    returnList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return (str);
    }
 
}



result.addEventListener('click', () => { 

    if (inputData1.value == '' || inputData2.value == '') {
        alert('Please fill all the fields');
        return;
    }

    let inputList1 = inputData1.value.split(" ");
    // console.log(inputList1);
    let inputList2 = inputData2.value.split(" ");
    // console.log(inputList2);

    if (isArraySorted(inputList1) == false || isArraySorted(inputList2) == false) { 
        alert('Please enter sorted array');
        return;
    }
    

    var l1 = new LinkedList();
 

 
    // adding list-1 element to the list
    inputList1.forEach(element => {
        l1.add(element); 
    });

    // adding list-2 element to the list
    inputList2.forEach(element => {
        l1.add(element);
    });

    output.style.visibility = "visible";
    output.innerHTML += l1.returnList();

    
})
