// 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。(打扑克牌的时候抓牌排序)
// 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
function insertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break
            }
        }
    }
    return arr;
}
