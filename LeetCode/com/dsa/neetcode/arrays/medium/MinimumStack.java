package com.dsa.neetcode.arrays.medium;

import java.util.Collections;
import java.util.Stack;

public class MinimumStack{
    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println("Minimum element is: " + minStack.getMin()); // return -3
        minStack.pop();
        System.out.println("Top element is: " + minStack.top());    // return 0
        System.out.println("Minimum element is: " + minStack.getMin()); // return -2
    }
}

class MinStack {


    Stack<Integer> minStack;

    public MinStack() {
    minStack = new Stack<>();
    }

    public void push(int val) {
        minStack.push(val);
    }

    public void pop() {
    minStack.pop();
    }

    public int top() {
    return minStack.peek();
    }

    public int getMin() {
    return Collections.min(minStack);
    }
}

