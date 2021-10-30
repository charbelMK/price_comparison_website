from flask import Blueprint, request
from . import db
from .models import Jumia
from flask_cors import CORS

api = Blueprint('api', __name__)

CORS(api)

# Endpoint to query db
@api.route('/query_db', methods=['POST'], strict_slashes=False)
def query_db():
    name = request.json['input']

    products_list = Jumia.query.all()
    products = []

    for product in products_list:
        if name.lower() in product.name.lower():
            products.append({'store': 'Jumia', 'name': product.name, 'price': product.price, 
                            'product_url': product.product_url, 'img_url': product.img_url})
        

    return {'products' : products}    

# Endpoint to update db
@api.route('/add_products', methods=['POST'])
def add_products():
    product_data = request.get_json()

    new_products = Jumia(category=product_data['category'], name=product_data['name'], price=product_data['price'], 
                    product_url=product_data['product_url'], img_url=product_data['img_url'])

    db.session.add(new_products)
    db.session.commit

    return 'Done',201

# Endpoint to Get Products from db
@api.route('/products', methods=['GET'])
def product():
    products_list = Jumia.query.all()
    products = []

    for product in products_list:
        products.append({'store': 'Jumia', 'name': product.name, 'price': product.price, 
                        'product_url': product.product_url, 'img_url': product.img_url})
        

    return {'products' : products}