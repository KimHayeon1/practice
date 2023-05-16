function solution(n) {
  let count = 0;
  coin_types = [500, 100, 50, 10];

  coin_types.forEach(coin => {
    count += ~~(n / coin);
    n %= coin;
  })

  return count;
}

solution(1260);