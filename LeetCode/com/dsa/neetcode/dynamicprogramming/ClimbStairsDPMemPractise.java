package com.dsa.neetcode.dynamicprogramming;

import java.util.HashMap;

class SolutionDPClimbStairs{
    public int climbStairs(int n){
        HashMap<Integer, Integer> dp = new HashMap<>();
        return climbStairsHelper(n, dp);
        }
        public int climbStairsHelper(int n, HashMap<Integer, Integer> dp){
        if(n<=2)
            return n;
        if(dp.containsKey(n))
            return dp.get(n);
        int ways = climbStairsHelper(n-1, dp) + climbStairsHelper(n-2, dp);
        dp.put(n, ways);
        return ways;
        }
}


public class ClimbStairsDPMemPractise {
    public static void main(String[] args) {
        SolutionDPClimbStairs sDPCS = new SolutionDPClimbStairs();
        int n = 5;
        int ways = sDPCS.climbStairs(n);
        System.out.println("Number of ways to climb " + n + " stairs is=" + ways);
    }
}
