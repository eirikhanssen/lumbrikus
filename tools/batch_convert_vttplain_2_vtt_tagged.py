#!/usr/bin/python3
chapters = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
ch_len = len(chapters)
languages = ["NO", "AR", "SO", "TI"]
variations = ["K", "L"]
output = "\n"

def chain(ch, kl, lang):
    # chain next command with && unless it is the last command
    if ch == chapters[-1] and kl == variations[-1] and lang == languages[-1]:
        return ""
    else:
        return " && "

for ch in chapters:
    for kl in variations:
        for lang in languages:
            filename = lang + "_" + ch + kl + ".vtt"
            output += "vtt_plain_2_vtt_tagged.py " + filename + " > ../vtt/" + filename + chain(ch,kl,lang)
            
print(output)

