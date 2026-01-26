package com.dsa.neetcode.arrays.easy;

import java.util.Stack;

class checkForValidParanthesis {
    public boolean isValidParanthesis(String s) {
        Stack<Character> stack = new Stack<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char top = stack.pop();
                if ((ch == ')' && top != '(') || (ch == '}' && top != '{') || (ch == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}

public class ValidParanthesisStack {
    public static void main(String[] args) {
        checkForValidParanthesis cpfp = new checkForValidParanthesis();
        String s = "{[()]}";
        boolean res = cpfp.isValidParanthesis(s);
        System.out.println("Is the paranthesis valid for the string "+s+" ? : "+res);
    }
}

