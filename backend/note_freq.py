import numpy as np
from scipy.fft import *
from scipy.io import wavfile
from math import log2, pow
from flask import Flask
from flask_restful import Resource, Api, reqparse

file = r"C:/Users/Islam/Desktop/untitled.wav"

A4 = 440
C0 = A4*pow(2, -4.75)
name = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

def freq(file, start_time, end_time):

    # Converts file to mono
    sample_rate, data = wavfile.read(file)
    # If number of array dimensions > 1 
    if data.ndim > 1:
        data = data[:, 0]
    else:
        pass
    
    note_list = []

    notes_num = 5
    interval = 500
    curr = start_time + interval
    
    # maximum length of .wav file in miliseconds
    max = ((len(data) - 1)*1000)/sample_rate

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
        
        # Find note based on frequency
        h = round(12*log2(freq/C0))
        octave = h // 12
        n = h % 12
        note = name[n] + str(octave)

        # If the note is already the last value in note_list, do not append
        if len(note_list) > 0:
            if note != note_list[-1]:
                note_list.append(name[n] + str(octave))
        else:
            note_list.append(name[n] + str(octave))
        start_time = curr

        curr += interval

    print(f'max = {max}')
    return note_list

app = Flask(__name__)
api = Api(app)

# print(freq(file, 0, 3000))
