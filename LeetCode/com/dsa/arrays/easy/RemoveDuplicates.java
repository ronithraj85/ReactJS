package com.dsa.arrays.easy;


import java.util.Arrays;
import java.util.HashSet;

class BruteForceSolution{
    public int[] removeDuplicates(int... arr){
        //If order needs to be maintained use LinkedHashSet. This works fine even for non-sorted arrays.
        HashSet<Integer> set = new HashSet<>();
        for(int num:arr){
            set.add(num);
        }
        //set.stream.mapToInt(i->i.intValue()).toArray(); , this is same as below method reference.
        //intValue() - Returns the value of this Integer as an int.
        return set.stream().mapToInt(Integer::intValue).toArray();
    }
    public int[] removeDuplicatesOneLiner(int... arr){
        return Arrays.stream(arr).distinct().toArray();
    }
}

class OptimalSolution{
    public int removeDuplicatesOptimal(int[] arr) {
        if (arr.length == 0) return 0;

        int l = 0;
        for (int right = 1; right < arr.length; right++) {
            if (arr[l] != arr[right]) {
                l++;
                arr[l] = arr[right];
            }
        }
        return l + 1; // number of unique elements
    }
}

public class RemoveDuplicates {
    public static void main(String[] args) {
        BruteForceSolution bfs = new BruteForceSolution();
        int[] res = bfs.removeDuplicates(new int[]{1,1,2,2,3,4,4,5});
        System.out.println("Array after removing duplicates is="+ Arrays.toString(res));
        int[] resOL = bfs.removeDuplicatesOneLiner(new int[]{1,1,2,2,3,4,4,5});
        System.out.println("Array after removing duplicates is="+ Arrays.toString(resOL));
        OptimalSolution os = new OptimalSolution();
        int resOpt = os.removeDuplicatesOptimal(new int[]{1,1,2,2,3,4,4,5});
        System.out.println("Length after removing duplicates optimally is="+ resOpt);
    }
}
