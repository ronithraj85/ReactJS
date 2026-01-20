package com.dsa.arrays.easy;


class SolutionBySorting{
    public boolean isAnagram(String s, String t){
        if(s.length()!=t.length()){
            return false;
        }
        char[] arr1 = s.toCharArray();
        char[] arr2 = t.toCharArray();
        java.util.Arrays.sort(arr1);
        java.util.Arrays.sort(arr2);
        return java.util.Arrays.equals(arr1, arr2);
    }
}

class SolutionByHashMap{
    public boolean isAnagram(String s, String t){
        if(s.length()!=t.length()){
            return false;
        }
        java.util.HashMap<Character, Integer> charCountMap = new java.util.HashMap<>();
        for(char c:s.toCharArray()){
            charCountMap.put(c, charCountMap.getOrDefault(c, 0)+1);
        }
        for(char c:t.toCharArray()){
            if(!charCountMap.containsKey(c)){
                return false;
            }
            charCountMap.put(c, charCountMap.get(c)-1);
            if(charCountMap.get(c)==0){
                charCountMap.remove(c);
            }
        }
        return charCountMap.isEmpty();
    }
}

class SolutionAlphaCount {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }
        return true;
    }
}
public class ValidAnagrams {
    public static void main(String[] args) {
    SolutionBySorting sol1 = new SolutionBySorting();
    SolutionByHashMap sol2 = new SolutionByHashMap();
    SolutionAlphaCount sol3 = new SolutionAlphaCount();
    String s = "anagram";
    String t = "nagaram";
/*    boolean res1 = sol1.isAnagram(s, t);
    boolean res2 = sol2.isAnagram(s, t);*/
    boolean res3 = sol3.isAnagram(s, t);
    /*System.out.println("Are '"+s+"' and '"+t+"' anagrams (by sorting)? "+res1);
    System.out.println("Are '"+s+"' and '"+t+"' anagrams (by HashMap)? "+res2);*/
    System.out.println("Are '"+s+"' and '"+t+"' anagrams (by Alpha Count)? "+res3);
    }
}
