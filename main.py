
from flask import Flask, render_template,make_response

class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string = '%%',
        variable_end_string = '%%'    ))

app = CustomFlask(__name__)

@app.route("/log")
def index():
    resp = make_response(render_template('ADHSTools/log.html'))
    resp.set_cookie('SWITCHFAB', 'BE')
    return resp
@app.route("/2")
def yanwei():
    return render_template("index2.html")

@app.route("/3")
def yanw2ei():
    return render_template("index3.html")
@app.route("/test")
def test():
    
    return render_template("test.html")



if __name__ == "__main__":
    app.run(debug=True)