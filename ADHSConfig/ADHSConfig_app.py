from flask import Blueprint,render_template,make_response,Request
from .TesterList import TesterList

ADHSConfig_app = Blueprint('ADHSConfig_app', __name__,url_prefix='/ADHSConfig')
ADHSConfig_app.register_blueprint(TesterList)
@ADHSConfig_app.route('/')
def show():
    resp = make_response(render_template('ADHSConfig/ADHSConfig.html'))
    resp.set_cookie('SWITCHFAB', 'BE')
    return resp
