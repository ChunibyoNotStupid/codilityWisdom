/*

A 是由 N 个整数组成的非空数组。
如果一个元素在数组中出现次数过半，那么这个元素叫做数组的 领导者

一个数组可以拆分成两个序列 
	A[0], A[1], ..., A[S] 和 A[S + 1], A[S + 2], ..., A[N − 1] 
	其中 0 <= S < N − 1

例如数组 A = [4, 3, 4, 4, 4, 2];
	当 S = 0 时 4 和 3, 4, 4, 4, 2 具有相同的 领导者
	当 S = 2 时 4，3，4 和 4，4，2 具有相同的 领导者

现在我们要写一个函数，统计数组拆分后拥有相同 领导者 数组的数量。

例如刚才的例子 我们需要返回 2

*/

function solution(A) {
	const arrOne = [];

	A.forEach((item) => {
		if (arrOne[item] === undefined) {
			arrOne[item] = 1;
		} else {
			arrOne[item] += 1;
		}
	});

}