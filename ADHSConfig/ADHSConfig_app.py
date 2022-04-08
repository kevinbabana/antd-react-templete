from flask import Blueprint

ADHSConfig_app = Blueprint('ADHSConfig_app', __name__)

@ADHSConfig_app.route('/ADHSConfig')
def show():
        return "Hello Blueprint app2"