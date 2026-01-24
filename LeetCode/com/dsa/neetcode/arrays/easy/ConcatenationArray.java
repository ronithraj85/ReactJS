package com.dsa.neetcode.arrays.easy;


class SolutionForConcatenatingArray{
    public int[] concatenateArray(int[] nums){
        int[] ans = new int[2*nums.length];
        int a_counter = 0;
        for(int i=0;i<nums.length;++i){
            ans[a_counter]=nums[i];
            a_counter++;
        }
        for(int i=0;i<nums.length;++i){
            ans[a_counter]=nums[i];
            a_counter++;
        }
        return ans;
    }
}

class SolutionForConcatenatingArrayTwoPointer{
    public int[] concatenateArray(int[] nums){
        int n=nums.length;
        int[] ans = new int[2*n];
        for(int i=0;i<n;i++){
            ans[i]=nums[i];
            ans[i+n]=nums[i];
        }
        return ans;
    }
}

public class ConcatenationArray {
    public static void main(String[] args) {
        SolutionForConcatenatingArray sfca = new SolutionForConcatenatingArray();
        int[] res = sfca.concatenateArray(new int[]{1,2,3});
        System.out.println("Concatenated array is=");
        for(int num:res){
            System.out.print(num+" ");
        }
        System.out.println();
        SolutionForConcatenatingArrayTwoPointer sfcatp = new SolutionForConcatenatingArrayTwoPointer();
        int[] resTP = sfcatp.concatenateArray(new int[]{4,5,6});
        System.out.println("Concatenated array using two pointer approach is=");
        for(int num:resTP){
            System.out.print(num+" ");
    }
        }
}
