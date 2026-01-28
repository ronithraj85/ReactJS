package com.dsa.neetcode.search;

class SolutionForBinarySearch {
    public int binarySearch(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid =( left + right) / 2;

            if (nums[mid] == target) {
                return mid; // Target found
            } else if (nums[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }

        return -1; // Target not found
    }
}

public class BinarySearch {
    public static void main(String[] args) {
SolutionForBinarySearch sBS = new SolutionForBinarySearch();
        int[] nums = { -1, 0, 3, 5, 9, 12 };
        int target = 9;
        int result = sBS.binarySearch(nums, target);
        if (result != -1) {
            System.out.println("Target " + target + " found at index: " + result);
        } else {
            System.out.println("Target " + target + " not found in the array.");
        }
    }
}
