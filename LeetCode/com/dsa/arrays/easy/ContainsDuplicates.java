package com.dsa.arrays.easy;

class SolutionCD{
    public boolean containsDuplicate(int... arr){
        java.util.HashSet<Integer> set = new java.util.HashSet<>();
        for(int num:arr){
            if(set.contains(num)){
                return true;
            }
            set.add(num);
        }
        return false;
    }
}

public class ContainsDuplicates {
    public static void main(String[] args) {
        SolutionCD scd = new SolutionCD();
        boolean res = scd.containsDuplicate(1,2,3,4,5,1);
        System.out.println("Array contains duplicates: "+res);
    }
}
