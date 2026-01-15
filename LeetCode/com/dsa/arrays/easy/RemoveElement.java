package com.dsa.arrays.easy;

import java.util.Arrays;

class BruteForceSolutionRE{
    public int[] removeElems(int val, int... arr){
        return Arrays.stream(arr).filter(num->num!=val).toArray();
    }
}
class REOptSolution{
    public int[] removeElementsOptimal(int val, int...arr){
        int l=0;
        for(int r=0;r<arr.length;r++){
            if(arr[r]!=val){
                arr[l]=arr[r];
                l++;
            }
        }
        return Arrays.copyOf(arr, l);
    }
}

public class RemoveElement {
    public static void main(String[] args) {
        BruteForceSolutionRE bfs = new BruteForceSolutionRE();
        int[] res = bfs.removeElems(2,new int[]{3,2,2,3,4,2,5});
        System.out.println("Array after removing element 2 is="+ Arrays.toString(res));
        REOptSolution reos = new REOptSolution();
        int[] resOpt = reos.removeElementsOptimal(2,new int[]{3,2,2,3,4,2,5});
        System.out.println("Array after removing element 2 optimally is="+ Arrays.toString(resOpt));
    }
}
