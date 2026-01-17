package com.dsa.arrays.easy;

class BinarySearch{
    public int searchInsertPosition(int[] arr, int target){
        int left=0, right=arr.length-1;
        while(left<=right){
            int mid = left + (right-left)/2;
            if(arr[mid]==target){
                return mid;
            }
            else if(arr[mid]<target){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
        return left;
    }
}

public class SearchInsert {
    public static void main(String[] args) {
        BinarySearch bs = new BinarySearch();
        int pos1 = bs.searchInsertPosition(new int[]{1,3,5,6},2);
        System.out.println("Position of target 5 is at index="+pos1);
    }
}
