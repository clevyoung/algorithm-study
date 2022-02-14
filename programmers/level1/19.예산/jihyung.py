def solution(department_need_budgets, budget):
    sorted_department_need_budgets = sorted(department_need_budgets)

    can_assign_count = 0
    for department_need_budget in sorted_department_need_budgets:
        if budget >= department_need_budget:
            budget -= department_need_budget
            can_assign_count += 1
            continue
        else:
            break
    return can_assign_count


print(solution([1, 3, 2, 5, 4], 9))  # 3
