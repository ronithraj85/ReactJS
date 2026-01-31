package com.dsa.neetcode.search;

class SolutionBFNextChar{
    public char nextGreatestLetter(char target, char... letters){
        char max_ch=target;
        for(char c:letters){
            int num = c - 'a';
            if(num>(target-'a')&&(num<=max_ch-'a')){
                max_ch =c;
            }
        }
        char res =max_ch!=target?max_ch:letters[0];
        return res;
//        return letters[0];
    }
}

public class SmLtGtTarget {
    public static void main(String[] args) {
        char[] letters=new char[]{'c','f','j'};
        char target='c';
        SolutionBFNextChar sBNGC=new SolutionBFNextChar();
        char result=sBNGC.nextGreatestLetter(target,letters);
        System.out.println("The smallest letter greater than " + target + " is: " + result);
    }
}
