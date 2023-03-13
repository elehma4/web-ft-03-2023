#!/bin/bash

weeks=( week01 week02 week03 week04 week05 week06 week07 week08 week09 week10 week11 week12 week13 week14 week15 week16 week17 )
days=(1-Monday 2-Tuesday 3-Wednesday 4-Thursday 5-Friday)
for week in "${weeks[@]}"
do
	echo $i
    mkdir "${week}"
    touch "${week}/README.md"
    
    for day in "${days[@]}"
    do
        echo $day

        # rm -rf "${week}/${day}/classLabs"
        mkdir "${week}/${day}"
        # mkdir "${week}/${day}/lectureCode"
        # touch "${week}/${day}/lectureCode/README.md"
        # touch "${week}/${day}/labs/.gitignore"
        mkdir "${week}/${day}/MY-LectureNotes"
        touch "${week}/${day}/MY-LectureNotes/.gitignore"
        mkdir "${week}/${day}/veros-class-notes-dont-touch"
        touch "${week}/${day}/veros-class-notes-dont-touch/.gitignore"
        # touch "${week}/${day}/classLabs/classLab2.md"
        # mkdir "${week}/${day}/homework/solutions"
        # touch "${week}/${day}/homework/README.md"

        # mkdir "${week}"
        
        # mkdir "${week}/${day}"
        
        touch "${week}/${day}/.gitignore"
        printf "file.sh" > "${week}/${day}/.gitignore" 
        touch "${week}/${day}/README.md"
        "${week}/${day}/README.md > #Week ${week} - ${day}"

    done
done