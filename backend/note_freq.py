import numpy as np
from scipy.fft import *
from scipy.io import wavfile
from statistics import mean
from math import log2, log10, pow, sqrt
from flask import Flask
from flask_restful import Resource, Api, reqparse

file = r"C:/Users/Islam/Desktop/untitled2.wav"

A4 = 440
C0 = A4*pow(2, -4.75)
name = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

def freq(file):
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

    notes_num = 5
    # interval = (start_time + end_time) / notes_num
    interval = 50
    curr = start_time + interval    

    chunks = np.array_split(data, end_time/curr)
    # dbs = [20*log10( (mean(chunk**2))**.5 ) for chunk in chunks]
    vol = []
    for chunk in chunks:
        vol.append(mean([abs(c) for c in chunk]))
    
    while curr <= end_time:
        # Return a slice of the data from start_time to end_time
        dataToRead = data[int(start_time * sample_rate / 1000) : int(curr * sample_rate / 1000) + 1]

        # Fourier Transform
        N = len(dataToRead)
        yf = rfft(dataToRead)
        xf = rfftfreq(N, 1 / sample_rate)

        # Get the most dominant frequency and return it
        idx = np.argmax(np.abs(yf))
        freq = xf[idx]

        freq_list.append(freq)

        curr += interval

    counter = 0
    while counter < len(vol):
        frequencies = []
        while vol[counter] > 1000:
            frequencies.append(freq_list[counter])
            counter += 1
        counter += 1
        if len(frequencies) > 0:
            notes.append(frequencies)
    
    return notes

def note(freq):
    # Find note based on frequency
    h = round(12*log2(freq/C0))
    octave = h // 12
    n = h % 12
    note = name[n] + str(octave)
    return note

note_list = []

for i in freq(file):
    note_list.append(note(mean(i)))

print(note_list)

app = Flask(__name__)
api = Api(app)
