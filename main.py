
from flask import Flask, render_template,make_response,Request
from ADHSConfig.ADHSConfig_app import ADHSConfig_app




class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string = '%%',
        variable_end_string = '%%'    ))

app = CustomFlask(__name__)
app.register_blueprint(ADHSConfig_app)


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

@app.route("/")
def test():   
    return render_template("test.html")

class Middleware:

    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        # not Flask request - from werkzeug.wrappers import Request
        request = Request(environ)
        print('path: %s, url: %s' % (request.path, request.url))
        # just do here everything what you need
        return self.app(environ, start_response)



# app.wsgi_app = Middleware(app.wsgi_app)

if __name__ == "__main__":
    app.run(debug=True)