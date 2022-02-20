# Tuudle 🎵

## Backend

Install Python then navigate to the backend folder. Run these commands to run the Flask app:

1. `pip3 install -r requirements.txt` (install the dependencies)
2. `python3 main.py` (runs the Flask server)

The backend consists of a python program that takes a .wav audio file as an input, derives the distinctly spaced frequencies in said file, converting them to musical notes, and with the utilization of .MIDI files and soundfonts, exports various .wav audio files set to sould like a variety of different instruments. 

fluidsynth is also utilized at the end to combine the .MIDI and .sf2 files. To run the program locally, you must download fluidsynth and add its /bin folder to your PATH in windows.
## Frontend

Navigate to the frontend folder and see readme.
