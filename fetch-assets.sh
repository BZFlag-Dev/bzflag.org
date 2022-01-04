#!/bin/sh

mkdir -p assets/videos
wget -O assets/videos/blank.mp4 https://cdn.plyr.io/static/blank.mp4

mkdir -p assets/videos/home
FILES="bzteaser laser super-bullet guided-missile"
for FILE in $FILES
do
    wget -O assets/videos/home/$FILE.mp4 https://f002.backblazeb2.com/file/bzflag-media/videos/home/$FILE.mp4
    wget -O assets/videos/home/$FILE.webm https://f002.backblazeb2.com/file/bzflag-media/videos/home/$FILE.webm
done


mkdir -p assets/videos/documentation/flags/
FLAGS="laser"
for FLAG in $FLAGS
do
    wget -O assets/videos/documentation/flags/$FLAG.mp4 https://f002.backblazeb2.com/file/bzflag-media/videos/documentation/flags/$FLAG.mp4
    wget -O assets/videos/documentation/flags/$FLAG.webm https://f002.backblazeb2.com/file/bzflag-media/videos/documentation/flags/$FLAG.webm
done
