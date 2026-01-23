package com.dsa.easy.slidingwindow;


class LHSolution {
    //Add your methods here
    public int LongestHarmoniousSubsequence(int... arr) {
        arr = java.util.Arrays.stream(arr).sorted().toArray();
        int maxLen = 0;
        int len = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] - arr[i] == 1) {
                    len = 0;
                    for (int k = i; k <= j; k++) {
                        if (arr[k] == arr[i] || arr[k] == arr[j]) {
                            len++;
                        }
                    }
                }
            }
        }
        return len;
    }

}

public class LHS {
    public static void main(String[] args) {
        LHSolution lhs = new LHSolution();
        int res = lhs.LongestHarmoniousSubsequence(1,3,2,2,5,2,3,7);
        System.out.println("Length of Longest Harmonious Subsequence is=" + res);
    }
}
