package com.dsa.neetcode.dynamicprogramming;


// This is also called top-down DP approach.
public class ClimbStairsMemoization {
    public int climbStairs(int n) {
        int[] memo = new int[n + 1];
        return climbStairsHelper(n, memo);
    }

    private int climbStairsHelper(int n, int[] memo) {
        if (n <= 2) {
            return n;
        }
        if (memo[n] != 0) {
            return memo[n];
        }
        memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
        return memo[n];
    }

    public static void main(String[] args) {
        ClimbStairsMemoization cSM = new ClimbStairsMemoization();
        int n = 45;
        int ways = cSM.climbStairs(n);
        System.out.println("Number of ways to climb " + n + " stairs is=" + ways);
    }
}
