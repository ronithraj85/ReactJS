package com.dsa.neetcode.search;

class Solution  {

    public int guess(int num, int pickedNum) {
        if(num>pickedNum)
            return 1;
        else if(num<pickedNum)
            return -1;
        else
            return 0;
    }

    public int guessNumber(int n,int p) {
        int l = 1, r = n;
        while (true) {
            int m = l + (r - l) / 2;
            int res = guess(m,p);
            if (res > 0) {
                l = m + 1;
            } else if (res < 0) {
                r = m - 1;
            } else {
                return m;
            }
        }
    }

}


public class BinarySearchRange {
    public static void main(String[] args) {
        int[] nums = {5,7,7,8,8,10};
        int target = 8;
        Solution sol = new Solution();
        int result = sol.guessNumber(5,3);
        System.out.println("Guessed number is=" + result);
    }


}
