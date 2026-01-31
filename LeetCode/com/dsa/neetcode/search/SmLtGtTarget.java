package com.dsa.neetcode.search;

class SolutionBFNextChar{
   /* public char nextGreatestLetter(char target, char... letters){
        char max_ch=target;
        for(char c:letters){
            int num = (int)c ;
            if(num>((int)target)&&(num<=(int)max_ch)){
                max_ch =c;
            }
        }
        char res =max_ch!=target?max_ch:letters[0];
        return res;
    }*/
   public char nextGreatestLetter(char target, char... letters) {
       if (letters == null || letters.length == 0) throw new IllegalArgumentException("letters must be non-empty");

       char candidate = 0;
       boolean found = false;

       for (char c : letters) {
           if (c > target) {
               if (!found || c < candidate) {
                   candidate = c;
                   found = true;
               }
           }
       }

       return found ? candidate : letters[0];
   }

   public char nextGreatestLetterBinarySearch(char target, char... letters) {
       int left = 0;
       int right = letters.length - 1;
       while (left <= right) {
           int mid = left + (right - left) / 2;
           if (letters[mid] <= target) {
               left = mid + 1;
           } else {
               right = mid - 1;
           }
       }
       return letters[left % letters.length];
   }

}

public class SmLtGtTarget {
    public static void main(String[] args) {
        char[] letters=new char[]{'c','f','j'};
        char target='a';
        SolutionBFNextChar sBNGC=new SolutionBFNextChar();
        char result=sBNGC.nextGreatestLetter(target,letters);
        System.out.println("The smallest letter greater than " + target + " is: " + result);
        char res =sBNGC.nextGreatestLetterBinarySearch(target,letters);
        System.out.println("Using Binary Search, the smallest letter greater than " + target + " is: " + res);
    }
}
