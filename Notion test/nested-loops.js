(
    if(prop("Habit 1") == true, "■", "") + 
    if(prop("Habit 2") == true, "■", "") + 
    if(prop("Habit 3") == true, "■", "") + 
    if(prop("Habit 4") == true, "■", "") + 
    if(prop("Habit 5") == true, "■", "") + 
    if(prop("Habit 6") == true, "■", "") + 
    if(prop("Habit 7") == true, "■", "") + 
    if(prop("Habit 8") == true, "■", "") + 
    if(prop("Habit 9") == true, "■", "") + 
    if(prop("Habit 10") == true, "■", "") + 
    if(prop("Habit 11") == true, "■", "") + 
    if(prop("Habit 1") == true, "", "□") + 
    if(prop("Habit 2") == true, "", "□") + 
    if(prop("Habit 3") == true, "", "□") + 
    if(prop("Habit 4") == true, "", "□") + 
    if(prop("Habit 5") == true, "", "□") + 
    if(prop("Habit 6") == true, "", "□") + 
    if(prop("Habit 7") == true, "", "□") + 
    if(prop("Habit 8") == true, "", "□") + 
    if(prop("Habit 9") == true, "", "□") + 
    if(prop("Habit 10") == true, "", "□") + 
    if(prop("Habit 11") == true, "", "□") + 
    " " + 
    format(
        round (
            (
                toNumber(if(prop("Habit 1"), "1", "0")) + 
                toNumber(if(prop("Habit 2"), "1", "0")) + 
                toNumber(if(prop("Habit 3"), "1", "0")) + 
                toNumber(if(prop("Habit 4"), "1", "0")) + 
                toNumber(if(prop("Habit 5"), "1", "0")) + 
                toNumber(if(prop("Habit 6"), "1", "0")) + 
                toNumber(if(prop("Habit 7") , "1", "0")) + 
                toNumber(if(prop("Habit 8"), "1", "0")) + 
                toNumber(if(prop("Habit 9"), "1", "0")) + 
                toNumber(if(prop("Habit 10"), "1", "0")) + 
                toNumber(if(prop("Habit 11"), "1", "0"))
            )/ 11 * 100 
        )
    ) + " %"
)