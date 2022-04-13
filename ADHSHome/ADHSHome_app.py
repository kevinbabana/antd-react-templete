from flask import Blueprint,render_template,make_response,Request


ADHSConfig_app = Blueprint('ADHSConfig_app', __name__,url_prefix='/ADHSHome')

@ADHSConfig_app.route('/')
def show():
    resp = make_response(render_template('ADHSConfig/ADHSConfig.html'))
    resp.set_cookie('SWITCHFAB', 'BE')
    return resp

@ADHSConfig_app.route('/query_ods_ieda')
def show():
    resp = make_response(render_template('ADHSConfig/ADHSConfig.html'))
    resp.set_cookie('SWITCHFAB', 'BE')
    return resp
