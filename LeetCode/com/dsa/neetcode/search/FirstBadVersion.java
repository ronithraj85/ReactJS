package com.dsa.neetcode.search;

class VersionControl {
    public boolean isBadVersion(int num, int version) {
        return num >= version;
    }

  /* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

        public int firstBadVersion(int n, int p) {
            int l = 1, r = n, res = -1;
            while (l <= r) {
                int m = l + (r - l) / 2;
                if (isBadVersion(m, p)) {
                    res = m;
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            return res;
        }

}


public class FirstBadVersion {
    public static void main(String[] args) {
        int n = 1;
        int badVersion = 1;
        VersionControl vc = new VersionControl();
        int firstBad = vc.firstBadVersion(n, badVersion);
        System.out.println("First bad version is=" + firstBad);
    }
}
