package com.dsa.arrays.easy;

import java.util.Arrays;
import java.util.Comparator;

class SolutionLCP{
    public String solveTheProblem(String... arr){
        System.out.println(Arrays.toString(arr));
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        String minString = arr[0],maxString=arr[arr.length-1];
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<minString.length();i++){
            if(minString.charAt(i)==maxString.charAt(i)){
                sb.append(minString.charAt(i));
            }
            else{
                return sb.toString();
            }
        }
        return minString;
    }

    public String longestCommonPrefix(String[] arr) {
        if (arr == null || arr.length == 0) return "";

        // Take the first string as the initial prefix
        String prefix = arr[0];

        // Compare with each other string
        for (int i = 1; i < arr.length; i++) {
            // Shrink prefix until it matches the current string
            while (!arr[i].startsWith(prefix)) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }

}


public class LongestCommonPrefix {
    public static void main(String[] args) {
        SolutionLCP sol = new SolutionLCP();
       String sr = sol.solveTheProblem(new String[]{"aba","abc","abab"});
       String sr1 = sol.solveTheProblem(new String[]{"flower","flow","flight"});
       String noSortSol = sol.longestCommonPrefix(new String[]{"flower","flow","flight"});
        System.out.println("Result is-"+sr);
        System.out.println("Result without sorting is="+noSortSol);
    }
}
