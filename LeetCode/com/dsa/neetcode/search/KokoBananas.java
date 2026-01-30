package com.dsa.neetcode.search;

import java.util.Arrays;

class SolutionKBananas {
    public int minEatingSpeed(int[] piles, int h) {
        int l = 1;
        int r = Arrays.stream(piles).max().getAsInt();
        int res = r;

        while (l <= r) {
            int k = (l + r) / 2;

            long totalTime = 0;
            for (int p : piles) {
                totalTime += Math.ceil((double) p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}

public class KokoBananas {
    public static void main(String[] args) {
        SolutionKBananas solution = new SolutionKBananas();
        int[] piles = {3, 6, 7, 11};
        int h = 8;
        int result = solution.minEatingSpeed(piles, h);
        System.out.println("Minimum eating speed: " + result); // Output: 4
    }
}
