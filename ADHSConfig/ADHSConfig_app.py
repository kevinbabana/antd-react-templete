from urllib import request
from flask import Blueprint,render_template,make_response,request,jsonify
from .TesterList import TesterList

ADHSConfig_app = Blueprint('ADHSConfig_app', __name__,url_prefix='/ADHSConfig')
ADHSConfig_app.register_blueprint(TesterList)

@ADHSConfig_app.route('/Page')
def page_load():
    key = request.args.get('ConfigKey') 
    print(key)   
    resp = make_response(render_template('/ADHSConfig/ADHSConfig.html'))
    resp.set_cookie('ConfigKey', key)
    return resp

@ADHSConfig_app.route('/')
def get_link_lists():
    key = request.args.get('ConfigKey') 
    print(key)   
    resp = [{'Name':'TesterList','Url':'TesterListUrl'},{'Name':'B','Url':'BUrl'}]
    return jsonify(resp)


