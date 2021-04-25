/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Delete Node in a Linked List
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
var deleteNode = function (node) {
    node.val = node.next.val;
    let nextNode = node.next;
    node.next = node.next.next;
    nextNode.next = null;
};

// Reverse a linked list
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
var reverseList = function (head) {
    let prev = null, node = head;
    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};

// Palindrome linked list
// Input: head = [1,2,2,1]
// Output: true
var isPalindrome = function (head) {
    let stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < stack.length / 2; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) return false;
    }
    return true;
};

// Intersection of Two Linked Lists
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
// Output: Intersected at '8'
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    var curA = headA;
    var curB = headB;
    while (curA != curB) {
        curA = curA == null ? headB : curA.next;
        curB = curB == null ? headA : curB.next;
    }
    return curA;
};

// Merge 2 linked list
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const temp = new ListNode(0);
    let curr = temp;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1) curr.next = l1;
    if (l2) curr.next = l2;
    return temp.next;
};