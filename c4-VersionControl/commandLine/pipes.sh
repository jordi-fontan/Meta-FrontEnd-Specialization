#!/bin/bash

cd archive
cd submissions
ls
cat file1.txt # shows content
wc file1.txt -w
#181

ls | wc -w
# 2

cat file1.txt | wc -w
#181

cat file1.txt file2.txt | wc -c
#38
