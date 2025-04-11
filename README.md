# funny
funny
>how to install any aplication.<
hdiutil imageinfo /path/to/file.dmg
hdiutil attach /path/to/uni.dmg -nomount
>take this output and save it<
mkdir ~/mnt
mount -t hfs -o rdonly /dev/disk4s1 ~/mnt
>then open<
