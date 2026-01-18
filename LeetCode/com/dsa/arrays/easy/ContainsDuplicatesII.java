package com.dsa.arrays.easy;

import java.util.HashMap;

class SolutionCDII {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
            HashMap<Integer, Integer> map = new HashMap<>();

            for (int i = 0; i < nums.length; i++) {
                if (map.containsKey(nums[i])) {
                    int prevIndex = map.get(nums[i]);
                    if (i - prevIndex <= k) {
                        return true;
                    }
                }
                // Always update latest index
                map.put(nums[i], i);
            }

            return false;
        }

    }


public class ContainsDuplicatesII {
    static void main() {
    SolutionCDII s = new SolutionCDII();
    boolean b =s.containsNearbyDuplicate(new int[]{1,2,3,1}, 3);
    boolean b1 =s.containsNearbyDuplicate(new int[]{1,0,1,1}, 1);
    boolean b2 =s.containsNearbyDuplicate(new int[]{1,2,3,1,2,3}, 2);
        System.out.println(b);
        System.out.println(b1);
        System.out.println(b2);
    }

}
