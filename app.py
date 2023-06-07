from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index4.html')

def main():
    return redirect(url_for('index4.html'))

