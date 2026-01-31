package com.dsa.neetcode.search;

public class Sqrt {
    public static void main(String[] args) {
        int x = 36;
        int result = mySqrt(x);
        System.out.println("The integer square root of " + x + " is: " + result);
        int left = 2_000_000_000;
        int right = 2_100_000_000;

        int mid = (left + right) / 2;  // ❌ overflow happens here , often neg values. Integer.MAX_VALUE = 2,147,483,647
        System.out.println("Mid without overflow handling: " + mid);
    }
    public static int mySqrt(int x) {
        if (x < 2) {
            return x;
        }
        int left = 1;
        int right = x / 2;
        int result = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid;

            if (square == x) {
                return mid;
            } else if (square < x) {
                result = mid; // Update result to the current mid
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
