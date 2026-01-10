
class SortingAction{
    void bubbleSort(int... args){
        int n=args.length;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(args[j]>args[j+1]){
                    int temp = args[j];
                    args[j]=args[j+1];
                    args[j+1]=temp;
                }
            }
        }
    }

    void printArray(int... arr){
        int n=arr.length;
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }

}

public class BubbleSort {

    public static void main(String[] args) {
        SortingAction sa = new SortingAction();
        int[] arr = {10,5,40,15,50,6};
        sa.bubbleSort(arr);
        sa.printArray(arr);
    }
}
