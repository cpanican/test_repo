from fileinput import filename

from jinja2 import TemplateRuntimeError
from note_freq import freq
import sys, os
from unicodedata import name
from flask import Flask, request, send_file
from io import StringIO
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    if request.method == 'POST':
        audioFile = request.files['file']
        instrument = request.form['instrument']
        print(f'audioFile: {audioFile}', file=sys.stderr)
        print(f'instrument: {instrument}', file=sys.stderr)
        
        file = request.files['file']
        if file:
            print(f'cur_dir: {os. getcwd()}', file=sys.stderr)
            file.save("./hi.wav")
            freq('./hi.wav', './soundfonts')
            path_to_file = "./outputpiano.wav"

            return send_file(
                path_to_file,
                mimetype="audio/wav",
                as_attachment=True,
                attachment_filename="outputpiano.wav"
            )
    else:
        return 'not a post request'

if __name__ == "__main__":
	app.run(host = '0.0.0.0', debug=True, port=420)