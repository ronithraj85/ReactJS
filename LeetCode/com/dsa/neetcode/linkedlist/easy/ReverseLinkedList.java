package com.dsa.neetcode.linkedlist.easy;

class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

class SolutionForReverseLinkedList {
    public ListNode reverseTheList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}

public class ReverseLinkedList {
    public static void main(String[] args) {
        SolutionForReverseLinkedList solutionForReverseLinkedList = new SolutionForReverseLinkedList();
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        ListNode temp = head;
        System.out.println("Original Linked List:");
        while (temp != null) {
            System.out.print(temp.val + " -> ");
            temp = temp.next;
        }
       ListNode reversedHead = solutionForReverseLinkedList.reverseTheList(head);
        System.out.println("\nReversed Linked List:");
        ListNode curr = reversedHead;

        while (curr != null) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }
    }
}
