#!/usr/bin/python3
import sys
import re
f=open(sys.argv[1], 'r')
filename = sys.argv[1]
cuecounter = 0
current_line = ""
closepara = False
output = ""
last_timecode=""
srclang=""
r_timecode = re.compile("(\d+:\d+[.]\d+) --> (\d+:\d+[.]\d+)")
r_track_lang_and_num = re.compile("^.*?([a-zA-Z][a-zA-Z])_(\d+[lkLK]).*$")

def handle_line(txt):
    print("placeholder")

def store_last_timecode(txt):
    global cuecounter
    global last_timecode
    cuecounter += 1
    last_timecode = txt

def is_vtt(txt):
    r_webvtt = re.compile("WEBVTT")
    if cuecounter == 0 and r_webvtt.match(txt):
        return True
    else:
        return False

def is_timecode(txt):
    r_timecode_search = re.compile("(\d+:\d+)[.](\d+)")
    if r_timecode_search.match(txt):
        return True
    else:
        return False

def is_blank(txt):
    r_blankline = re.compile("^\s*$")
    if r_blankline.match(txt):
        return True
    else:
        return False

def get_srclang(txt):
    if r_track_lang_and_num.match(txt):
        return r_track_lang_and_num.match(txt).group(1).lower()
    else:
        return ""

def get_dir_attr(txt):
    srclang = ""
    if r_track_lang_and_num.match(txt):
        srclang = get_srclang(txt)
    if srclang == 'ar':
        return " dir=\"rtl\""
    else:
        return ""

def begin_vtt():
    global output
    output = output + "WEBVTT\n"

def begin_cue_n(txt):
    global output
    # close the previous cue
    output += "</div>\n"
    # begin the new cue
    begin_cue(txt)

def get_begin_time(timecode):
    global r_timecode
    begin_time = r_timecode.match(timecode).group(1)
    return begin_time

def get_end_time(timecode):
    global r_timecode
    end_time = r_timecode.match(timecode).group(2)
    return end_time

def begin_cue(txt):
    global filename
    global cuecounter
    id = str(cuecounter)
    global last_timecode
    global output
    close_cue_string=""
    if cuecounter > 1:
        close_cue_string = "</div>"
    output += close_cue_string + "\n\n" + id + "\n" + last_timecode.rstrip() + "\n" + '<div class="key"' + get_dir_attr(filename) + ' data-key="' + id +  '"' + ">\n"

def process_line_of_text(txt):
    global last_timecode
    global output
    output += '<p>' + txt.rstrip() + '</p>' + "\n"

def close_last_cue():
    global output
    output += "</div>\n"
    
for line in f:
    if (is_vtt(line)):
        begin_vtt()
    elif is_blank(line):
        pass
    elif is_timecode(line):
        store_last_timecode(line)
        begin_cue(line)
    else:
        process_line_of_text(line)

f.close()
close_last_cue()
print(output)
