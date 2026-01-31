package com.dsa.neetcode.search;

public class ArrangeCoins {
    public static void main(String[] args) {
        int n = 8;
        int result = arrangeCoins(n);
        System.out.println("The maximum number of complete rows that can be formed with " + n + " coins is: " + result);
    }
    public static int arrangeCoins(int n) {
        int left = 0;
        int right = n;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            long coinsNeeded = (long) mid * (mid + 1) / 2;

            if (coinsNeeded == n) {
                return mid; // Exact match found
            } else if (coinsNeeded < n) {
                left = mid + 1; // Try for more rows
            } else {
                right = mid - 1; // Try for fewer rows
            }
        }

        return right; // right is the largest k where k(k+1)/2 <= n
    }
}
