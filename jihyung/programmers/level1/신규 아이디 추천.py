import string


def solution(strings):
    strings = list(strings)
    # 모든 대문자를 소문자로 치환
    for i in range(len(strings)):
        strings[i] = strings[i].lower()

    # 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든문자 제거
    string_filter = list(string.ascii_lowercase)
    for i in range(10):
        string_filter.append(str(i))
    string_filter.append('_')
    string_filter.append('-')
    string_filter.append('.')
    filtered = []
    for s in strings:
        if s in string_filter:
            filtered.append(s)

    # 연속되는 마침표 제거
    for i in range(1, len(filtered)):
        if filtered[i] == '.' and filtered[i-1] == '.':
            filtered[i-1] = '*'

    dot_popped = []
    for f in filtered:
        if f != '*':
            dot_popped.append(f)

    # 처음이나 끝에 있는 마침표 제거
    # 만약 빈문자열이라면 'a' 로 만듬
    try:
        if dot_popped[0] == '.':
            dot_popped.pop(0)
        if dot_popped[-1] == '.':
            dot_popped.pop()
    except:
        dot_popped = list(['a'])

    # 길이를 15개로 맞춤, 마지막 마침표 제거
    splited = dot_popped[0:15]
    if splited[-1] == '.':
        splited.pop()

    # 길이 2자이하라면 마지막문자를 이어서 길이 3까지 늘림
    while len(splited) <= 2:
        splited.append(splited[-1])

    return ''.join(splited)


print(solution("...!@BaT#*..y.abcdefghijklm"))  # "bat.y.abcdefghi"
