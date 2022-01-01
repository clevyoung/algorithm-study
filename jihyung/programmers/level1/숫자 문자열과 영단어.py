def solution(s):
    number_code = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }

    answer = ""
    string_number = ""
    for string in s:
        if string.isdigit():
            answer += string
        else:
            string_number += string
            if string_number in number_code:
                answer += str(number_code[string_number])
                string_number = ""

    return int(answer)


print(solution("one4seveneight"))  # 1478


def other_solution(s):
    words = ['zero', 'one', 'two', 'three', 'four',
             'five', 'six', 'seven', 'eight', 'nine']
    # 0       1      2        3       4       5       6       7       8       9
    for i in range(len(words)):
        s = s.replace(words[i], str(i))

    return int(s)


def other_solution2(s):
    num_dic = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
               "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}
    answer = s
    for key, value in num_dic.items():
        answer = answer.replace(key, value)
    return int(answer)
