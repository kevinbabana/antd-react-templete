
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
@app.route("/goldenmap")
def goldenmap_page():
    return render_template("goldenmap.html")
@app.route("/ADHSConfig")
def ADHSConfig():
    resp = make_response(render_template('ADHSConfig/ADHSConfig.html'))
    resp.set_cookie('SWITCHFAB', 'BE')
    return resp

@app.route("/test")
def test():
    
    return render_template("test.html")



if __name__ == "__main__":
    app.run(debug=True)