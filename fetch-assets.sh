#!/bin/sh
FLAGS="laser"


mkdir -p assets/videos/home
wget -c -O assets/videos/home/bzteaser.mp4 https://f002.backblazeb2.com/file/bzflag-media/videos/home/bzteaser.mp4
wget -c -O assets/videos/home/bzteaser.webm https://f002.backblazeb2.com/file/bzflag-media/videos/home/bzteaser.webm

mkdir -p assets/videos/documentation/flags/
for FLAG in $FLAGS
do
    wget -c -O assets/videos/documentation/flags/$FLAG.mp4 https://f002.backblazeb2.com/file/bzflag-media/videos/documentation/flags/$FLAG.mp4
    wget -c -O assets/videos/documentation/flags/$FLAG.webm https://f002.backblazeb2.com/file/bzflag-media/videos/documentation/flags/$FLAG.webm
done
