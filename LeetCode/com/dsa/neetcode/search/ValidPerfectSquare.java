package com.dsa.neetcode.search;

public class ValidPerfectSquare {
    public static void main(String[] args) {
        int num = 16;
        boolean result = isPerfectSquare(num);
        System.out.println("Is " + num + " a perfect square? " + result);
    }
    public static boolean isPerfectSquare(int num){
        if(num<2){
            return true;
        }
        int left = 2;
        int right = num / 2;
        while(left <= right){
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid;
            if(square == num){
                return true;
            } else if(square < num){
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }
        return false;
    }
}
