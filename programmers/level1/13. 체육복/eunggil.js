function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let stuArr = [];
    
    for (i in lost){
        if(reserve.includes(lost[i])){
            answer++
        } else {
            stuArr.push(lost[i] - 1)
        }
    }
    
    for(i in stuArr) { 
        if (reserve.includes(stuArr[i])) {
            answer ++
        } else if(reserve.includes(stuArr[i])){
            answer ++
        }
    }
    
    
    return answer;
}

solution(5,[2, 4],[1, 3, 5]) // solved
solution(5,[2, 4],[3]) // solved
solution(3,[3],[1]) // solved