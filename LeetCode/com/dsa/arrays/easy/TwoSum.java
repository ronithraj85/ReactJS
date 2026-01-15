package com.dsa.arrays.easy;

import java.util.HashMap;

class Solution{
    public int[] twoSumSolution(int t,int... arr){
        HashMap<Integer, Integer> hMap = new HashMap<>();
        int index1 = 0,index2=0;
        for(int i=0;i<arr.length;i++){
            if(hMap.containsKey(t-arr[i])){
                index1= hMap.get(t-arr[i]);
                index2=i;
            }
            else{
                hMap.put(arr[i],i);
            }
        }
        return new int[]{index1,index2};
    }
}

public class TwoSum {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] res = s.twoSumSolution(9,new int[]{2,7,11,15});
        System.out.println("Target value-9 is sum of two indices at locations-["+res[0]+","+res[1]+"]");
    }

}
