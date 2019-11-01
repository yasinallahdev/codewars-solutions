/*

    PROBLEM:
    Linked Lists - Length & Count

    Implement Length() to count the number of nodes in a linked list.

    length(null) => 0
    length(1 -> 2 -> 3 -> null) => 3
    Implement Count() to count the occurrences of an integer in a linked list.

    count(null, 1) => 0
    count(1 -> 2 -> 3 -> null, 1) => 1
    count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
    I've decided to bundle these two functions within the same Kata since they are both very similar.

    The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

    Related Kata in order of expected completion (increasing difficulty):
    Linked Lists - Push & BuildOneTwoThree
    Linked Lists - Length & Count
    Linked Lists - Get Nth Node
    Linked Lists - Insert Nth Node
    Linked Lists - Sorted Insert
    Linked Lists - Insert Sort
    Linked Lists - Append
    Linked Lists - Remove Duplicates
    Linked Lists - Move Node
    Linked Lists - Move Node In-place
    Linked Lists - Alternating Split
    Linked Lists - Front Back Split
    Linked Lists - Shuffle Merge
    Linked Lists - Sorted Merge
    Linked Lists - Merge Sort
    Linked Lists - Sorted Intersect
    Linked Lists - Iterative Reverse
    Linked Lists - Recursive Reverse

    Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.

*/

// SOLUTION
struct Node {
  Node * next;
  int data;
};

int Length(Node *head)
{
  // Start with the first node
  Node* currentNode = head;
  // initialize a length
  int length = 0;
  // keep looping until we encounter a null node (loop never runs if head node is null)
  while(currentNode != nullptr) {
    // increment count and get the next node
    length++;
    currentNode = currentNode->next;
  }
  // return
  return length;
}

int Count(Node *head, int data)
{
  // Start with head node
  Node* currentNode = head;
  // check how many data matches there are
  int totalData = 0;
  // keep looping until we encounter a null node (loop never runs if head node is null)
  while(currentNode != nullptr) {
    // for every data match, icnrement count
    if(currentNode->data == data) {
      totalData++;
    }
    // go to next node
    currentNode = currentNode->next;
  }
  // return
  return totalData;
}
