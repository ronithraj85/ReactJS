package com.dsa.arrays.easy;

import java.util.HashMap;

class Solution{
    public int[] twoSumSolution(int t,int... arr){
        HashMap hs = new HashMap();
        int d=0,ind1=0,ind2=0;
        for(int i=0;i<arr.length;i++){
            int n = t-arr[i];
            if(hs.containsKey(n)){
                ind1 = (int) hs.get(n);
                ind2 = i;
            }
            else{
                hs.put(arr[i],i);
            }
        }
        return new int[]{ind1,ind2};    }
}

public class TwoSum {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] res = s.twoSumSolution(9,new int[]{2,7,11,15});
        System.out.println("Target value-9 is sum of two indices at locations-["+res[0]+","+res[1]+"]");
    }

}
