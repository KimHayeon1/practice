function solution(N, M, K, nums) {
  // 큰 수에서 작은 수로 정렬
  nums.sort((a, b) => b - a);
  let result = 0;
  for (let i = 1; i <= M; i++) {
    if (i % (K+1) === 0) {
      result += nums[1];
    } else {
      result += nums[0];
    }
  }
  return result;
}

// 시간 개선
function solution(N, M, K, nums) {
  nums.sort((a, b) => b - a);

  if (M === K) {
    return nums[0] * K;
  }

  const pattern = nums[0] * K + nums[1];
  return pattern * ~~(M / (K+1)) + nums[0] * (M % (K+1));
}

// 도서 답안 JS로 풀기
function solution(N, M, K, nums) {
  nums.sort((a, b) => b - a);

  // 가장 큰 수가 더해지는 횟수
  const count = ~~(M / (K+1)) * K + M % (K+1);

  return count * nums[0] + (M - count) * nums[1];
}
solution(5, 8, 3, [2, 4, 5, 4, 6]);