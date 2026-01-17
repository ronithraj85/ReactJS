package com.dsa.arrays.easy;

class SolutionPO{
    public int[] plusOne(int... arr){
        int n = arr.length;
        for(int i=n-1;i>=0;i--){
            if(arr[i]<9){
                arr[i]++;
                return arr;
            }
            arr[i]=0;
        }
        int[] newArr = new int[n+1];
        newArr[0]=1;
        return newArr;
    }
}

public class PlusOne {
    public static void main(String[] args) {
        SolutionPO sol = new SolutionPO();
        int[] res = sol.plusOne(1,2,9);
        System.out.println("Array after adding one is="+ java.util.Arrays.toString(res));
    }
}
