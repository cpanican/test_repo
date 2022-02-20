import numpy as np
from scipy.fft import *
from scipy.io import wavfile
from statistics import mean
from math import log2, pow
from midiutil.MidiFile import MIDIFile
import subprocess
import os

# Gets note from frequency
def note(freq):
    
    A4 = 440
    C0 = A4*pow(2, -4.75)
    name = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    h = round(12*log2(freq/C0))
    octave = h // 12
    n = h % 12
    note = name[n] + str(octave)
    return note

# Main function, takes the 'whistle' wav file and the path of the soundfonts as parameters
def freq(file, sf2_path):
    interval = 35
    # Converts file to mono
    sample_rate, data = wavfile.read(file)
    # If number of array dimensions > 1 
    if data.ndim > 1:
        data = data[:, 0]
    else:
        pass
    
    end_time = ((len(data) - 1)*1000)/sample_rate
    start_time = 0
    freq_list = []
    notes = []

    curr = start_time + interval    

    chunks = np.array_split(data, end_time/curr)
    vol = []
    cx = 0
    
    for chunk in chunks:
        vol.append((mean([abs(c) for c in chunk]), cx))
        cx += interval
    
    while curr <= end_time:
        # Data from start_time to end_time
        dataToRead = data[int(start_time * sample_rate / 1000) : int(curr * sample_rate / 1000) + 1]

        # Rapid Fourier Transform
        N = len(dataToRead)
        yf = rfft(dataToRead)
        xf = rfftfreq(N, 1 / sample_rate)

        # Get the most dominant frequency
        idx = np.argmax(np.abs(yf))
        freq = xf[idx]

        freq_list.append(freq)

        curr += interval

    # Splits the audio on quiet points
    counter = 0
    while counter < len(vol):
        frequencies = []
        while vol[counter][0] > 800:
            frequencies.append((freq_list[counter], vol[counter][1]))
            counter += 1
            if counter == len(vol):
                break
        counter += 1
        if len(frequencies) > 0:
            notes.append(frequencies)

    note_list = []

    for i in notes:
        note_list.append((note(mean([item[0] for item in i])), i[0][1]))

    # Note to MIDI number dictionary
    MIDI_note_dict = {
        'C-1': 0, 'C#-1': 1, 'D-1': 2, 'D#-1': 3, 'E-1': 4, 
        'F-1': 5, 'F#-1': 6, 'G-1': 7, 'G#-1': 8, 'A-1': 9, 
        'A#-1': 10, 'B-1': 11, 'C0': 12, 'C#0': 13, 'D0': 14, 
        'D#0': 15, 'E0': 16, 'F0': 17, 'F#0': 18, 'G0': 19, 
        'G#0': 20, 'A0': 21, 'A#0': 22, 'B0': 23, 'C1': 24, 
        'C#1': 25, 'D1': 26, 'D#1': 27, 'E1': 28, 'F1': 29, 
        'F#1': 30, 'G1': 31, 'G#1': 32, 'A1': 33, 'A#1': 34, 
        'B1': 35, 'C2': 36, 'C#2': 37, 'D2': 38, 'D#2': 39, 
        'E2': 40, 'F2': 41, 'F#2': 42, 'G2': 43, 'G#2': 44, 
        'A2': 45, 'A#2': 46, 'B2': 47, 'C3': 48, 'C#3': 49, 
        'D3': 50, 'D#3': 51, 'E3': 52, 'F3': 53, 'F#3': 54, 
        'G3': 55, 'G#3': 56, 'A3': 57, 'A#3': 58, 'B3': 59, 
        'C4': 60, 'C#4': 61, 'D4': 62, 'D#4': 63, 'E4': 64, 
        'F4': 65, 'F#4': 66, 'G4': 67, 'G#4': 68, 'A4': 69, 
        'A#4': 70, 'B4': 71, 'C5': 72, 'C#5': 73, 'D5': 74, 
        'D#5': 75, 'E5': 76, 'F5': 77, 'F#5': 78, 'G5': 79, 
        'G#5': 80, 'A5': 81, 'A#5': 82, 'B5': 83, 'C6': 84, 
        'C#6': 85, 'D6': 86, 'D#6': 87, 'E6': 88, 'F6': 89, 
        'F#6': 90, 'G6': 91, 'G#6': 92, 'A6': 93, 'A#6': 94, 
        'B6': 95, 'C7': 96, 'C#7': 97, 'D7': 98, 'D#7': 99, 
        'E7': 100, 'F7': 101, 'F#7': 102, 'G7': 103, 'G#7': 104, 
        'A7': 105, 'A#7': 106, 'B7': 107, 'C8': 108, 'C#8': 109, 
        'D8': 110, 'D#8': 111, 'E8': 112, 'F8': 113, 'F#8': 114, 
        'G8': 115, 'G#8': 116, 'A8': 117, 'A#8': 118, 'B8': 119, 
        'C9': 120, 'C#9': 121, 'D9': 122, 'D#9': 123, 'E9': 124, 
        'F9': 125, 'F#9': 126, 'G9': 127, 'G#9': 128
        }


    r_dict = {
        'piano': 0,
        'guitar': 1,
        'flute': 2,
        'bass': 3,
        'trumpet': 4,
        'organ': 5
    }

    # Min and Max frequency values in MIDI numbers for each instrument in r_dict
    insts = [(21, 108), (38, 97), (0, 72), (24, 60), (52, 83), (12, 117)]

    for inst in r_dict:
        # Creates MIDI object
        mf = MIDIFile(1)    
        track = 0   

        time = 0    
        mf.addTrackName(track, time, "Sample Track")
        mf.addTempo(track, time, 1200)

        channel = 0
        volume = 100

        # Changes note value if note frequency is above or below max or min frequencies respectively for each instrument
        for j in range(len(note_list)):
            while MIDI_note_dict[note_list[j][0]] > insts[r_dict[inst]][1] or MIDI_note_dict[note_list[j][0]] < insts[r_dict[inst]][0]:
                if MIDI_note_dict[note_list[j][0]] > insts[r_dict[inst]][1]:
                    for i in range(len(note_list)):
                        rem_octave = note_list[i][0][:-1] + str(int(note_list[i][0][-1])- 1)
                        if MIDI_note_dict[rem_octave] >= insts[r_dict[inst]][0]:
                            note_list[i] = (rem_octave, note_list[i][1])
                else:
                    for i in range(len(note_list)):
                        add_octave = note_list[i][0][:-1] + str(int(note_list[i][0][-1])+ 1)
                        if MIDI_note_dict[add_octave] <= insts[r_dict[inst]][1]:
                            note_list[i] = (add_octave, note_list[i][1])

        # Names the MIDI file
        f_input = 'output.mid'

        # Sets pitch(note), start time and duration for each note 
        for i in range(len(note_list)):
            pitch = MIDI_note_dict[note_list[i][0]]
            time = (note_list[i][1]/120)*2.4
            duration = (1000/120)*2.4
            if i < len(note_list) - 1:
                duration = ((note_list[i+1][1] - note_list[i][1])/120)*2.4
            mf.addNote(track, channel, pitch, time, duration, volume)

        with open(f_input, 'wb') as outf:
            mf.writeFile(outf)

        # Runs a powershell command, uses fluidsynth to join the MIDI and sf2 files and exports it as a .wav
        subprocess.call(f'powershell.exe fluidsynth -F {f_input[:-4]}{inst}.wav {os.path.join(sf2_path, inst)}.sf2 {f_input}', stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)