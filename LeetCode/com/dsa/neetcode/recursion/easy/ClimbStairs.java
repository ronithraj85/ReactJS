package com.dsa.neetcode.recursion.easy;


class SolutionForClimbStairs{
    public int climbStairs(int n){
        if(n<=2)
            return n;
        return climbStairs(n-1) + climbStairs(n-2);
    }
}
// this works but exceeds time limit for large n, so we do it using dp or memoization.
public class ClimbStairs {
    public static void main(String[] args) {
        ClimbStairs cS = new ClimbStairs();
        SolutionForClimbStairs sCS = new SolutionForClimbStairs();
        int n = 45;
        int ways = sCS.climbStairs(n);
        System.out.println("Number of ways to climb "+n+" stairs is="+ways);
    }
}
