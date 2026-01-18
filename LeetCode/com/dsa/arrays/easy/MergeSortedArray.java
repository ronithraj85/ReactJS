package com.dsa.arrays.easy;

class SolutionMergeArray {
    public int[] merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {
            if (nums1[i] <= nums2[j]) {
                nums1[k] = nums2[j];
                j--;
            } else {
                nums1[k] = nums1[i];
                i--;
            }
            k--;
        }

        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
        return nums1;
    }
}
class SolutionMergeArrayAlt {
    // O(m + n) time, O(m + n) extra space
    public int[] mergeWithExtraArray(int[] nums1, int m, int[] nums2, int n) {
        int[] out = new int[m + n];
        int i = 0, j = 0, k = 0;
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                out[k++] = nums1[i++];
            } else {
                out[k++] = nums2[j++];
            }
        }
        while (i < m) out[k++] = nums1[i++];
        while (j < n) out[k++] = nums2[j++];
        System.arraycopy(out, 0, nums1, 0, m + n);
        return nums1;
    }

    // O((m + n) log(m + n)) time, in-place (aside from sort overhead)
    public int[] mergeUsingSort(int[] nums1, int m, int[] nums2, int n) {
        System.arraycopy(nums2, 0, nums1, m, n);
        System.out.println("After copying nums2 into nums1: " + java.util.Arrays.toString(nums1));
        java.util.Arrays.sort(nums1, 0, m + n);
        return nums1;
    }
}

public class MergeSortedArray {
    public static void main(String[] args) {
        System.out.println("Merge Sorted Array Problem");
        SolutionMergeArray sma = new SolutionMergeArray();
        SolutionMergeArrayAlt smaAlt = new SolutionMergeArrayAlt();
         int[] mergedArraya = smaAlt.mergeUsingSort(new int[]{1,2,3,0,0,0},3,new int[]{2,5,6},3);
//        int[] mergedArray = sma.merge(new int[]{1,2,3,0,0,0},3,new int[]{2,5,6},3);
//        System.out.println("Merged Sorted Array="+ java.util.Arrays.toString(mergedArray));
    }
}
