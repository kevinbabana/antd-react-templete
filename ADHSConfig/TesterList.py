
from flask import request
from flask import Blueprint,jsonify,render_template,make_response,Request
from flask.views import MethodView


TesterList = Blueprint('TesterList', __name__)

  
class TesterListView(MethodView): 
    def view(self): # return templete
        resp = make_response(render_template('ADHSConfig/ADHSConfig.html'))
        resp.set_cookie('SWITCHFAB', 'BE')
        return resp
    def get(self,id):
        if id is None:
            # return a list of users
            return 'all'
        else:
            # expose a single user
            return 'one'
    def post(self):
        print(request.form)
        return jsonify('c')
        # 
        return jsonify('c')
    def put(self,id):
        return 'u'
    def delete(self,id):
        return 'd'




user_view = TesterListView.as_view('user_api')
TesterList.add_url_rule('/TesterList/', defaults={'id': None},
                 view_func=user_view, methods=['GET',])
TesterList.add_url_rule('/TesterList/', view_func=user_view, methods=['POST','VIEW'])
TesterList.add_url_rule('/TesterList/<int:id>', view_func=user_view,
                 methods=['GET', 'PUT', 'DELETE'])